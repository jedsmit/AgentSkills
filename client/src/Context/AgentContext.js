import React, { createContext, useState } from 'react';


export const AgentContext = createContext();

export default ({ children }) => {
    const [agent, setAgent] = useState({});

    const { name, blackjack, baccarat, poker, fortunePaiGow, craps, roulette, bjVariants, pokerVariants, war, pgVariants, tiles, _id, notes } = agent;

    return (
        <div>
            <AgentContext.Provider value={{ agent, setAgent, name, blackjack, baccarat, poker, fortunePaiGow, craps, roulette, bjVariants, pokerVariants, war, pgVariants, tiles, _id, notes }}>
                {children}
            </AgentContext.Provider>
        </div>
    );
};