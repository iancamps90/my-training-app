// src/components/TrainingHistory.jsx
import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const TrainingHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('trainingHistory')) || [];
        setHistory(storedHistory);
    }, []);

    return (
        <div>
            <Typography variant="h6" component="div" sx={{ marginTop: '20px' }}>
                Historial de Entrenamientos
            </Typography>
            <List>
                {history.map((entry, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`${entry.date} - ${entry.muscleGroup} - ${entry.difficulty}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TrainingHistory;