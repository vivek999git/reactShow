 
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewForm from './components/NewForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
 

 
function App() {
   
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,head,type)=>{
    setAlert({
      msg: message,
      head: head,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500 );
  }
  
  const removeBgClass=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const setWebMode=(cls)=>{
    removeBgClass();
    console.log(cls)
    document.body.classList.add('bg-'+cls);
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert('Dark Mode Enabled','Success','primary');
      document.title='Text-APP Dark Mode';
    }
      
    else
    {
       setMode('light');
       document.body.style.backgroundColor='white'
       showAlert('Light Mode Enabled','Success','danger');
       document.title='Text-APP Light Mode';
    }
     
  };

  
  return (
    <>
    <Router>
     <Navbar title="My Home Page" about="About Me"  mode={mode} setWebMode={setWebMode} />
     <Alert alert={alert} />
     <div className='container my-3'>
     <Routes>
        
          <Route exact path="/about" element={<About />} />
          <Route eaact path="/" element={
            <NewForm title="Enter Text Here" mode={mode} alert={alert} showAlert={showAlert} />
            } />
        </Routes>

   {/*  <NewForm title="Enter Text Here" mode={mode} alert={alert} showAlert={showAlert} /> */}
     </div>
     </Router>
    </>
  );
  
}

export default App;
