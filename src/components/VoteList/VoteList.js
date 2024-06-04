// src/components/CandidateList.js
import React from 'react';

const VoteList = ({ candidates, onVoteDelete }) => {
  return (
    <div>
        {candidates.map((candidate, index) => (
        <div key={index}>
          <span>
            {candidate.name} ({candidate.votes} votes)
          </span>
          <button onClick={() => onVoteDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  )

};

export default VoteList;
