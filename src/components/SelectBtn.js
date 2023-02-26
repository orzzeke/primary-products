import React from "react";
import Select from "react-select";

const SelectBtn = () => {
  const options = [
    { value: "up", label: "依上價排序" },
    { value: "strawberry", label: "依中價排序" },
    { value: "vanilla", label: "依下價排序" },
    { value: "vanilla", label: "依平均價排序" },
    { value: "vanilla", label: "依交易量排序" },
  ];
  return (
    <div className="select">
      <Select options={options} placeholder="排序篩選" />
    </div>
  );
};

export default SelectBtn;
