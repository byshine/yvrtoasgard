import React, { useState } from "react";

function Lightbox({ children }) {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const toggle = () => {
    setOpen(!open);
  };

  const handleClose = (e) => {
    if (e.currentTarget.isEqualNode(e.target)) {
      close();
    }
  };
  return (
    <div>
      {open === true ? (
        <div
          className="fixed inset-0 w-full h-full bg-black overflow-hidden z-50 flex justify-center"
          onClick={handleClose}
        >
          <div className="max-w-[80%] max-h-[80%] mt-10">{children}</div>
        </div>
      ) : (
        <div onClick={toggle}>{children}</div>
      )}
    </div>
  );
}

export default Lightbox;
