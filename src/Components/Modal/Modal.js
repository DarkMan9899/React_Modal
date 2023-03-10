import React, { useState } from "react";
import "./Modal.css";
import "../redirect/index.css"


export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (


    <div>
      <button onClick={toggleModal} className="btn-modal button-85 ">
        Open
      </button>


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" ></div>
          <div className="modal-content">

            <div className={'redirect-container'}>
              <h2>You are About to redirect to external link</h2>
              <button className={"button-24"}> Confirm</button >
            </div>
            <figure>
              <div></div><div></div>
              <div></div><div></div>
              <div></div><div></div>
              <div></div><div></div>
            </figure>

            {/*<button className="close-modal" onClick={toggleModal}>*/}
            {/*  CLOSE*/}
            {/*</button>*/}

            <a href="#" className="close close-modal"  onClick={toggleModal}/>

          </div>
        </div>
      )}
    </div>
  );
}
