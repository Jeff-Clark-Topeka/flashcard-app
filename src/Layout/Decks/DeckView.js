import React from "react";
import { Link } from "react-router-dom";

function DeckView({ decks, deleteDeck }) {
    return (
        <>
            <h1>{decks.name}</h1>
            <th>{decks.card.count} cards</th>
            <p>{decks.description}</p>
            <td><Link to="/decks/:deckId"><button name="view">View</button></Link></td>
            <td><Link to="/decks/:deckId/study"><button name="study">Study</button></Link></td>
            <td><button name="delete" onClick={deleteDeck}></button></td>
        </>
    )
}

export default DeckView;