// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import axios from 'axios';
import TrainingForm from './components/TrainingForm';
import About from './components/About';
import ExerciseList from './components/ExerciseList';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async (formData) => {
    try {
      const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + formData.muscleGroup, {
        headers: {
          'X-RapidAPI-Key': '1c39729166msh852ca4fa8c79550p1a47a4jsn3d158c923288',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });
      setExercises(response.data.slice(0, 10));  // Limita a 10 ejercicios
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<TrainingForm onSubmit={fetchExercises} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {exercises.length > 0 && <ExerciseList exercises={exercises} />}
      </Container>
    </Router>
  );
};


export default App;