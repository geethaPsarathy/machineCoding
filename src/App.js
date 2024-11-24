import React, { useState, Suspense, lazy } from "react";

const App = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    { name: "Accordion", path: "accordion" }, // Add other challenges here
  ];

  const loadChallenge = (challengePath) => {
    const LazyComponent = lazy(() =>
      import(`../challenges/${challengePath}/src/components/Accordion/Accordion.js`)
    );
    setSelectedChallenge(() => LazyComponent);
  };

  return (
    <div>
      <h1>Machine Coding Challenges</h1>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.name}>
            <button onClick={() => loadChallenge(challenge.path)}>
              {challenge.name}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {selectedChallenge && <selectedChallenge />}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
