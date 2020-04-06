import React, { useEffect, useState, useContext } from 'react';
import Agent from './Agent';
import AgentService from '../Services/AgentService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

const AgentPage = props => {
    const [agent, setAgent] = useState({ name: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        AgentService.getAgent().then(data => {
            console.log(data);
            setAgent(data.agent);
        });
    }, []);


    return (
        <div>
            <h1>{agent.name}</h1>
            <ul className="list-group">
                {
                    agent.map(agent => {
                        return <Agent key={agent._id} agent={agent} />
                    })
                }
            </ul>
            {message ? <Message message={message} /> : null}
        </div>
    )

}

export default AgentPage;

