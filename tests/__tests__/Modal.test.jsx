import { it, describe, expect, beforeEach, vi } from "vitest";
import Modal from "./../../src/lib/components/Modal";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Modal", () => {
  beforeEach(() => {
    const rootDiv = document.createElement("div");
    rootDiv.id = "root";
    document.body.appendChild(rootDiv);
  });
  const user = userEvent.setup();

  describe("when the modal is open and I press Esc ", () => {
    it("Should close the modal", async () => {
      const onClose = vi.fn();
      render(<Modal isOpen={true} title="Working good !" onClose={onClose} />);

      expect(await screen.findByText("Working good !")).toBeInTheDocument();
      await user.type(document.body, "{Escape}");
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
  describe("when the modal just opens and receives focus and I press Shift+Tab ", () => {
    it("Should close the modal", async () => {
      const onClose = vi.fn();
      render(<Modal isOpen={true} title="Working good !" onClose={onClose} />);

      const firstDivFocused = screen.getByTestId("firstFocusedDiv");
      expect(firstDivFocused).toHaveFocus();
      expect(await screen.findByText("Working good !")).toBeInTheDocument();
      await user.tab({ shift: true });
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
  describe("when  I press Shift+Tab but the focus is not on the first div modal", () => {
    it("Should not close the modal", async () => {
      const onClose = vi.fn();
      render(<Modal isOpen={true} title="Working good !" onClose={onClose} />);
      const firstDivFocused = screen.getByTestId("firstFocusedDiv");
      expect(await screen.findByText("Working good !")).toBeInTheDocument();
      expect(firstDivFocused).toHaveFocus();
      const cancelButton = screen.getByRole("button", { name: "Cancel" });
      await user.tab();
      expect(cancelButton).toHaveFocus();
      await user.tab({ shift: true });
      expect(onClose).not.toHaveBeenCalled();
    });
  });
  describe("when onConfirmClick props receive a function", () => {
    it("Should display a functional  Confirm button", async () => {
      const onConfirmClick = vi.fn();
      const onClose = vi.fn();
      render(
        <Modal
          onClose={onClose}
          isOpen={true}
          title="Working good !"
          onConfirmClick={onConfirmClick}
        />
      );
      const button = screen.getByRole("button", { name: "Confirm" });

      expect(button).toBeInTheDocument();
      await user.click(button);
      expect(onConfirmClick).toHaveBeenCalled();
    });
  });
  describe("when showCloseButtonIcon props receive a  boolean = true", () => {
    it("Should display a functional close icon button", async () => {
      const onClose = vi.fn();
      render(
        <Modal
          onClose={onClose}
          isOpen={true}
          title="Working good !"
          showCloseButtonIcon={true}
        />
      );
      const button = screen.getByTestId("closeIconButton");

      expect(button).toBeInTheDocument();
      await user.click(button);
      expect(onClose).toHaveBeenCalled();
    });
  });
  describe("when closeButtonIcon props receive an  image/icon", () => {
    it("Should display the image", async () => {
      const closeButtonIcon = "/path/to/close-icon.png";
      const onClose = vi.fn();

      render(
        <Modal
          onClose={onClose}
          isOpen={true}
          title="Working good !"
          showCloseButtonIcon={true}
          closeButtonIcon={closeButtonIcon}
        />
      );
      const img = screen.getByAltText("close icon");
      expect(img).toHaveAttribute("src", closeButtonIcon);
    });
  });
});
