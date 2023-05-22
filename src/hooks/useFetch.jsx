import React from "react";
import { useEffect } from "react";
import { getDataFromAPI } from "../api";
import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      getDataFromAPI()
        .then((response) => {
          setResponse(response.data.data);
          setLoading(false);
          console.log(response.data.data);
        })
        .catch((err) => console.log(err.message));
    }, []);
  }, 2000);
  return { loading, response };
};

export default useFetch;
