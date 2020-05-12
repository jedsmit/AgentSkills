import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { AgentContext } from '../Context/AgentContext';
import { withRouter } from 'react-router-dom';




const AgentSkills = (props) => {
    const [message, setMessage] = useState(null);
    const [scores, setScores] = useState([]);
    const [gameNames, setGameNames] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const authContext = useContext(AuthContext);
    const agentContext = useContext(AgentContext);


    const { agent } = agentContext;
    const { name, _id } = agent;
    const games = props.gameNames;
    const scoreVals = props.scoreVals;

    useEffect(() => {
        setGameNames(games);
        setScores(scoreVals);
        console.log(scoreVals.blackjack);
    }, [scores])

    const onClick = (e) => {
        e.preventDefault();
        const gamePage = e.target.value;
        // console.log(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
        props.history.push('/' + gamePage);
    }

    return (

        <div>

            <table className="text-center">

                <thead className="text-left">
                    <tr>
                        <th scope="col-2">Game</th>

                        <th scope="col">Score</th>

                    </tr>
                </thead>
                <tbody>
                    {gameNames.map((gameName, index) => {
                        // const scoreIndex = index;
                        // const linkString = '/' + gameName + '/' + _id;
                        return <tr key={index} className="game-name-list-item justify-content-left">
                            <td className="d-flex justify-content-start" key={gameName}>

                                <button className="gameButton text-left" value={gameName} onClick={onClick}>{gameName}</button>
                            </td>
                            <td>
                                {/* adds scores together and displays total */}
                                {scoreVals[gameName].reduce(function (a, b) {
                                    return a + b;
                                }, 0)}
                            </td>
                        </tr>
                    })
                    }

                </tbody>
            </table >
        </div >
    )

}

export default withRouter(AgentSkills);
