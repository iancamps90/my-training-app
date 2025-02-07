// src/components/TrainingForm.jsx
import React, { useState } from 'react';
import { TextField, MenuItem, Button, Container, Typography, Box } from '@mui/material';
import '../styles/TrainingForm.css';

const muscleGroups = [
    { value: 'chest', label: 'Pecho' },
    { value: 'back', label: 'Espalda' },
    { value: 'upper legs', label: 'Piernas' },
    { value: 'upper arms', label: 'Brazos' },
    { value: 'shoulders', label: 'Hombros' },
    { value: 'abs', label: 'Abdomen' }
];

const TrainingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        muscleGroup: '',
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
                    {muscleGroups.map(group => (
                        <MenuItem key={group.value} value={group.value}>{group.label}</MenuItem>
                    ))}
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