// src/components/About.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box, IconButton } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import team from '../data/team';  // Importa los datos del equipo

const About = () => (
    <Container maxWidth="md" sx={{ paddingBottom: "50px" }}>
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
            Sobre Nosotros
        </Typography>
        <Typography variant="body1" paragraph textAlign="center">
            Nuestra misión es ayudar a las personas a alcanzar sus objetivos de fitness mediante planificación eficiente y entrenamientos personalizados.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ marginTop: "40px" }}>
            Nuestro Equipo
        </Typography>
        <Grid container spacing={4} justifyContent="center">
            {team.map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.name}>
                    <Card sx={{ textAlign: "center", padding: "20px", backgroundColor: "#f5f5f5" }}>
                        <Avatar alt={member.name} src={member.photo} sx={{ width: 120, height: 120, margin: "auto" }} />
                        <CardContent>
                            <Typography variant="h6" component="h3">{member.name}</Typography>
                            <Typography variant="subtitle1" color="textSecondary">{member.role}</Typography>
                            <Typography variant="body2" paragraph>{member.bio}</Typography>
                            <Box>
                                <IconButton href={member.facebook} target="_blank" color="primary">
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton href={member.twitter} target="_blank" color="primary">
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton href={member.instagram} target="_blank" color="primary">
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton href={member.linkedin} target="_blank" color="primary">
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ marginTop: "40px" }}>
            Contacto y Redes Sociales
        </Typography>
        <Typography variant="body1" paragraph textAlign="center">
            ¿Tienes preguntas? Contáctanos en <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>.
        </Typography>
    </Container>
);

export default About;