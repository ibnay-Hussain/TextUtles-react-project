import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm({ heading = "Enter text to analyze", mode, color}) {
    
    const handleOnClick = ()=> {  
        if (count) {
            setText(text.toLowerCase());
            setBtnText("Convert to Upper Case");
        }
        else {
            setText(text.toUpperCase());
            setBtnText("Convert to Lower Case");
        }
        setCount(!count);   
    }

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    const [count, setCount] = useState(false);
    const [btnText, setBtnText] = useState("Convert to Upper Case");
  return (
    <>
        <div className='container my-5'>
            <div className="mb-3">
                <div className={`container d-flex flex-column align-items-start gap-3 text-${color}`}>
                    <h2>{heading}</h2>
                    <textarea onChange={handleOnChange} value={text} placeholder='Enter Text Here' className="form-control border border-2" id="myBox" rows="8"></textarea>
                    <div className="btn btn-primary" onClick={handleOnClick}>{btnText}</div>
                </div>
            </div>
        </div>
        <div className="container">
            <h2 className={`text-${color}`}>Your Text Summary</h2>
            <p className={`text-${color}`}> words : <span className='fw-semibold'>{text.trim().split(/\s+/).filter(word => word.length > 0).length}</span>, characters : <span className='fw-semibold'>{text.length}</span></p>
            <p>
                <span className={`mx-2 fw-semibold text-${color}`}>
                    { 
                        text.split(' ').length <= 1
                        ? 0
                        : (0.008 * text.split(' ').length).toFixed(4)
                    }
                </span>
                Minutes to read it
            </p>
            <h3 className={`i text-${color}`}>Preview</h3>
            <p className={`fst-italic text-${color}`}>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
    </>
  )
}

TextForm.propTypes = { 
    heading : PropTypes
}
