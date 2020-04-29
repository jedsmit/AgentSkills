import React from 'react';

const AgentListItem = props => {
    return (
        <li>
            <button className="agentButton text-left`" value={props.value} onClick={props.onClick}>{props.name}</button>
        </li>
    )
};

export default AgentListItem;

