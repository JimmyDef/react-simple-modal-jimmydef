import { it, describe, expect, beforeEach } from "vitest";
import App from "./../../src/App";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe(" App", () => {
  beforeEach(() => {
    const rootDiv = document.createElement("div");
    rootDiv.id = "root";
    document.body.appendChild(rootDiv);
  });
  const user = userEvent.setup();

  it("should render the app with  title and button", () => {
    render(<App />);
    expect(screen.getByText("React Simple Modal JimmyDef")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Try me" })).toBeInTheDocument();
  });

  describe("when I click on the button ", () => {
    it("should open the modal", async () => {
      render(<App />);
      const openModalButton = screen.getByRole("button", { name: "Try me" });
      user.click(openModalButton);
      expect(await screen.findByText("Working good !")).toBeInTheDocument();
    });
  });

  describe("when the modal is displayed and I click on the Cancel button ", () => {
    it("should close the modal", async () => {
      render(<App />);
      const openModalButton = screen.getByRole("button", { name: "Try me" });
      await user.click(openModalButton);
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(await screen.findByText("Working good !")).toBeInTheDocument();
      const cancelButton = screen.getByRole("button", { name: "Cancel" });
      await cancelButton.click(cancelButton);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
