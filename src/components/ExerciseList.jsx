// src/components/ExerciseList.jsx
import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const ExerciseList = ({ exercises }) => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography component="h2" variant="h5" align="center">
                    Ejercicios Recomendados
                </Typography>
                {exercises.map((exercise, index) => (
                    <Card key={index} sx={{ mt: 2 }}>
                        <CardContent>
                            <Typography variant="h6">{exercise.name}</Typography>
                            <Typography>{exercise.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default ExerciseList;