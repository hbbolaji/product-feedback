import React from "react";

interface ModalProps {
  close: () => void;
  show: boolean;
  children?: JSX.Element;
}

const style = {
  background: "rgba(0,0,0, 0.7)",
};

const Modal: React.FC<ModalProps> = ({ children, close, show }) => {
  return (
    <>
      {show && (
        <div
          className="fixed top-0 p-8 overflow-none w-full h-screen flex justify-center items-center"
          style={style}
          onClick={close}
        >
          <div
            className="min-h-72 p-8 w-full sm:w-4/5 lg:w-3/5 xl:w-2/5 rounded-lg bg-white dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
