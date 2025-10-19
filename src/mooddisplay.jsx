import React from "react";
import { useState, useEffect } from "react";
import "./mooddisplay.css";

function MoodDisplay({title}) {
    const [mood, setMood] = useState("Happy 😊");
    
    //chnage document title whenever mood changes
    useEffect(() => {
        document.title = `My Mood is ${mood}`
    },[mood])
    document.title = `You are ${mood}`

  return (
    <div className="container">
      <h2>Mood Display {title}</h2>
      <div className="emoji">{mood}</div>
      <div className="buttonRow">
        <button onClick={() => setMood("Happy 😊")}>Happy</button>
        <button onClick={() => setMood("Sad 😢")}>Sad</button>
        <button onClick={() => setMood("Angry 😡")}>Angry</button>
        <button onClick={() => setMood("Tired 😴")}>Tired</button>
      </div>
    </div>
  );
}
export default MoodDisplay;
