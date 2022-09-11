import React, { useState } from "react";
import PoemForm from "./PoemForm";
import Poem from "./Poem";

// renders the form for user to submit words and the story component that generates the Madlib using their words

const PoetBot = () => {
    // creates a piece of state for each value coming from the form
    const [subject, setSubject] = useState("");
    const [action, setAction] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");     
    const [action2, setAction2] = useState("");    
    const [emotion, setEmotion] = useState("");
    const [action3, setAction3] = useState(""); 
    const [description, setDescription] = useState("");
    const [part, setPart] = useState("");  
    const [action4, setAction4] = useState("");
    const [action5, setAction5] = useState("");

    // creates a piece of state that controls what is visible, based on whether the form has been submitted or not; components are rendered conditionally
    const [hasStory, setHasStory] = useState(false);

    // creates a function that uses the form data to set the values for each variable in state
    // toggles view from form to story
    const addWords = (subject, action, time, location, emotion, action2, action3, part, description, action4, action5) => {
        setSubject(subject);
        setAction(action);
        setTime(time);
        setLocation(location);
        setEmotion(emotion);
        setAction2(action2);
        setAction3(action3);
        setPart(part);
        setDescription(description);
        setAction4(action4);
        setAction5(action5);
        setHasStory(hasStory => !hasStory);
    }

    // toggles view from story back to form
    const reset = () => {
        setHasStory(hasStory => !hasStory);
    }

    return (
        <div className="row">
            <div className="col-12">
            <h1 className="display-1">PoetBot</h1>
            {hasStory ?  
                <Poem 
                subject={subject}
                action={action} 
                time={time}
                location={location} 
                emotion={emotion} 
                action2={action2} 
                action3={action3} 
                part={part}
                description={description}
                action4={action4}
                action5={action5}
                reset={reset}/> : 
                <PoemForm addWords={addWords} />}
            </div>
        </div>
    )
}

export default PoetBot;