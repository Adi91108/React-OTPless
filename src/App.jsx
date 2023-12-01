import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import User from "./components/User";
export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
         <User/>
      <div className={!toggle ? "modal-container" : ""}>
        <div className="modal">
          <Modal />
        </div>
      </div>
      <button onClick={() => setToggle((prev) => !prev)}>Login</button>
    </>
  );
}
