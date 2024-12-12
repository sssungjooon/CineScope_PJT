import React from "react";
import "./ModalView.css"; // 스타일 파일

function ModalView({ onClose, children }) {
  const hideModal = () => {
    document.body.classList.remove("modal-open");
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="modal-container">
      {children} {/* Vue의 <slot>과 동일 */}
      <a onClick={hideModal} className="modal-close-button">
        x
      </a>
    </div>
  );
}

export default ModalView;
