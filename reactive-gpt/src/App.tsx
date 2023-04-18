import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {generateText as gText} from './api/agent'

function App() {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("")

  const generateText = () =>{
    gText(`Top five cities    
    Country: India
    Cities: New Delhi, Mumbai, Kolkata, Ahmedabad, Chennai
    Contry: ${inputText}
    Cities:`).then((res)=>{
      setGeneratedText(res.choices[0].text)
    })
  }
  return (
    <div>
      <textarea 
        placeholder='Enter text here'
        value={inputText}
        onChange={(event)=>setInputText(event.target.value)}
      />

      <button onClick={generateText}>Generate Text</button>
      <div>{generatedText}</div>

    </div>
  );
}

export default App;
