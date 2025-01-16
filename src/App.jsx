
// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import TrainingForm from './components/TrainingForm';
import ExerciseList from './components/ExerciseList';
import './App.css';

// Estilos personalizados usando styled
const ToolbarContainer = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const NavLinksContainer = styled(Box)({
  display: 'flex',
  gap: '20px',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#fff',
});

const App = () => {
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async (formData) => {
    try {
      const response = await axios.get('https://api.ejemplo.com/ejercicios', {
        params: {
          experience: formData.experience,
          trainingDays: formData.trainingDays,
          equipment: formData.equipment,
        },
      });
      setExercises(response.data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  return (
    <Router>
      <AppBar position="static">
        <ToolbarContainer>
          <LogoContainer>
            <img src="/logo5.png" alt="Company Logo" height="70" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '10px' }}>
              Empresa
            </Typography>
          </LogoContainer>
          <NavLinksContainer>
            <StyledLink to="/">
              <Button color="inherit" startIcon={<HomeIcon />}>Inicio</Button>
            </StyledLink>
            <StyledLink to="/about">
              <Button color="inherit" startIcon={<InfoIcon />}>Sobre Nosotros</Button>
            </StyledLink>
          </NavLinksContainer>
        </ToolbarContainer>
      </AppBar>
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

const About = () => (
  <div>
    <h1>Sobre Nosotros</h1>
    <p>Esta es una aplicación de ejemplo para la planificación de entrenamientos.</p>
  </div>
);

export default App;