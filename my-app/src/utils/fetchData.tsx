import axios from "axios";

const FETCH_DATA_URL = "https://api.spacexdata.com/v4/launches";

export const fetchData = async () => {
  const { data } = await axios.get(FETCH_DATA_URL);

  return data;
};
