import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [apiData, setapiData] = useState();
  const [isLoading, setisLoading] = useState();
  const [hasError, sethasError] = useState();
  const getApi = (url) => {
    setisLoading(true);
    axios
      .get(url)
      .then((res) => {
        sethasError(false);
        setapiData(res.data);
      })
      .catch((err) => {
        sethasError(true);
        console.log(err);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  return [apiData, getApi, isLoading, hasError];
};

export default useFetch;
