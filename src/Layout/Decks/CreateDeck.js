import React, { useState } from "react";
import DeckForm from "./DeckForm";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

function CreateDeck({ onAdd }) {
    const handleSubmit = (data) => {
        onAdd(data);
    };

    return (
        <>
            <BreadCrumb link={'/decks/new'} pageName={"Create Deck"} />
            <div>
                <h1>Create Deck</h1>
                <DeckForm onSubmit={handleSubmit} />
            </div>
        </>
    );
}

export default CreateDeck;