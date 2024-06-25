import * as React from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onConfirmClick?: () => void;
  confirmLabel?: string;
  showCancelButton?: boolean;
  cancelButtonLabel?: string;
  showCloseButtonIcon?: boolean;
  closeButtonIcon?: string;
  children?: React.ReactNode;
};

declare const Modal: React.FC<ModalProps>;
export default Modal;
