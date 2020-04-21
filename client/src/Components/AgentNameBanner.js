import React from 'react';


const AgentNameBanner = (props) => {
    return (
        <div className="container container-fluid pt-3 pb-0 mb-0">
            <h2>{props.name}</h2>
        </div>
    )
};

export default AgentNameBanner;