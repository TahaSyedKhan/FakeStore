import axios from "axios";
import { FAKESTORE_API } from "../helpers/constants";

export async function fetchProducts() {
    try {
        const response = await axios.get(FAKESTORE_API);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        return null;
    }
}