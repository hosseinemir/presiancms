import "./Editmodal.css";
import CloseIcon from "@mui/icons-material/Close";

import React, { useEffect } from "react";

export default function Editmodal({
  closeeditmodal,
  children,
  submiteditmodal,
}) {
  useEffect(() => {
    const chekkey = (event) => {
      if (event.keyCode === 27) {
        closeeditmodal();
      }
    };

    window.addEventListener("keydown", chekkey);
    return () => window.removeEventListener("keydown", chekkey);
  });

  return (
    <div className="con-modal-main active">
      <div className="edit-modal-con">
        <button onClick={() => closeeditmodal()}>
          <CloseIcon />
        </button>
        <h2>تغیرات مورد نظر را وارد کنید</h2>
        <form action="" className="edit-modal-form">
          {children}
          <button className="edit-modal-btn" onClick={submiteditmodal}>تایید تغیرات</button>
        </form>
      </div>
    </div>
  );
}
