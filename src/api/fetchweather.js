import axios from "axios";

const URL = "https://openweathermap.org/";
const API_key = "53268a647d290e9f6457193f68699300";

export const fetchweather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_key,
    },
  });
  return data;
};
