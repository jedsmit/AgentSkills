import React, { useEffect, useState, useContext } from 'react';
import Game from './Game';
import AgentService from '../Services/AgentService';
import Message from './Message';
import AgentNameBanner from './AgentNameBanner';
import { AuthContext } from '../Context/AuthContext';
import { AgentContext } from '../Context/AgentContext';
import AgentSkills from './AgentSkills';



const AgentPage = () => {
    const [message, setMessage] = useState(null);
    const [scores, setScores] = useState([]);
    const authContext = useContext(AuthContext);
    const agentContext = useContext(AgentContext);

    const { agent } = agentContext;

    const { name, gameScores } = agent;

    const scoreVals = (Object.values(gameScores))
    const gameNames = (Object.keys(gameScores))

    useEffect(() => {
        console.log(scoreVals);
        setScores(scoreVals);
    }, [])




    return (
        < div >

            <AgentNameBanner name={name} />

            <AgentSkills
                scoreVals={scoreVals}
                gameNames={gameNames} />
            {message ? <Message message={message} /> : null}
        </div >
    )

}

export default AgentPage;

