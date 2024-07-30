import { useState } from 'react';

// Button-komponentti, renderöi napin ja käsittelee klikkauksen
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// StatisticLine-komponentti, renderöi yhden tilastorivin taulukkoon
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

// Statistics-komponentti, laskee ja näyttää kaikki tilastot
const Statistics = ({ good, neutral, bad }) => {
  // Lasketaan yhteensä annetut palautteet
  const total = good + neutral + bad;
  // Lasketaan palautteiden keskiarvo (hyvä = 1, neutraali = 0, huono = -1)
  const average = total === 0 ? 0 : (good - bad) / total;
  // Lasketaan positiivisten palautteiden prosenttiosuus
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  // Jos palautteita ei ole annettu, näytetään viesti
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  // Muuten näytetään tilastot taulukkona
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average.toFixed(2)} />
        <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)}%`} />
      </tbody>
    </table>
  );
};

// App-komponentti
const App = () => {
  // Määritellään tilat jokaiselle palautteelle
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
