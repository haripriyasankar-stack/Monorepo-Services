import axios from "axios";
import { User } from "@fruit/shared";

const BASE_URL = "http://localhost:3001";

export async function getUserById(id: number): Promise<User> {
    const response = await axios.get<User>(`${BASE_URL}/users/${id}`);
    return response.data;
}