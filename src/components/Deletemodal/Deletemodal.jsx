import React from "react";
import "./Deletemodal.css";
import ReactDOM from "react-dom";
export default function Deletemodal({yeshandler,nohandler,title}) {
  return ReactDOM.createPortal(
    <div className="con-modal-main active">
      <div className="delete-modal-container">
        <h3>{title}</h3>
        <div>
          <button className="deletemodal-btn deletemodal-y" onClick={()=>yeshandler()}>بله</button>
          <button className="deletemodal-btn deletemodal-n" onClick={()=>nohandler()}>خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
