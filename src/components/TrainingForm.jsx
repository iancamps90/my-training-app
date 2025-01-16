// src/components/TrainingForm.jsx
// src/components/TrainingForm.jsx
import React, { useState } from 'react';
import { TextField, MenuItem, Button, Container, Typography, Box } from '@mui/material';
import './TrainingForm.css';

const TrainingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        experience: '',
        trainingDays: '',
        equipment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Container maxWidth="sm">
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Typography component="h1" variant="h5" align="center">
                    Datos de Entrenamiento
                </Typography>
                <TextField
                    select
                    fullWidth
                    margin="normal"
                    id="experience"
                    name="experience"
                    label="Nivel de Experiencia"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="">Selecciona tu nivel</MenuItem>
                    <MenuItem value="beginner">Principiante</MenuItem>
                    <MenuItem value="intermediate">Intermedio</MenuItem>
                    <MenuItem value="advanced">Avanzado</MenuItem>
                </TextField>

                <TextField
                    fullWidth
                    margin="normal"
                    id="trainingDays"
                    name="trainingDays"
                    label="Días de Entrenamiento por Semana"
                    type="number"
                    value={formData.trainingDays}
                    onChange={handleChange}
                    required
                    inputProps={{ min: "1", max: "7", step: "1" }}
                />

                <TextField
                    select
                    fullWidth
                    margin="normal"
                    id="equipment"
                    name="equipment"
                    label="¿Dónde entrenas?"
                    value={formData.equipment}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="">Selecciona una opción</MenuItem>
                    <MenuItem value="home">En casa</MenuItem>
                    <MenuItem value="gym">En el gimnasio</MenuItem>
                </TextField>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Enviar
                </Button>
            </Box>
        </Container>
    );
};

export default TrainingForm;