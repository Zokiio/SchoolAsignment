import React from "react";

function Modal(props) {
  const { show, closeModal } = props;
  return (
    <>
      <div className={show ? "modal" : "hide"}>        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <p>This is modal content</p>
      </div>
    </>
  );
}

export default Modal;

//ska in i home

//   {!show && <button onClick={openModal}>Show modal</button>}
// <Modal closeModal={closeModal} show={show} />

  // const [show, setShow] = useState(false);

  // const openModal = () => setShow(true);
  // const closeModal = () => setShow(false);

  // import Modal from './Modal.js';