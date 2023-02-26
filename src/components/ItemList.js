import React from "react";

const ItemList = ({ data }) => {
  return (
    <>
      <tr>
        <td>{data.作物名稱}</td>
        <td>{data.市場名稱}</td>
        <td>{data.上價}</td>
        <td>{data.中價}</td>
        <td>{data.下價}</td>
        <td>{data.平均價}</td>
        <td>{data.交易量}</td>
      </tr>
    </>
  );
};

export default ItemList;
