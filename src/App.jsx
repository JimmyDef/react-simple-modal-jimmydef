import { useState } from "react";
import Modal from "./lib/components/Modal";

import "./app.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <main>
      <h1>React Simple Modal JimmyDef</h1>
      <button className="button" onClick={openModal}>
        Try me
      </button>
      <Modal title="Working good !" isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default App;
