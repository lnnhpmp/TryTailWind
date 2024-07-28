import axios from "axios";
import { useEffect, useState } from "react";

const FETCH_DATA_URL = "https://api.spacexdata.com/v4/launches";

export const useData = () => {
  const [data, setData] = useState();

  const fetchData = () => {
    axios
      .get(FETCH_DATA_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
