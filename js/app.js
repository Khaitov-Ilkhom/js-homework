const $imgBox = document.querySelector("#img-box")
const $changeBtn = document.querySelector("#change-img")


const fetchInfo = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => renderRandomImg(data))
}

const renderRandomImg = (d) => {
    while ($imgBox.firstChild) {
        $imgBox.removeChild($imgBox.firstChild)
    }
    const img = document.createElement("img")
    img.src = d.message
    $imgBox.appendChild(img)
}



$changeBtn.addEventListener("click", fetchInfo)