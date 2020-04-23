import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { AgentContext } from '../Context/AgentContext';


const AgentSkills = (props) => {
    const [message, setMessage] = useState(null);
    const [scores, setScores] = useState([]);
    const [gameNames, setGameNames] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const authContext = useContext(AuthContext);
    const agentContext = useContext(AgentContext);


    const { agent } = agentContext;
    const { name } = agent;
    const games = props.gameNames;
    const scoreVals = props.scoreVals;

    useEffect(() => {
        setGameNames(games);
        setScores(scoreVals);
        console.log(gameNames + scores);
    }, [scores])


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
                        const scoreIndex = index;

                        return <tr key={index}>
                            <td key={gameName}>
                                {gameName}
                            </td>
                            <td>
                                {scoreVals[scoreIndex]}
                            </td>
                        </tr>
                    })
                    }

                </tbody>
            </table>
        </div >
    )

}

export default AgentSkills;
