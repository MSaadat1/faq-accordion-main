//import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import { FaqAndAnswer } from "./FaqAndAnswer";

function App() {
  const [openQuestion, setOpenQuestion] = useState(null);

  function handleClick(item) {
    const isOpen = openQuestion === item.id;
    if (isOpen) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(item.id);
    }
  }
  return (
    <>
      <div className="main">
        <FaqAndAnswer openQuestion={openQuestion} handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
