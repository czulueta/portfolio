import React from "react"
import { Link } from "react-router-dom"
import footer from "./images/green-footer-icon.svg" 

export default function Footer(){
  return(
    <div className="footer-container">
      <footer>
          <Link onClick={() => ( window.scrollTo({ top: 0, behavior: "smooth"}))} className="name" to="/" >Cesar Zulueta</Link>
          <nav className="nav-links">
            <ul>
              <li onClick={() => ( window.scrollTo({ top: 1350, behavior: "smooth"}))}><Link className="skils" to="/">Skills</Link></li>
              <li onClick={() => ( window.scrollTo({ top: 850, behavior: "smooth"}))}><Link className="work" to="/">Work</Link></li>
              <li><Link className="resume" to="/resume">Resume</Link></li>
            </ul>
          </nav>  
      </footer> 
      <img className="blue" src={footer} alt="blue bars" />
    </div>
  )
}