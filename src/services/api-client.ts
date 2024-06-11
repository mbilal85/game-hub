import axios from "axios"; 

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: 'f159a8537b2e45ed8d648342c45a4f37'
    }
})