import { useState } from "react";

const VotingPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const handleVote = () => {
    if (selectedCandidate) {
      console.log("Voted for:", selectedCandidate);
    } else {
      alert("Please select a candidate to vote.");
    }
  };

  return (
    <div>
      <h2>Vote for Your Candidate</h2>
      <label>
        <input type="radio" name="candidate" value="Candidate A" onChange={(e) => setSelectedCandidate(e.target.value)} />
        Candidate A
      </label>
      <label>
        <input type="radio" name="candidate" value="Candidate B" onChange={(e) => setSelectedCandidate(e.target.value)} />
        Candidate B
      </label>
      <button onClick={handleVote}>Submit Vote</button>
    </div>
  );
};

export default VotingPage;
