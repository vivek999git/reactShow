import React,{useState} from 'react'

export default function NewForm(props) {

    let btnClicked=()=>{
        console.log('CLicked'+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    let btnClicked2=()=>{
        console.log('CLicked'+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('text changed to lower case','Success','danger');
    }

    let tareaChange=(e)=>{
        setText(e.target.value);
    }

    const [text,setText]=useState('Please enter');
    const [myStyle,setMystyle]=useState({
             backgroundColor:'blue',
             color:"white"
    });
    
    let changeTheme=()=>{
        if(myStyle.backgroundColor==='blue'){
            setMystyle({
                backgroundColor:'green',
                 color:"white"
            });
        }
        else{
            setMystyle({
                backgroundColor:'blue',
                 color:"white"
            });
        }
        
    }
    
  return (
    <>
    <div style={myStyle}>
       <h3>{props.title}</h3>
        <div className="mb-3">
        
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={text} onChange={tareaChange} id="exampleFormControlTextarea1" rows="9"></textarea>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={btnClicked}>Convert to Upper</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={btnClicked2}>Convert to Lower</button>
        </div>
    </div>
    <div className={`container text-${props.mode==='light'}?'dark':'light'`}>
        <div>Total word count {text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</div>
    </div>

    <button className="btn btn-success my-3" onClick={changeTheme}>Change Theme</button>
    </>
  )
}
