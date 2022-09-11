import React, { useState } from "react";

// allows user to submit words of their choice for each field and keeps choices in state

const PoemForm = ( { addWords }) => {

    let INITIAL_STATE = {
        subject: "",
        action: "",
        time: "",
        location: "",
        emotion: "",
        action2: "",
        action3: "",
        part: "",
        description: "",
        action4: "",
        action5: ""
    }
    // sets the initial form values to be blank

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    // sets the value of each form field on the formData object
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    // calls a function(addWords) that provides access formData values in the parent component
    // resets form data fields to empty
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { subject, action, time, location, emotion, action2, action3, part, description, action4, action5 } = formData;
        addWords(subject, action, time, location, emotion, action2, action3, part, description, action4, action5);
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <p className="fs-3">Write an ode to someone or something you love!</p>
            <p>With full credit, appreciation (and sincere apologies) to <a href="https://www.poetryfoundation.org/poets/francisco-x-alarcon">Francisco Alarcón</a> for his wonderful poem, <a href="https://www.poetryfoundation.org/poems/91109/ode-to-my-shoes">Ode to My Shoes</a>, which serves as the muse for this PoetBot!</p>            
            <form onSubmit={handleSubmit}>
                <label htmlFor="subject">Your subject</label>            
                <input
                className="form-control"             
                id="subject"
                type="text"
                name="subject"            
                value={formData.subject}
                onChange={handleChange}
                placeholder="enter your subject (i.e. 'My Bicycle' or 'The Sea' or 'Samantha')"
                />
                
                <label htmlFor="action">Your subject's action</label>            
                <input
                className="form-control"             
                id="action"
                type="text"
                name="action"            
                value={formData.action}
                onChange={handleChange}
                placeholder="enter an action associated with your subject (i.e. something it does or they do)"
                />

                <label htmlFor="time">Period of time</label>
                <input
                className="form-control" 
                id="time"
                type="text"
                name="time"            
                value={formData.time}
                onChange={handleChange}
                placeholder="enter a period of time (i.e. 'all week' or 'for hours')"
                />

                <label htmlFor="verb">Location</label>
                <input
                className="form-control" 
                id="location"
                type="text"
                name="location"            
                value={formData.location}
                onChange={handleChange}
                placeholder="enter a location associated with your subject"
                />

                <label htmlFor="adverb">Emotion</label>
                <input
                className="form-control" 
                id="emotion"
                type="text"
                name="emotion"            
                value={formData.emotion}
                onChange={handleChange}
                placeholder="enter an emotion associated with your subject"
                />

                <label htmlFor="adjective3">Pronoun with action</label>            
                <input
                className="form-control"             
                id="action2"
                type="text"
                name="action2"            
                value={formData.action2}
                onChange={handleChange}
                placeholder="enter your subject's pronoun with another associated action"
                />  

                <label htmlFor="action3">Another action</label>
                <input
                className="form-control" 
                id="action3"
                type="text"
                name="action3"            
                value={formData.action3}
                onChange={handleChange}
                placeholder="enter another action that will have an object following it"
                />  

                <label htmlFor="part">A part of your subject with possessive pronoun</label>
                <input
                className="form-control" 
                id="part"
                type="text"
                name="part"            
                value={formData.part}
                onChange={handleChange}
                placeholder="enter a part of your subject with possessive pronoun (i.e. 'its branches' or 'her shoulder')"
                />  

                <label htmlFor="description">A phrase describing your subject</label>
                <input
                className="form-control" 
                id="description"
                type="text"
                name="description"            
                value={formData.description}
                onChange={handleChange}
                placeholder="enter a phrase that describes your subject's appearance"
                />

                <label htmlFor="action4">Subject's pronoun with another action</label>
                <input
                className="form-control" 
                id="action4"
                type="text"
                name="action4"            
                value={formData.action4}
                onChange={handleChange}
                placeholder="enter subject's pronoun with another action associated with your subject"
                />

                <label htmlFor="action5">An action your subject cannot do</label>
                <input
                className="form-control" 
                id="action5"
                type="text"
                name="action5"            
                value={formData.action5}
                onChange={handleChange}
                placeholder="enter an action that your subject cannot do, but might wish to do"
                />

                <button className="btn btn-outline-primary mt-2">Get Poem</button>
            </form>
        </div>
    )
}
export default PoemForm;