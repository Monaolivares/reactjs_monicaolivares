// import de react
import React from "react"; 
// import reactDOM
import ReactDOM from "react-dom/client"; 

//import App
import App from "./App"

// ref al div root
const el = document.getElementById("root"); 

const root = ReactDOM.createRoot(el); 

root.render(<App/>); 