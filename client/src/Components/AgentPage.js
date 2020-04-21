import React, { useEffect, useState, useContext } from 'react';
import Game from './Game';
import AgentService from '../Services/AgentService';
import Message from './Message';
import AgentNameBanner from './AgentNameBanner';
import { AuthContext } from '../Context/AuthContext';
import { AgentContext } from '../Context/AgentContext';
import AgentSkills from './AgentSkills';



const AgentPage = (props) => {
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    const { agent } = useContext(AgentContext);



    return (
        <div>
            <AgentNameBanner name={agent.name} />
            <AgentSkills agent={agent} />

            {message ? <Message message={message} /> : null}
        </div>
    )

}

export default AgentPage;

