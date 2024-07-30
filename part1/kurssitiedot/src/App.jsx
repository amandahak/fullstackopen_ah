// Header-komponentti renderoi kurssin nimen
const Header = ({ course }) => <h1>{course.name}</h1>;

// Part-komponentti renderöi yhden osan nimen ja sen tehtävien määrän
const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

// Content-komponentti renderöi kaikki osat käyttämällä Part-komponenttia
const Content = ({ parts }) => (
  <div>
    {parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
  </div>
);

// Total-komponentti laskee ja renderöi kaikkien osien tehtävien yhteismäärän
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
};

// App-komponentti, pääkomponentti, joka sisältää kurssin tiedot ja renderöi alikomponentit
const App = () => {
  // Kurssin nimi ja osat
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      {/* Välitetään kurssin nimi Header-komponentille */}
      <Header course={course} />
      {/* Välitetään kurssin osat Content-komponentille */}
      <Content parts={course.parts} />
      {/* Välitetään kurssin osat Total-komponentille laskemista varten */}
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
