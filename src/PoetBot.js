import React, { useState } from "react";
import PoemForm from "./PoemForm";
import Poem from "./Poem";

// renders Poem with user input from PoemForm

const PoetBot = () => {
    // creates a piece of state for each value coming from the form
    const [author, setAuthor] = useState("");
    const [subject, setSubject] = useState("");
    const [action, setAction] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");     
    const [action2, setAction2] = useState("");    
    const [emotion, setEmotion] = useState("");
    const [description, setDescription] = useState("");
    const [part, setPart] = useState("");  
    const [action4, setAction4] = useState("");
    const [action5, setAction5] = useState("");
    const [pronoun, setPronoun] = useState("");
    const [possPronoun, setPossPronoun] = useState("");

    // creates a piece of state that controls what is visible, based on whether the form has been submitted or not; components are rendered conditionally
    const [hasPoem, setHasPoem] = useState(false);

    // creates a function that uses the form data to set the values for each variable in state
    // toggles view from form to poem
    const addWords = (author, subject, action, time, location, emotion, action2, part, description, action4, action5, pronoun, possPronoun) => {
        setAuthor(author);
        setSubject(subject);
        setAction(action);
        setTime(time);
        setLocation(location);
        setEmotion(emotion);
        setAction2(action2);
        setPart(part);
        setDescription(description);
        setAction4(action4);
        setAction5(action5);
        setPronoun(pronoun);
        setPossPronoun(possPronoun);
        setHasPoem(hasPoem => !hasPoem);
    }

    // toggles view from poem back to form
    const reset = () => {
        setHasPoem(hasPoem => !hasPoem);
    }

    return (
        <div className="row">
            <div className="col-12">
            
            {hasPoem ?  
                <Poem 
                author={author}
                subject={subject}
                action={action} 
                time={time}
                location={location} 
                emotion={emotion} 
                action2={action2} 
                part={part}
                description={description}
                action4={action4}
                action5={action5}
                pronoun={pronoun}
                possPronoun={possPronoun}
                reset={reset}/> : 
                <PoemForm addWords={addWords} />}
            </div>
        </div>
    )
}

export default PoetBot;