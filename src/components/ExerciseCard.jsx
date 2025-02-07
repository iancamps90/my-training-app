// src/components/ExerciseCard.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from "framer-motion";
import "../styles/ExerciseCard.css";


const ExerciseCard = ({ exercise }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!isFavorite) {
            favorites.push(exercise);
        } else {
            favorites = favorites.filter(fav => fav.id !== exercise.id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
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
                    <strong>Body Part:</strong> {exercise.bodyPart}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Target Muscle:</strong> {exercise.target}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Equipment:</strong> {exercise.equipment}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Instructions:</strong> {exercise.instructions}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Difficulty:</strong> {exercise.difficulty}
                </Typography>
                <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={handleFavoriteClick}>
                        {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Box>
            </CardContent>
            </Card>
        </motion.div>
    );
};

export default ExerciseCard;