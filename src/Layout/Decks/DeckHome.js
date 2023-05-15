import React from "react";
import { Link } from "react-router-dom";

function DeckHome({ decks }) {

    return (
        <div>
            <div>
                <Link to="/decks/new"><button className="btn btn-primary btn-large"><i className="bi bi-plus"></i>Create Deck</button></Link>
            </div>
        </div>
    );
}

export default DeckHome;