import { render } from "react-dom"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App.js"


render(
  <Router>
    
    <App /> 
    
  </Router>
  ,
  document.getElementById("root")
)