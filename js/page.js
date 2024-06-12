import axios from "./axios.js";
import {renderPageInfo} from "./render.js";

const URL = location.search
const ID = new URLSearchParams(URL).get("id")

const renderShows = async (id) => {
    try {
        const response = await axios(`/shows/${id}`)
        renderPageInfo(response.data)
    } catch (error) {
        console.log("Error")
    }
}

renderShows(ID)