import React from "react";
import Button from "react-bootstrap/Button";

const Title = () => {
  return (
    <div className="btn">
      <Button variant="outline-dark">全部</Button>{" "}
      <Button variant="outline-dark">蔬菜</Button>{" "}
      <Button variant="outline-dark">水果</Button>{" "}
      <Button variant="outline-dark">花卉</Button>{" "}
    </div>
  );
};

export default Title;
