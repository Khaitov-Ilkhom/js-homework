const ins = axios.create({
    baseURL: "https://api.tvmaze.com",
    header: {"Content-Type" : "application/json"},
    timeout: 10000
})

export default ins