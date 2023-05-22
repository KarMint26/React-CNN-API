import axios from "axios";

export async function getDataFromAPI() {
  try {
    const response = await axios.get(
      "https://berita-indo-api.vercel.app/v1/cnn-news/"
    );
    if (!response) {
      throw new Error("Failed To Get Data From API");
    }
    return response;
  } catch (error) {
    console.error(error);
  }
}
