import React from 'react';

const AgentListItem = props => {
    return (
        <li>
            <button value={props.value} onClick={props.onClick}>{props.name}</button>
        </li>
    )
};

export default AgentListItem;

