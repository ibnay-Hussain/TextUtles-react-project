
// import { useFormState } from 'react-dom';
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/textForm';
import Alert from './components/Alert/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState('black');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type)=> {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=> {
    if (mode === 'light') 
    {
      setMode('dark');
      setColor('white');
      showAlert("Dark Mode Enabled", "warning");
      document.body.style.backgroundColor = '#212729';
    }
    else
    {
      setMode('light');
      setColor('black');
      showAlert("Light Mode Enabled", "success");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} />
      <TextForm mode={mode} color = {color} />
      {/* <About mode={mode} toggleMode={toggleMode} /> */}
    </>
  );
}

export default App;
