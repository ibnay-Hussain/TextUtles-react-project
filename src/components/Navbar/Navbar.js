import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ title = "TextUtles", aboutText = "About", mode, toggleMode }) {
  const [toggleText, setToggleText] = useState("Enable Dark Mode");
  const [navColor, setNavColor] = useState({
    backgroundColor: '',
  });
  const pallets = [
    ["#0d6efd", "primary"],
    ["#6c757d", "secondary"],
    ["#198754", "success"],
    ["#dc3545", "danger"]
  ];
  const changeColor = (e) => {
    const name = e.target.getAttribute('data-name');
    const colorCode = pallets.find(pallet => pallet[1] === name)[0];
    document.body.style.backgroundColor = colorCode;
  }

  const handleToggleText = () => {
    if (mode === 'dark') {
      setToggleText("Enable Dark Mode");
      setNavColor({
        backgroundColor: '#FFFFF10 !important'
      });
      
    } else {
      setToggleText("Disable Dark Mode");
      setNavColor({
        backgroundColor: '#FFFFF7 !important'
      });
    }
  }
  return (
    <nav className={`lg:ps-5 lg:pe-5 navbar navbar-expand-lg navbar-${mode}  mb-3`} style={navColor}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>
          </ul>
          <div className="d-flex border bg-white rounded me-5">
            <div className="bg-primary rounded mx-2" style={{width:'30px', height:'30px'}} data-name="primary"  onClick={(e)=>changeColor(e)}></div>
            <div className="bg-secondary rounded mx-2" style={{width:'30px', height:'30px'}} data-name="secondary"  onClick={(e)=>changeColor(e)}></div>
            <div className="bg-success rounded mx-2" style={{width:'30px', height:'30px'}} data-name="success"  onClick={(e)=>changeColor(e)}></div>
          </div>
        </div>
        <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" onClick={()=> {toggleMode(); handleToggleText();}} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">{toggleText}</label>
        </div>
      </div>
    </nav>
  );
}

