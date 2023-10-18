import axios from "axios";

export default async function fetchData(dataTypes) {
  try {
    const response = await axios.get("./public/data/data.json");
    return response.data[dataTypes];
  } catch (error) {
    console.error("Chyba při načítání dat: ", error);
    return [];
  }
}
