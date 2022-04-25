import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";    //npm install react-router-dom

// import Me from './components/Me';

import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Me from "./components/Me";
import Textform from "./components/Textform";

function App() {
  const [mode, setMode] = useState("light");

  const [red, setRed] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled to Dark Mode", "dark");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled to Light Mode", "success");
      document.title = "TextUtils - Light Mode";
    }
    //   setInterval(() => {    //-->to hightlight the Title
    //     document.title="InstaLL TextUtils Now";
    //  }, 2000);
    //  setInterval(() => {
    //    document.title="Virus Install Now";
    //  }, 1500);
  };

  const redMode = () => {
    if (red === "light") {
      setRed("danger");
      document.body.style.backgroundColor = "rgb(238, 0, 48)";
    } else {
      setRed("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" about='About the React' /> */}
        {/* <Navbar  /> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          red={red}
          redMode={redMode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
          {/* exact usage
          /users -->Component1
          /users/home -->Component2 */}

            <Route exact path="/Me" element={<Me />}/>          
            <Route exact path="/" element={<Textform
                showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} red={red} />}/>
          </Routes>

          {/* <Me /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
