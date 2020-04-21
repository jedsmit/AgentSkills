import React, { createContext, useState } from 'react';


export const AgentContext = createContext();

export default ({ children }) => {
    const [agent, setAgent] = useState({});

    return (
        <div>
            <AgentContext.Provider value={{ agent, setAgent }}>
                {children}
            </AgentContext.Provider>
        </div>
    );
};