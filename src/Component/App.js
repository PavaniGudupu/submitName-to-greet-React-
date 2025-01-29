import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setName] = useState({
    fName: "",
    lName: "",
  });

  const [submitedName, setSubmitedName] = useState("");

  function Handle(event) {
    const { name, value } = event.target;
    setName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  function btnHandle(event) {
    event.preventDefault();

    setSubmitedName(`${fullName.fName} ${fullName.lName}`);
  }

  return (
    <div className="container">
      <h1>Hello {submitedName}</h1>
      <form>
        <input
          name="fName"
          onChange={Handle}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={Handle}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="Submit" onClick={btnHandle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
