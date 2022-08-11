import React from "react";

function ErrorModal({ msg, setVisibility }) {
  return (
    <div className="dialog position-absolute top-0 bottom-0 left-0 right-0 d-flex justify-content-center align-items-start mt-5">
 
      <div className="modal-body bg-white p-3 border">
      <h4>Error</h4>
      <hr />
        <p className="mb-3">{msg}</p>
        <button className="nav-modal-btn float-right" onClick={() => setVisibility(false)}>Close</button>
      </div>
    </div>
  );
}

export default ErrorModal;
