import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
  const [data, setData] = useState();

  const fetchData = () => {
    axios
      .get("https://api.spacexdata.com/v4/launches")
      .then((response) => setData(response.data))
      .catch((e) => console.log("fetch data failed: ", e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
