import React from "react";
import { GetEmployee } from "../Data/GetFunctions";

function Modal(props) {
  const { show, closeModal } = props;

  GetEmployee(e.target.value).then(e => {
    console.log("func e is", e);
  });

  return (
    <>
      <div className={show ? "modal" : "hide"}>
        {" "}
        <button onClick={closeModal}>X</button>
        <h1>Employee Details: </h1>
        <p>{employee.firstName}</p>
        <p>{employee.lastName}</p>
        <p>{employee.department}</p>
        <p>{employee.tel}</p>
        <p>{employee.telInter}</p>
        <p>{employee.mail}</p>
      </div>
    </>
  );
}

export default Modal;
