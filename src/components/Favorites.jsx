// src/components/Favorites.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="h2" gutterBottom>
                Mis Ejercicios Favoritos
            </Typography>
            <Grid container spacing={4}>
                {favorites.map(exercise => (
                    <Grid item xs={12} sm={6} md={4} key={exercise.id}>
                        <ExerciseCard exercise={exercise} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Favorites;