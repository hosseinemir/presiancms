import "./Infomodal.css";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";

export default function Infomodal({ closeinfomodalhandler , children}) {
  useEffect(() => {
    const chekkey = (event) => {
      if (event.keyCode === 27) {
        closeinfomodalhandler();
      }
    };

    window.addEventListener("keydown", chekkey);
    return ()=> window.removeEventListener('keydown',chekkey)
  });

  return (
    <div className="con-modal-main active">
      <div className="info-modal-con">
        <button onClick={() => closeinfomodalhandler()}>
          <CloseIcon />
        </button>
       {children}
      </div>
    </div>
  );
}
