import { useState } from 'react';

const App = () => {
  // Anekdootit-taulukko
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  // Tilat anekdootin valintaan ja ääniin
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  // Funktio satunnaisen anekdootin valitsemiseksi
  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Funktio anekdootin äänestämiseen
  const voteForAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  // Funktio eniten ääniä saaneen anekdootin löytämiseksi
  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const indexOfMostVoted = votes.indexOf(maxVotes);
    return anecdotes[indexOfMostVoted];
  };

  return (
    <div>
      <h1>Anekdootit</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={voteForAnecdote}>Äänestä</button>
      <button onClick={getRandomAnecdote}>Seuraava anekdootti</button>
      <h2>Eniten ääniä saanut anekdootti</h2>
      {Math.max(...votes) > 0 ? (
        <p>{getMostVotedAnecdote()}</p>
      ) : (
        <p>Ei ääniä vielä</p>
      )}
    </div>
  );
};

export default App;
