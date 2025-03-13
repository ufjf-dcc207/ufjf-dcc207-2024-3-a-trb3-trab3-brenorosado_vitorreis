import axios from "axios";


export async function fetchFakeData(uri:string) {
    try {
      const response = await axios.get(`https://fakerapi.it/api/v1/${uri}`);
      return response.data.data;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      return [];
    }
}