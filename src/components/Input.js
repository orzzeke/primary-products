import React from "react";
import Button from "react-bootstrap/Button";

const Input = () => {
  return (
    <div>
      <form className="input">
        <label htmlFor="data">作物名稱</label>
        <input type="text" id="data" placeholder="請輸入作物名稱" />
        <Button variant="outline-success" size="sm">
          搜尋
        </Button>{" "}
      </form>
    </div>
  );
};

export default Input;
