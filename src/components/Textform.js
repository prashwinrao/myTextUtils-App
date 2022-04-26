import React, {useState} from 'react'  // usestate is the hook in the js
//in react you cannot just assign in to the variable so that state has been declared.. the use of state is given below
export default function Textform(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked:"+text);
        //text="enter text here";       //wrong way
        //setText("Enter text here"); ;   //correct way in react JS
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","primary")
    }

    const handledownClick=()=>{
        let lowtext=text.toLowerCase();
        setText(lowtext)
        props.showAlert("Converted to lowercase","primary")
    }

      const clearText=()=>{
        let clear='';
        setText(clear)
        props.showAlert("Text is cleard","primary")
      }

    const capitalFirstLetter = ()=>{
      let words = text.split(" ")
      console.log(words);
     let uppercaseword = ''
      words.forEach(element => {
         uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
      });
      setText(uppercaseword)

      props.showAlert("First letter is capitalized","primary")
  }

  const Extraspaces=()=>{
    let text1=text.split(/[ ]+/);
    setText(text1.join(" "))
    props.showAlert("ExtraSpaces has been removed","primary")
  }

  const handleCopy =()=>{
    var text=document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied","primary")
  }
    
  const charact=(word)=>{
      const a=word.length
      if (a<=0){
      return 0
      }
      else{
        const b=word.trim().split(" ");
        return b.length;
        
      }
  }

    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
const [text,setText] =useState('');
  return (
      <>
<div className='container' style={{color:props.mode==='dark'||props.red==='danger'?'white':'#042743',}}>
  <h1>{props.heading}</h1>
<div className="mb-3" >
    {/* onchange event listener is the listener when you type anything on the keyboard event will get fired up */}
    {/* onclick even listener is the listener when you click on something then the changes happens according to the given funcion */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="text" rows="8" style={{background:props.mode==='dark'||props.red==='danger'?'gray':'white', color:props.mode==='dark'||props.red==='danger'?'white':'#042743',}}  ></textarea>
</div>
<button className={`btn mx-3 my-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleUpClick}>Convert to uppercase</button>
<button className={`btn mx-3 my-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handledownClick}>Convert to Lowercase</button>
<button className={`btn mx-3 my-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={capitalFirstLetter}>Capitalize</button>
<button className={`btn mx-3 my-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={clearText}>Clear</button>
<button className={`btn mx-3 my-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleCopy}>Copy Text</button>
<button className={`btn mx-3 my-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={Extraspaces}>Remove ExtraSpace</button>



</div>
<div className="container" style={{color:props.mode==='dark'||props.red==='danger'?'white':'#042743',}}>
    <h2>Your text Summary</h2>
    <p><b>{charact(text)}</b> words and <b>{text.length}</b> characters</p>
    <p><b>{0.08*(text.trim().split(" ").length)} </b>Minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>

</div>
</>
  )
}
