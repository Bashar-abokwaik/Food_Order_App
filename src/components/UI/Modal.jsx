import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Modal component to display content in a dialog
export default function Modal({ children, open, onClose, className = "" }) {
  // Reference to the dialog element
  const dialog = useRef();

  // Effect to handle opening and closing of the modal
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    // Cleanup function to close the modal
    return () => modal.close();
  }, [open]);
  
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
