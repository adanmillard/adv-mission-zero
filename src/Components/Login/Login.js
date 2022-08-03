import React from "react";
import "./login.css";

export const Login = ({ closeModal }) => {
  return (
    <div className="modal-background" onClick={() => closeModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="close-btn">
          <button
            className="x-btn"
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-content">
          <div className="modal-title">
            <h1>Login</h1>
          </div>
          <div className="modal-body">
            <div>
              <input></input>
            </div>
            <div>
              <input></input>
            </div>
          </div>
          <div className="modal-footer">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
