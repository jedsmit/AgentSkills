import React, { useEffect, useState, useContext } from 'react';
import NoteItem from './NoteItem';
import NoteService from '../Services/NoteService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

const Notes = props => {
    const [note, setNote] = useState({ name: "" });
    const [notes, setNotes] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        NoteService.getNotes().then(data => {
            setNotes(data.notes);
        });
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        NoteService.postNote(note).then(data => {
            console.log(data);
            const { message } = data;
            resetForm();
            if (!message.msgError) {
                NoteService.getNotes().then(getData => {
                    setNotes(getData.notes);
                    setMessage(message);
                });
            } else if (message.msgBody === "Unauthorized") {
                setMessage(message);
                authContext.setUser({ username: "", role: "" });
                authContext.setIsAuthenticated(false);
            }
            else {
                setMessage(message);
            };
        });
    };

    const onChange = e => {
        setNote({ name: e.target.value });
    };

    const resetForm = () => {
        setNote({ name: "" });
    };

    return (
        <div>
            <ul className="list-group">
                {
                    notes.map(note => {
                        return <NoteItem key={note._id} note={note} />
                    })
                }
            </ul>
            <br />
            <form onSubmit={onSubmit}>
                <label htmlFor='note'>Enter note</label>
                <input type="text"
                    name='note'
                    value={note.name}
                    onChange={onChange}
                    className='form-control'
                    placeholder='Please enter note' />
                <button className="btn btn-lg btn-primary">Submit</button>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    )

}

export default Notes;

