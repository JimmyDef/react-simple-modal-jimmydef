import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import crossButton from "./../../assets/cross.svg";
import "./modal.module.css";

/**
 * Modal is a React component for displaying a modal window.
 *
 * @param {Object} props The properties of the component.
 * @param {boolean} props.isOpen Indicates whether the modal is open.
 * @param {function} props.onClose Function called to close the modal.
 * @param {string} props.title The title of the modal.
 * @param {function} [props.onConfirmClick] Function called when the confirm button is clicked.
 * @param {string} [props.confirmLabel="Confirmation"] Alternative text for the confirmation button.
 * @param {boolean} [props.showCancelButton=true] Indicates whether the cancel button should be displayed.
 * @param {string} [props.cancelButtonLabel="Close"] Alternative text for the cancel button.
 * @param {boolean} [props.showCloseButtonIcon=false] Indicates whether the  close icon button  should be displayed.
 * @param {string} [props.closeButtonIcon=crossButton] Path of the image for the close icon button.
 * @param {React.ReactNode} props.children Content to be displayed in the modal.
 * @returns {JSX.Element|null} The JSX rendered output of the component or null if the modal is closed.
 */

const Modal = ({
  isOpen,
  onClose,
  title,
  onConfirmClick,
  confirmLabel = "Confirm",
  showCancelButton = true,
  cancelButtonLabel = "Cancel",
  showCloseButtonIcon = false,
  closeButtonIcon = crossButton,
  children,
}) => {
  const focusRef = useRef();

  // Effect to manage focus when modal opens or closes
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (isOpen) {
      rootElement.setAttribute("aria-hidden", "true");
      rootElement.classList.add("modal-open");
      focusRef.current?.focus();
    } else {
      rootElement.setAttribute("aria-hidden", "false");
      rootElement.classList.remove("modal-open");
    }
  }, [isOpen]);

  // Effect to handle Escape key press to close the modal
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (document.activeElement.id === "firstFocusedDiv") {
        if (event.key === "Tab" && event.shiftKey) {
          onClose();
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen, onClose]);

  // Render nothing if modal is closed
  if (!isOpen) return null;

  // Render modal content
  return createPortal(
    <div
      data-testid="firstFocusedDiv"
      id="firstFocusedDiv"
      tabIndex={0}
      ref={focusRef}
      className={`${styles.overlay} rsmj_Overlay`}
      role="dialog"
      aria-modal="true">
      <div className={`${styles.content} rsmj_Modal`}>
        <h1 id="modal-h1" className={`${styles.title} rsmj_Title`}>
          {title}
        </h1>
        <section className={`${styles.childrenSection} rsmj_ChildrenSection`}>
          {children}
        </section>
        <section className={`${styles.buttonSection} rsmj_ButtonSection`}>
          {onConfirmClick && (
            <button
              className={`${styles.confirmButton} rsmj_ConfirmButton`}
              onClick={onConfirmClick}>
              {confirmLabel}
            </button>
          )}
          {showCancelButton && (
            <button
              className={`${styles.cancelButton} rsmj_CancelButton`}
              onClick={onClose}>
              {cancelButtonLabel}
            </button>
          )}
          {showCloseButtonIcon && (
            <button
              data-testid="closeIconButton"
              className={`${styles.closeButton} rsmj_CloseButton`}
              onClick={onClose}>
              <img
                src={closeButtonIcon}
                alt="close icon"
                className={`${styles.closeButtonIcon} rsmj_CloseButtonIcon`}
              />
            </button>
          )}
        </section>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  cancelButtonLabel: PropTypes.string,
  showCloseButtonIcon: PropTypes.bool,
  showCancelButton: PropTypes.bool,
  onConfirmClick: PropTypes.func,
  confirmLabel: PropTypes.string,
  children: PropTypes.node,
  closeButtonIcon: PropTypes.string,
};
export default Modal;
