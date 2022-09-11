import React from "react";

// creates a poem with user's form inputs

const Poem = ({ subject, action, time, location, emotion, action2, action3, part, description, action4, action5, reset }) => {
    return (
        <div>
            <h2 className="display-6 text-info mb-3 mt-3">Ode to {subject}</h2>
            <div className="fs-4 text text-lowercase">
                <p className="mb-0">{subject}</p>
                <p className="mb-0">{action}</p>
                <p className="mb-0">{time}</p>
                <p className="mb-4">{location}</p>
                <p className="mb-0">{emotion}</p>
                <p className="mb-0">{action2}</p>
                <p className="mb-0"> and {action3}</p>
                <p className="mb-4">{part}</p>
                <p className="mb-0">{description}</p>
                <p className="mb-0">{action4}</p>
                <p className="mb-0">and dreams</p>
                <p className="mb-0">of {action5}</p>
            </div>
            <button className="btn btn-outline-primary mt-3" onClick={reset}>Reset</button>
        </div>
    )
}

export default Poem;