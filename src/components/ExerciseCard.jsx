// src/components/ExerciseCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={exercise.gifUrl}
                alt={exercise.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {exercise.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {exercise.bodyPart}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {exercise.target}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ExerciseCard;