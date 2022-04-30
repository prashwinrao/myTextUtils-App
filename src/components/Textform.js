import React, { useState } from "react"; // usestate is the hook in the js
//in react you cannot just assign in to the variable so that state has been declared.. the use of state is given below
export default function Textform(props) {
  const handleUpClick = () => {
    //text="enter text here";       //wrong way
    //setText("Enter text here"); ;   //correct way in react JS
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "info");
  };

  const handledownClick = () => {
    let lowtext = text.toLowerCase();
    setText(lowtext);
    props.showAlert("Converted to lowercase", "info");
  };

  const clearText = () => {
    let clear = "";
    setText(clear);
    props.showAlert("Text is cleard", "info");
  };

  const capitalFirstLetter = () => {
    let words = text.split(" ");
    console.log(words);
    let uppercaseword = "";
    words.forEach((element) => {
      uppercaseword +=
        element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() + " ";
    });
    setText(uppercaseword);

    props.showAlert("First letter is capitalized", "info");
  };

  const Extraspaces = () => {
    let text1 = text.split(/[ ]+/);
    setText(text1.join(" "));
    props.showAlert("ExtraSpaces has been removed", "info");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges(); //not to select while copying the text
    props.showAlert("Text has been copied", "info");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color:
            props.mode === "dark"
              ? "white"
              : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* onchange event listener is the listener when you type anything on the keyboard event will get fired up */}
          {/* onclick even listener is the listener when you click on something then the changes happens according to the given funcion */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="text"
            rows="8"
            style={{
              background:
                props.mode === "dark" 
                  ? "#1d4c70"
                  : "white",
              color:
                props.mode === "dark" 
                  ? "white"
                  : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn mx-3 my-3 btn-${
            props.mode === "light" ? "warning" : "dark"
          }`}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn mx-3 my-3 btn-${
            props.mode === "light" ? "warning" : "dark"
          }`}
          onClick={handledownClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn mx-3 my-3 btn-${
            props.mode === "light" ? "warning" : "dark"
          }`}
          onClick={capitalFirstLetter}
        >
          Capitalize
        </button>
        <button
          disabled={text.length === 0}
          className={`btn mx-3 my-3 btn-${
            props.mode === "light" ? "warning" : "dark"
          }`}
          onClick={clearText}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className={`btn mx-3 my-3 btn-${
            props.mode === "light" ? "warning" : "dark"
          }`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn mx-3 my-3 btn-${
            props.mode === "light" ? "warning" : "dark"
          }`}
          onClick={Extraspaces}
        >
          Remove ExtraSpace
        </button>
      </div>
      <div
        className="container"
        style={{
          color:
            props.mode === "dark" 
              ? "white"
              : "#042743",
        }}
      >
        <h2>Your text Summary</h2>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.08 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
          </b>
          Minutes read
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
