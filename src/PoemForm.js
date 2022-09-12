import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// allows user to enter words and phrases that will comprise the body of their poem

const PoemForm = ( { addWords }) => {

    // sets the initial form values to be blank
    let INITIAL_STATE = {
        author: "",
        subject: "",
        action: "",
        time: "",
        location: "",
        emotion: "",
        action2: "",
        part: "",
        description: "",
        action4: "",
        action5: "",
        pronoun: "",
        possPronoun: ""
    }
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
        
        const { author, subject, action, time, location, emotion, action2, part, description, action4, action5, pronoun, possPronoun } = formData;
        addWords(author, subject, action, time, location, emotion, action2, part, description, action4, action5, pronoun, possPronoun);
        setFormData(INITIAL_STATE);
    }

    // returns the form component with input fields for user words
    return (
        <div>
            <h1 className="fw-bold title">PoetBot</h1>
            <span className="material-symbols-outlined">smart_toy</span>
            <h2 className="display-5 text-info subtitle">Write an ode to someone or something you love!</h2>
            <p className="fs-5 subtitle mx-5">With full credit, appreciation (and sincere apologies) to <a href="https://www.poetryfoundation.org/poets/francisco-x-alarcon">Francisco Alarcón</a> for his wonderful poem, <a href="https://www.poetryfoundation.org/poems/91109/ode-to-my-shoes">Ode to My Shoes</a>, which serves as the muse for this PoetBot!</p>            
            <form onSubmit={handleSubmit}>
                <section>
                        <h3 className="display-6 mb-0">The Basics</h3>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="author">Your name</label>            
                                <input
                                className="form-control"             
                                id="author"
                                type="text"
                                name="author"            
                                value={formData.author}
                                onChange={handleChange}
                                placeholder="enter your name"
                                />
                            </div>
                            <div className="col">
                            <label htmlFor="subject">Your subject</label>  
                                <OverlayTrigger
                                    delay={{ hide: 450, show: 300 }}
                                    overlay={(props) => (
                                    <Tooltip {...props}>
                                        Examples: 'My Bicycle' or 'The Sea' or 'Samantha' or 'My Dog'
                                    </Tooltip>
                                    )}
                                    placement="top">          
                                        <input
                                        className="form-control"             
                                        id="subject"
                                        type="text"
                                        name="subject"            
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="enter your subject. Who or what is your ode about?"
                                        />
                                </OverlayTrigger>
                            </div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <label htmlFor="pronoun">Your subject's main pronoun</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Common pronouns: it, she, he, they
                                </Tooltip>
                                )}
                                placement="top">  
                                    <input
                                    className="form-control" 
                                    id="pronoun"
                                    type="text"
                                    name="pronoun"            
                                    value={formData.pronoun}
                                    onChange={handleChange}
                                    placeholder="enter your subject's main pronoun"
                                    />
                            </OverlayTrigger>
                        </div>
                        <div className="col">
                        <label htmlFor="possPronoun">Your subject's possessive pronoun</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Common possessive pronouns: its, hers, his, their
                                </Tooltip>
                                )}
                                placement="top"> 
                                    <input
                                    className="form-control" 
                                    id="possPronoun"
                                    type="text"
                                    name="possPronoun"            
                                    value={formData.possPronoun}
                                    onChange={handleChange}
                                    placeholder="enter your subject's possessive pronoun"
                                    />
                            </OverlayTrigger>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="display-6 mb-0">The Context</h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="time">Period of time</label>
                                <OverlayTrigger
                                    delay={{ hide: 450, show: 300 }}
                                    overlay={(props) => (
                                    <Tooltip {...props}>
                                        Examples: all day, for hours, every morning, for centuries
                                    </Tooltip>
                                    )}
                                    placement="top">
                                        <input
                                        className="form-control" 
                                        id="time"
                                        type="text"
                                        name="time"            
                                        value={formData.time}
                                        onChange={handleChange}
                                        placeholder="enter a period of time"
                                        />
                                </OverlayTrigger>
                        </div>
                        <div className="col">
                            <label htmlFor="verb">Location</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Examples: under the oak tree, on the sofa, in the produce aisle, above the clouds
                                </Tooltip>
                                )}
                                placement="top">
                                    <input
                                    className="form-control" 
                                    id="location"
                                    type="text"
                                    name="location"            
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="enter a phrase describing where your subject might be found"
                                    />
                            </OverlayTrigger>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="display-6 mb-0">The Drama</h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="action">An action your subject does, in present tense</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Present tense actions include: floats, wiggles, sings, glides, scratches, hobbles, cries, etc.
                                </Tooltip>
                                )}
                                placement="top">            
                                    <input
                                    className="form-control"             
                                    id="action"
                                    type="text"
                                    name="action"            
                                    value={formData.action}
                                    onChange={handleChange}
                                    placeholder="enter a present tense action; something your subject does"
                                    />
                            </OverlayTrigger>
                        </div>
                        <div className="col">
                            <label htmlFor="action2">Another action in present tense</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Present tense actions include: floats, wiggles, sings, glides, scratches, hobbles, cries, etc.
                                </Tooltip>
                                )}
                                placement="top">             
                                    <input
                                    className="form-control"             
                                    id="action2"
                                    type="text"
                                    name="action2"            
                                    value={formData.action2}
                                    onChange={handleChange}
                                    placeholder="enter a present tense action; something your subject does"
                                    />
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="action4">Another action in present tense</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Present tense actions include: floats, wiggles, sings, glides, scratches, hobbles, cries, etc.
                                </Tooltip>
                                )}
                                    placement="top">
                                    <input
                                    className="form-control" 
                                    id="action4"
                                    type="text"
                                    name="action4"            
                                    value={formData.action4}
                                    onChange={handleChange}
                                    placeholder="enter a present tense action; something your subject does"
                                    />
                            </OverlayTrigger>
                        </div>
                        <div className="col">
                            <label htmlFor="action5">An action your subject cannot do, ending with 'ing'</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    enter an action that your subject cannot do (i.e. 'swimming', 'baking a souffle', 'driving a car'). MUST end with 'ing'!
                                </Tooltip>
                                )}
                                placement="top">
                                <input
                                className="form-control" 
                                id="action5"
                                type="text"
                                name="action5"            
                                value={formData.action5}
                                onChange={handleChange}
                                placeholder="enter an action ending with 'ing'"
                                />
                            </OverlayTrigger>
                            
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="display-6 mb-0">The Looks</h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="description">A phrase describing your subject</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Examples: sleek and streamlined, covered in chocolate, fluffy and soft, riddled with holes
                                </Tooltip>
                                )}
                                placement="top">
                                    <input
                                    className="form-control" 
                                    id="description"
                                    type="text"
                                    name="description"            
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="enter a phrase that describes your subject's appearance"
                                    />
                            </OverlayTrigger>
                        </div>
                        <div className="col">
                            <label htmlFor="part">A single physical part of your subject</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Examples: shoulder, branch, page, nose, handle, wrapper, knee, wing
                                </Tooltip>
                                )}
                                placement="top">
                                    <input
                                    className="form-control" 
                                    id="part"
                                    type="text"
                                    name="part"            
                                    value={formData.part}
                                    onChange={handleChange}
                                    placeholder="enter a single physical part of your subject"
                                    />
                            </OverlayTrigger>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="display-6 mb-0">The Feels</h3>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="emotion">Emotion</label>
                            <OverlayTrigger
                                delay={{ hide: 450, show: 300 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Examples: elated, frazzled, exhausted, joyous, hopeful, nervous, pensive
                                </Tooltip>
                                )}
                                placement="top">
                                    <input
                                    className="form-control" 
                                    id="emotion"
                                    type="text"
                                    name="emotion"            
                                    value={formData.emotion}
                                    onChange={handleChange}
                                    placeholder="enter an emotion associated with your subject"
                                    />
                            </OverlayTrigger>
                        </div>
                    </div>
                </section>      
                <button className="btn btn-outline-primary my-3">Compose My Poem!</button>
            </form>
        </div>
    )
}
export default PoemForm;