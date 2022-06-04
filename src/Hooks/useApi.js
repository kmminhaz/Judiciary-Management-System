import { useEffect, useState } from "react";

const useApi = () => {
  const [datas, setData] = useState([]);

  useEffect( () => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  

  return { datas };
};

export default useApi;
