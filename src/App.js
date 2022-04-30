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



  return (
    <>
      <Router>
      {/* <Navbar title="TextUtils" about='About the React' /> */}
      {/* <Navbar  /> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container">
        <Routes>

        {/* Comment-->exact usage
          /users -->Component1
          /users/home -->Component2 */}

        <Route exact path="/Me" element={<Me mode={mode}/>}/>          
            <Route exact path="/" element={<Textform
                showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
          </Routes>
        {/* <Textform
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          
        /> */}
        {/* <Me /> */}
      </div>
      </Router>
    </>
  );
}

export default App;
