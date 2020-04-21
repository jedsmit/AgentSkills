import React, { useState } from "react";
import Message from "./Message";
import AgentService from "../Services/AgentService";

const Admin = () => {
    const [agent, setAgent] = useState({});
    const [message, setMessage] = useState(null);


    const onSubmit = e => {
        e.preventDefault();
        AgentService.postAgent(agent).then(data => {
            console.log(data);
            const { message } = data;
            resetForm();
            // if (!message.msgError) {
            //     AgentService.getAgent().then(agent => {
            //         setAgent(getData.agent);
            //         setMessage(message);
            //     });
            // } else if (message.msgBody === "Unauthorized") {
            //     setMessage(message);
            //     authContext.setUser({ username: "", role: "" });
            //     authContext.setIsAuthenticated(false);
            // }
            // else {
            //     setMessage(message);
            // };
        });
    };

    const onChange = e => {
        setAgent({ name: e.target.value });
    };

    const resetForm = () => {
        setAgent({ name: "" });
    };

    return (
        <>
            <h1>Admin Page</h1>
            //register new agent

            <form onSubmit={onSubmit}>
                <label htmlFor='agent'>Agent Name</label>
                <input type="text"
                    name='agent'
                    value={agent.name}
                    onChange={onChange}
                    className='form-control'
                    placeholder='Agent name' />
                <button className="btn btn-lg btn-primary">Submit</button>
            </form>
            {message ? <Message message={message} /> : null}
        </>
    )
}

export default Admin;