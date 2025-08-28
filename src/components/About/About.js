import React, { useEffect, useState } from 'react'
import './About.css'

export default function About({ mode, toggleMode }) {
  
  const [myStyle, setMyStyle] = useState({
    color: '',
    backgroundColor: ''
  });
  const [btnStyle, setBtnStyle] = useState({
    backgroundColor: ''
  });
  const [arrowColor, setArrowColor] = useState({
    color: ''
  });
  const [darkModeBtnText, setDarkModeBtnText] = useState("Enable dark mode");
  
  useEffect(() => {
    if(mode == "dark") {
        setMyStyle({ color: 'white', backgroundColor: '#212529' });
        setArrowColor({ color: 'white' });    
        setDarkModeBtnText("Disable dark mode");
        setBtnStyle({ backgroundColor: '#212529' });
    }
    else{
        setMyStyle({ color: 'black', backgroundColor: 'white' });
        setArrowColor({ color: 'black' });
        setDarkModeBtnText("Enable dark mode");
        setBtnStyle({ backgroundColor: '#0d6efd' });
    }
    
  }, [mode]);
  return (
    <div className='about-container container d-flex flex-column gap-3 py-4 border rounded-3 my-5' style={myStyle}>
        <h1 className='p-0 m-0'>About Us</h1>
        <div className="accordion p-0 m-0" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Analyze your text
                <span style={arrowColor} className="ms-auto">▼</span>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Free to use
                <span style={arrowColor} className="ms-auto">▼</span>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                Browser Compatibility
                <span style={arrowColor} className="ms-auto">▼</span>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
