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

    const { name, blackjack, baccarat, poker, fortunePaiGow, craps, roulette, bjVariants, pokerVariants, war, pgVariants, tiles } = agent;

    const scoreVals = {
        blackjack: (Object.values(blackjack)),
        baccarat: (Object.values(baccarat)),
        poker: (Object.values(poker)),
        fortunePaiGow: (Object.values(fortunePaiGow)),
        craps: (Object.values(craps)),
        roulette: (Object.values(roulette)),
        bjVariants: (Object.values(bjVariants)),
        pokerVariants: (Object.values(pokerVariants)),
        war: (Object.values(war)),
        pgVariants: (Object.values(pgVariants)),
        tiles: (Object.values(tiles))
    }
    const gameNames = (Object.keys(scoreVals))

    useEffect(() => {
        console.log(scoreVals);
        console.log(gameNames);
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

