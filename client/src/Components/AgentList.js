import React, { useEffect, useState, useContext } from 'react';
import AgentService from '../Services/AgentService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';
import { AgentContext } from '../Context/AgentContext';
import { Link } from "react-router-dom";
import AgentListItem from "./AgentListItem"
import AgentPage from './AgentPage';

const AgentList = props => {
    const [agents, setAgents] = useState([])
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    const { agent, setAgent } = useContext(AgentContext);

    useEffect(() => {
        AgentService.getAgents().then(data => {
            console.log(data)
            setAgents(data.agents);
        });
    }, []);

    const onClick = (e) => {
        e.preventDefault();
        console.log("target: " + e.target.value)
        let id = e.target.value
        AgentService.getAgent(id)
            .then(data => {
                console.log(data.agent.name);
                setAgent({ "name": data.agent.name, "gameScores": data.agent.gameScores });
            })
            .then(() => {

                console.log("post setAgent: " + agent);
                props.history.push('/agent/' + id)
            })
            ;
    };




    return (
        <div>
            <ul className="list-group">
                {
                    agents.map(agent => {
                        const id = agent._id;
                        const name = agent.name;
                        // console.log("id: " + agent._id)
                        return <AgentListItem
                            key={id}
                            name={name}
                            id={id}
                            value={id}
                            onClick={onClick} />
                    })
                }
            </ul>




            {message ? <Message message={message} /> : null}
        </div >
    )

}

export default AgentList;

