document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('studentForm');
    const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];


    // LocalStoragedan ma'lumotlarni yuklash
    function loadStudents() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.forEach((student, index) => {
            addStudentToTable(student, index);
        });
    }

    // Studentni jadvalga qo'shish
    function addStudentToTable(student, index) {
        const row = studentTable.insertRow();
        row.setAttribute('data-index', index);

        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const majorCell = row.insertCell(2);
        const actionCell = row.insertCell(3);

        nameCell.textContent = student.name;
        ageCell.textContent = student.age;
        majorCell.textContent = student.major;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "O'chirish";
        deleteButton.addEventListener('click', () => {
            deleteStudent(index);
        });
        actionCell.appendChild(deleteButton);
    }

    // Studentni localStorage'ga saqlash
    function saveStudent(student) {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
        return students.length - 1
        // Qo'shilgan studentning indexi
    }

    // Studentni o'chirish
    function deleteStudent(index) {
        let students = JSON.parse(localStorage.getItem('students')) || [];
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
        refreshTable();
    }

    // Jadvalni yangilash
    function refreshTable() {
        studentTable.innerHTML = '';
        loadStudents();
    }

    // Formani submit qilish
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const student = {
            name: form.name.value,
            age: form.age.value,
            major: form.major.value,
        };

        const index = saveStudent(student);
        addStudentToTable(student, index);

        form.reset();
    });

    loadStudents();
});