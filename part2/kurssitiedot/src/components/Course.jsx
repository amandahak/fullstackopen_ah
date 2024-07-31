// src/components/Course.jsx

import React from 'react';

// Header-komponentti renderoi kurssin nimen
const Header = ({ course }) => <h2>{course.name}</h2>;

// Part-komponentti renderöi yhden osan nimen ja sen tehtävien määrän
const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

// Content-komponentti renderöi kaikki osat käyttämällä Part-komponenttia
const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

// Total-komponentti laskee ja renderöi kaikkien osien tehtävien yhteismäärän
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <h4>total of {totalExercises} exercises</h4>;
};

// Course-komponentti kokoaa yhteen kurssin tiedot
const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
