// src/components/About.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import team from '../data/team';  // Importa los datos del equipo

const About = () => (
    <Container>
        <Typography variant="h2" component="h1" gutterBottom>
            Sobre Nosotros
        </Typography>
        <Typography variant="body1" paragraph>
            Esta es una aplicación de ejemplo para la planificación de entrenamientos. Nuestra misión es ayudar a las personas a alcanzar sus objetivos de fitness mediante una planificación eficiente y personalizada de sus entrenamientos.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
            Nuestro Equipo
        </Typography>
        <Grid container spacing={4}>
            {team.map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.name}>
                    <Card>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <Avatar alt={member.name} src={member.photo} sx={{ marginRight: 2 }} />
                                <div>
                                    <Typography variant="h6" component="h3">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {member.role}
                                    </Typography>
                                </div>
                            </Box>
                            <Typography variant="body2" paragraph>
                                {member.bio}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom>
            Características de la Aplicación
        </Typography>
        <Typography variant="body1" paragraph>
            Nuestra aplicación ofrece una variedad de características para ayudarte a mantenerte en forma:
            <ul>
                <li>Planificación de entrenamientos personalizada</li>
                <li>Seguimiento del progreso</li>
                <li>Acceso a una amplia base de datos de ejercicios</li>
                <li>Posibilidad de guardar tus entrenamientos favoritos</li>
                <li>Filtros por grupo muscular y nivel de dificultad</li>
            </ul>
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
            Testimonios
        </Typography>
        <Typography variant="body1" paragraph>
            "Esta aplicación ha transformado mi rutina de ejercicios. Es increíblemente fácil de usar y muy efectiva." - Usuario Satisfecho
        </Typography>
        <Typography variant="body1" paragraph>
            "Gracias a esta aplicación, he podido alcanzar mis objetivos de fitness de manera más rápida y organizada." - Otro Usuario Satisfecho
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
            Contáctanos
        </Typography>
        <Typography variant="body1" paragraph>
            Si tienes alguna pregunta o sugerencia, no dudes en contactarnos en <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>. También puedes seguirnos en nuestras redes sociales:
            <ul>
                <li><a href="https://facebook.com/ejemplo">Facebook</a></li>
                <li><a href="https://twitter.com/ejemplo">Twitter</a></li>
                <li><a href="https://instagram.com/ejemplo">Instagram</a></li>
            </ul>
        </Typography>
    </Container>
);

export default About;