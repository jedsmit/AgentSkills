import React, { useState } from "react";
import Message from "./Message";
import AgentService from "../Services/AgentService";

const Admin = (props) => {
    const [agent, setAgent] = useState({ name: "" });
    const [message, setMessage] = useState(null);


    const onSubmit = e => {
        e.preventDefault();
        AgentService.postAgent(agent).then(data => {
            console.log(data);
            const { message } = data;
            resetForm();
        });
    };

    const onChange = e => {
        setAgent({ name: e.target.value });
    };

    const resetForm = () => {
        setAgent({ name: "" });
    };

    const onClick = e => {
        e.preventDefault();
        props.history.push('/register');
    }

    return (
        <>
            <h1>Admin Page</h1>
            {/* register new agent */}

            <form onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor='agent'>Register new agent?</label>
                        <input type="text"
                            name='agent'
                            value={agent.name}
                            onChange={onChange}
                            className='form-control'
                            placeholder='Agent Name' />
                        <button>Submit</button>
                    </div>
                </div>
            </form>
            <br></br>
            <p>Register new user?   <button onClick={onClick}>Click Here</button></p>
            {message ? <Message message={message} /> : null}
        </>
    )
}

export default Admin;