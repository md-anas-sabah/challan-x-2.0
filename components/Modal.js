import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="overlay">
      <div className="modal">
        <div className="header">
          <a href="#" onClick={handleClose}>
            <XMarkIcon className="h-10 w-10" />
          </a>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }

  //   return <div>Modal</div>;
}

export default Modal;
