import React, { createContext, useState } from 'react';


export const AgentContext = createContext();

export default ({ children }) => {
    const [agent, setAgent] = useState({});

    const { name, gameScores, _id } = agent;

    return (
        <div>
            <AgentContext.Provider value={{ agent, setAgent, name, gameScores, _id }}>
                {children}
            </AgentContext.Provider>
        </div>
    );
};