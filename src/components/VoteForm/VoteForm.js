import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import VoteContext from "../../store/vote-context";
 
const VoteForm = (props) => {

    const voteCtx = useContext(VoteContext);

    const [voter, setVoter] = useState('');
    const [candidate, setCandidate] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name:voter,
            candidate:candidate
        }
        voteCtx.addItem(item);
        
    };

    return (
        <Modal onClose = {props.onClose}>
            
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Voter</label>
            <input 
               id="name"
               type="text"
               onChange={(e) => setVoter(e.target.value)}
            />
            <label htmlFor="vote">Candidate</label>
            <select id="vote" onChange={(e) => setCandidate(e.target.value)}>
                <option value="select">Select...</option>
                <option value="amit">Amit</option>
                <option value="atul">Atul</option>
                <option value="aryan">Aryan</option>
            </select>
            <button type="submit">Add Vote</button>
            <button onClick={props.onClick}>Close</button>
          </form>
        </Modal>
        
    );
};

export default VoteForm;