import React, {Component, useState} from "react";
import "./../styles/App.css";
import { render } from "enzyme";

function App() {
  const [render,setRender] = useState(false)
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={()=>setRender(true)}>CLick</button>
      {
        render ? <p id="para">Hello, I've learnt to use the full-stack evaluation tool.
          This makes me so happy</p>
          : ""
      }
    </div>
  );
}


export default App;
