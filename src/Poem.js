import React from "react";

// returns a poem with user's form inputs

const Poem = ({ author, subject, action, time, location, emotion, action2, part, description, action4, action5, pronoun, possPronoun, reset }) => {
    return (
        <div className="Poem">
            <h1 className="display-1 text-info text-capitalize mb-1 mt-3">Ode <span className="text-lowercase">to</span> {subject}</h1>
            <h2 className="display-5 text-info">by {author}</h2>
            <div className="fs-1 text text-lowercase">
                <p className="mb-0">{subject}</p>
                <p className="mb-0">{action}</p>
                <p className="mb-0">{time}</p>
                <p className="mb-4">{location}</p>
                <p className="mb-0">{emotion}</p>
                <p className="mb-0">{pronoun} {action2}</p>
                <p className="mb-0"> and extends</p>
                <p className="mb-4">{possPronoun} {part}</p>
                <p className="mb-0">{description}</p>
                <p className="mb-0">{pronoun} {action4}</p>
                <p className="mb-0">and dreams</p>
                <p className="mb-0">of {action5}</p>
            </div>
            <button className="btn btn-outline-primary mt-3" onClick={reset}>Create a New Poem</button>
        </div>
    )
}

export default Poem;