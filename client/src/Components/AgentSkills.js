import React from 'react'

export default function AgentSkills({ agent }) {
    return (
        <div>
            <table className="text-center">
                <thead className="text-left">
                    <tr>
                        <th scope="col">Game</th>
                        <th scope="col">Score</th>
                        <th scope="col">Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Blackjack</td>
                        <td>{agent.gameScores.blackjack}</td>
                        <td>Novice</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
