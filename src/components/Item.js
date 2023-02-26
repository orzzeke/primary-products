import React from "react";
import ItemList from "./ItemList";

const Item = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>作物名稱</th>
            <th>市場名稱</th>
            <th>上價</th>
            <th>中價</th>
            <th>下價</th>
            <th>平均價</th>
            <th>交易量</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((res) => {
              return <ItemList data={res} />;
            })}
        </tbody>
      </table>
    </>
  );
};

export default Item;
