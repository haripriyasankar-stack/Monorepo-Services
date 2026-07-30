import axios from "axios";
import { Fruit } from "@fruit/shared";

const BASE_URL = "http://localhost:3002";

export async function getFruitById(id: number): Promise<Fruit> {
    const response = await axios.get<Fruit>(`${BASE_URL}/fruits/${id}`);
    return response.data;
}