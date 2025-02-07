import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", padding: "50px" }}>
            <Typography variant="h2" color="error">
                404
            </Typography>
            <Typography variant="h5" paragraph>
                Página no encontrada
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/">
                Volver al inicio
            </Button>
        </Container>
    );
};

export default NotFound;
