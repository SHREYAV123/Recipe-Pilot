import axios from "axios";

// Backend URL
console.log(import.meta.env.VITE_API_URL);
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generate Recipe
export const generateRecipe = async (data) => {
  try {
    const response = await API.post("/recipe/generate", data);

    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};