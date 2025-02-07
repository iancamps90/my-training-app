// src/components/Footer.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Container, IconButton, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <AppBar position="static" className="footer">
            <Container maxWidth="md">
                <Toolbar className="footer-content">
                    <Typography variant="body2" color="white">
                        © {new Date().getFullYear()} My Training App - Todos los derechos reservados
                    </Typography>
                    <Box className="social-icons">
                        <IconButton href="https://facebook.com/ejemplo" target="_blank" color="inherit">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="https://twitter.com/ejemplo" target="_blank" color="inherit">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton href="https://instagram.com/ejemplo" target="_blank" color="inherit">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton href="https://linkedin.com/ejemplo" target="_blank" color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;
