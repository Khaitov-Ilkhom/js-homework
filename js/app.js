import axios from "./axios.js";
import {renderData} from "./render.js";

const loadData = async () => {
    try {
        const response = await axios("/shows")
        if (!response.status || response.status !== 200) {
            throw new Error(response)
        }
        renderData(response.data)
    } catch (error) {
        console.log(error.message)
    }
}

loadData()