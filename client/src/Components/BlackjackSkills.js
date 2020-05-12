import React, { useState, useContext, useEffect } from 'react';
import AgentNameBanner from './AgentNameBanner';
import AgentService from '../Services/AgentService';
import { AgentContext } from '../Context/AgentContext';
import { AuthContext } from '../Context/AuthContext';



const BlackjackSkills = () => {
    const [total, setTotal] = useState(0);
    const [scores, setScores] = useState({});

    const agentContext = useContext(AgentContext);
    const { agent, _id } = agentContext;
    const { name, blackjack } = agent;

    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const { role } = user;

    //
    useEffect(() => {
        console.log(blackjack);
    }, [])


    const onChange = (e) => {
        console.log(e.target.val)
    };


    //Enables the fifth choice when user's role is admin
    const adminToggler = () => {
        return (role === 'admin')
            ? <option value="5" className="dropdown-item disabled">5</option>
            : null
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid text-center pb-1 pt-3 mt-2"><AgentNameBanner name={name} /><div className="display display-4">Blackjack Skill</div>
                <h6>Rate the agent using the following scale.</h6>
                <ul className="text-left">
                    <li>
                        "1" - Little to no understanding
                </li>
                    <li>
                        "2" - Basic
                    </li>
                    <li>
                        "3" - Good
                </li>
                    <li>
                        "4" - Very Good
                </li>
                    <li>
                        "5" - Expert*
                        <br></br>
                        <br></br>
                            *Only a Surveillance Manager can award a 5. If an agent has proven to be an expert in any area, please contact a Surveillance Manager to make the case.
                </li>
                </ul>
            </div>

            <div className="container container-fluid">
                <div className="row">

                    <form id="skillScoreForm">

                        Agent understands Blackjack policies and dealing procedures.
                        <div className="input-group mt-2 mb-3">
                            <div className="input-group-prepend">
                                {/* rating  */}
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="q1">Current rating: <span>{blackjack.q1}</span></label>
                                            </div>

                                            <select className="custom-select" id="q1">
                                                <option selected>New Rating</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                {adminToggler()}
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* notes */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Notes</span>
                            </div>
                            <textarea className="form-control" aria-label="Notes"></textarea>
                        </div>

    Agent understands Basic Strategy.
    <div className="input-group mt-2 mb-3">
                            <div className="input-group-prepend">
                                {/* rating  */}
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Current rating: <span>5</span></label>
                                            </div>

                                            <select className="custom-select" id="q2">
                                                <option selected>New Rating</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                {adminToggler()}
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* notes */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Notes</span>
                            </div>
                            <textarea className="form-control" aria-label="Notes"></textarea>
                        </div>
    Agent understands Blackjack game protection.
    <div className="input-group mt-2 mb-3">
                            <div className="input-group-prepend">
                                {/* rating  */}
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Current rating: <span>5</span></label>
                                            </div>

                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>New Rating</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                {adminToggler()}
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* notes */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Notes</span>
                            </div>
                            <textarea className="form-control" aria-label="Notes"></textarea>
                        </div>
    Agent understands and can detect Blackjack hole - card attacks.
    <div className="input-group mt-2 mb-3">
                            <div className="input-group-prepend">
                                {/* rating  */}
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Current rating: <span>5</span></label>
                                            </div>

                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>New Rating</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                {adminToggler()}
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* notes */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Notes</span>
                            </div>
                            <textarea className="form-control" aria-label="Notes"></textarea>
                        </div>
                        <div className="input-group mt-2 mb-3">
                            <div className="input-group-prepend">
                                {/* rating  */}
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Current rating: <span>5</span></label>
                                            </div>

                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>New Rating</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                {adminToggler()}
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* notes */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Notes</span>
                            </div>
                            <textarea className="form-control" aria-label="Notes"></textarea>
                        </div>
    Agent understands and can explain the differences between pitch and shoe games.
    <div className="input-group mt-2 mb-3">
                            <div className="input-group-prepend">
                                {/* rating  */}
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Current rating: <span>5</span></label>
                                            </div>

                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>New Rating</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                {adminToggler()}
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* notes */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Notes</span>
                            </div>
                            <textarea className="form-control" aria-label="Notes"></textarea>
                        </div>
    Agents understands Blackjack side bets and proprietary wagers.
    <div className="input-group mt-2 mb-3">
                            <div className="input-group-prepend">
                                {/* rating  */}
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Current rating: <span>5</span></label>
                                            </div>

                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>New Rating</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                {adminToggler()}
                                            </select>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* notes */}
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Notes</span>
                            </div>
                            <textarea className="form-control" aria-label="Notes"></textarea>
                        </div>                    </form >

                </div >
            </div >

        </>
    )
}

export default BlackjackSkills;