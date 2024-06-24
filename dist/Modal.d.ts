import * as React from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onConfirmClick?: () => {};
  confirmLabel?: "Confirm";
  showCancelButton?: boolean;
  cancelButtonLabel?: "Cancel";
  showCloseButtonIcon?: boolean;
  closeButtonIcon?: string;
  children: React.ReactNode;
};

declare const Modal: React.FC<ModalProps>;
export default Modal;
