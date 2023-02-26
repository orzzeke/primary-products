import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Input from "./components/Input";
import SelectBtn from "./components/SelectBtn";
import Item from "./components/Item";
import axios from "axios";

const List = () => {
  const URL = "https://hexschool.github.io/js-filter-data/data.json";
  const [data, setData] = useState([]);

  const search = async (url) => {
    let result = await axios.get(url);
    setData(
      result.data.filter(
        (item) =>
          item.作物名稱 !== null &&
          item.作物名稱.trim() !== "" &&
          item.上價 !== 0
      )
    );
  };

  useEffect(() => {
    search(URL);
  });

  return (
    <div className="list">
      <Title />
      <Input />
      <SelectBtn />
      <Item data={data} />
    </div>
  );
};

export default List;
