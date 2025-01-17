
// src/components/TrainingForm.jsx
import React, { useState } from 'react';
import { TextField, MenuItem, Button, Container, Typography, Box } from '@mui/material';
import './TrainingForm.css';

const TrainingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        muscleGroup: '',  // Nuevo campo para el grupo muscular
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
                    Selecciona el Grupo Muscular
                </Typography>

                <TextField
                    select
                    fullWidth
                    margin="normal"
                    id="muscleGroup"
                    name="muscleGroup"
                    label="Grupo Muscular"
                    value={formData.muscleGroup}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="">Selecciona un grupo muscular</MenuItem>
                    <MenuItem value="chest">Pecho</MenuItem>
                    <MenuItem value="back">Espalda</MenuItem>
                    <MenuItem value="legs">Piernas</MenuItem>
                    <MenuItem value="arms">Brazos</MenuItem>
                    <MenuItem value="shoulders">Hombros</MenuItem>
                    <MenuItem value="abs">Abdomen</MenuItem>
                </TextField>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Obtener Ejercicios
                </Button>
            </Box>
        </Container>
    );
};

export default TrainingForm;