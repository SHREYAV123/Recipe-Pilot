import axios from "axios";

const API = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const generateRecipe = async (data) => {
  try {
    const response = await API.post("/recipe", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};