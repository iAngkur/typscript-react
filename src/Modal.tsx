import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const popIn = keyframes`
  from {transform: scale(0.7) opacity: 0;}
  to {transform: scale(1) opacity: 1;}
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ModalContainer = styled.div`
  width: calc(100% - 8rem);
  height: 80vh;
  padding: 0.5em;
  background-color: #f8d05d;
  position: relative;
  animation: ${popIn} 0.5s ease-in-out forwards;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1.25em;
  right: -0.25em;
  background: none;
  border: none;
  color: red;
  font-size: 1.5em;
  cursor: pointer;
`;

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Overlay>
          <ModalContainer>
            <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
            <div style={{ width: "100%", height: "100%" }}>
              <h2>Modal</h2>
            </div>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
}

export default Modal;
