import React, { useEffect, useState, useContext } from 'react';
import NoteItem from './NoteItem';
import NoteService from '../Services/NoteService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

const AgentList = props => {
    const [agent, setAgent] = useState({ name: "" });
    const [agents, setAgents] = useState([])
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        AgentService.getAgents().then(data => {
            setAgents(data.agents);
        });
    }, []);

    // const onSubmit = e => {
    //     e.preventDefault();
    //     NoteService.postNote(note).then(data => {
    //         console.log(data);
    //         const { message } = data;
    //         resetForm();
    //         if (!message.msgError) {
    //             NoteService.getNotes().then(getData => {
    //                 setNotes(getData.notes);
    //                 setMessage(message);
    //             });
    //         } else if (message.msgBody === "Unauthorized") {
    //             setMessage(message);
    //             authContext.setUser({ username: "", role: "" });
    //             authContext.setIsAuthenticated(false);
    //         }
    //         else {
    //             setMessage(message);
    //         };
    //     });
    // };

    // const onChange = e => {
    //     setNote({ name: e.target.value });
    // };

    // const resetForm = () => {
    //     setNote({ name: "" });
    // };

    return (
        <div>
            <ul className="list-group">
                {
                    agents.map(note => {
                        return <Agent key={agent._id} agent={agent} />
                    })
                }
            </ul>
            <br />
            <form onSubmit={onSubmit}>
                <label htmlFor='agent'>Agent Name</label>
                <input type="text"
                    name='agent'
                    value={agent.name}
                    onChange={onChange}
                    className='form-control'
                    placeholder='Agent name' />
                <button className="btn btn-lg btn-primary">Submit</button>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    )

}

export default Notes;

