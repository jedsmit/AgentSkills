import React, { useState, useContext, useEffect } from "react";
import AgentNameBanner from "./AgentNameBanner";


const BlackjackSkills = () => {
    const [total, setTotal] = useState(0);
    const [scores, setScores] = useState([]);


    const onChange = (e) => {
        console.log(e.target.val)
    };


    return (
        <>
            <AgentNameBanner />
            <div className="jumbotron jumbotron-fluid text-center pb-1 pt-3 mt-2"><div className="display display-4">Blackjack Skill</div>
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
                        "5" - Expert
                </li>
                </ul>
            </div>

            <div className="container container-fluid">
                <div className="row">

                    <form id="skillScoreForm">

                        Agent understands Blackjack policies and dealing procedures.
                        <div class="input-group mt-2 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Current Rating: X </span>
                            </div>

                            {/* rating  */}
                            <div class="row">
                                <div className="col">
                                    <input type="text" class="form-control" aria-label="New rating input" aria-describedby="inputGroup-sizing-default" placeholder="New rating 1-5" />
                                </div>
                            </div>

                        </div>

                        {/* notes */}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Notes</span>
                            </div>
                            <textarea class="form-control" aria-label="Notes"></textarea>
                        </div>

                            Agent understands Basic strategy.
                            <div class="input-group mt-2 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Current Rating: X </span>
                            </div>

                            {/* rating  */}
                            <div class="row">
                                <div className="col">
                                    <input type="text" class="form-control" aria-label="New rating input" aria-describedby="inputGroup-sizing-default" placeholder="New rating 1-5" />
                                </div>
                            </div>

                        </div>

                        {/* notes */}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Notes</span>
                            </div>
                            <textarea class="form-control" aria-label="Notes"></textarea>
                        </div>
                    Agent understands Blackjack game protection.
                    <div class="input-group mt-2 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Current Rating: X </span>
                            </div>

                            {/* rating  */}
                            <div class="row">
                                <div className="col">
                                    <input type="text" class="form-control" aria-label="New rating input" aria-describedby="inputGroup-sizing-default" placeholder="New rating 1-5" />
                                </div>
                            </div>

                        </div>

                        {/* notes */}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Notes</span>
                            </div>
                            <textarea class="form-control" aria-label="Notes"></textarea>
                        </div>
                    Agent understands and can detect Blackjack hole-card attacks.
                    <div class="input-group mt-2 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Current Rating: X </span>
                            </div>

                            {/* rating  */}
                            <div class="row">
                                <div className="col">
                                    <input type="text" class="form-control" aria-label="New rating input" aria-describedby="inputGroup-sizing-default" placeholder="New rating 1-5" />
                                </div>
                            </div>

                        </div>

                        {/* notes */}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Notes</span>
                            </div>
                            <textarea class="form-control" aria-label="Notes"></textarea>
                        </div>
                    Agent understands and can detect Blackjack card counting attacks.
                    <div class="input-group mt-2 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Current Rating: X </span>
                            </div>

                            {/* rating  */}
                            <div class="row">
                                <div className="col">
                                    <input type="text" class="form-control" aria-label="New rating input" aria-describedby="inputGroup-sizing-default" placeholder="New rating 1-5" />
                                </div>
                            </div>

                        </div>

                        {/* notes */}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Notes</span>
                            </div>
                            <textarea class="form-control" aria-label="Notes"></textarea>
                        </div>
                    Agent understands and can explain the differences between pitch and shoe games.
                    <div class="input-group mt-2 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Current Rating: X </span>
                            </div>

                            {/* rating  */}
                            <div class="row">
                                <div className="col">
                                    <input type="text" class="form-control" aria-label="New rating input" aria-describedby="inputGroup-sizing-default" placeholder="New rating 1-5" />
                                </div>
                            </div>

                        </div>

                        {/* notes */}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Notes</span>
                            </div>
                            <textarea class="form-control" aria-label="Notes"></textarea>
                        </div>
                    Agents understands Blackjack side bets and proprietary wagers.
                    <div class="input-group mt-2 mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Current Rating: X </span>
                            </div>

                            {/* rating  */}
                            <div class="row">
                                <div className="col">
                                    <input type="text" class="form-control" aria-label="New rating input" aria-describedby="inputGroup-sizing-default" placeholder="New rating 1-5" />
                                </div>
                            </div>

                        </div>

                        {/* notes */}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Notes</span>
                            </div>
                            <textarea class="form-control" aria-label="Notes"></textarea>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default BlackjackSkills;