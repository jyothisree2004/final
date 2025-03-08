import { useEffect, useState } from "react";

const ElectionResults = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    // Simulating an API call to fetch results
    setTimeout(() => {
      setResults([
        { position: "President", winner: "Candidate A", votes: 120 },
        { position: "Secretary", winner: "Candidate B", votes: 98 },
      ]);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Election Results</h2>
      {results ? (
        results.map((result, index) => (
          <p key={index}>
            <strong>{result.position}:</strong> {result.winner} ({result.votes} votes)
          </p>
        ))
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
};

export default ElectionResults;
