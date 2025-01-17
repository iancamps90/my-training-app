// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import axios from 'axios';
import TrainingForm from './components/TrainingForm';
import ExerciseList from './components/ExerciseList';
import NavBar from './components/NavBar';
import About from './components/About';
import TrainingHistory from './components/TrainingHistory';
import Favorites from './components/Favorites';
import './App.css';

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);

  const fetchExercises = async (formData) => {
    try {
      const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${formData.muscleGroup}`, {
        headers: {
          'X-RapidAPI-Key': '1c39729166msh852ca4fa8c79550p1a47a4jsn3d158c923288',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });
      const filtered = response.data.slice(0, 10);  // Limita a 10 ejercicios
      setExercises(filtered);
      setFilteredExercises(filtered);

      // Guardar en el historial
      const history = JSON.parse(localStorage.getItem('trainingHistory')) || [];
      history.push({ date: new Date().toLocaleDateString(), muscleGroup: formData.muscleGroup });
      localStorage.setItem('trainingHistory', JSON.stringify(history));
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  const handleSearch = (query) => {
    const result = exercises.filter(exercise => exercise.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredExercises(result);
  };

  return (
    <Router>
      <NavBar onSearch={handleSearch} />
      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <TrainingForm onSubmit={fetchExercises} />
              {filteredExercises.length > 0 && <ExerciseList exercises={filteredExercises} />}
              <TrainingHistory />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;