import React, { useContext } from "react";
import classes from './HomePage.module.css';
import VoteContext from "../../store/vote-context";

const HomePage = (props) => {

    const voteCtx = useContext(VoteContext);

    return (
        <div className={classes.container}>
            <h1>Class Monitor Vote</h1>
            <h1>total votes:{voteCtx.items.length}</h1>
            <button onClick={props.onClick}> Add Vote</button>
        </div>
    );
};

export default HomePage;