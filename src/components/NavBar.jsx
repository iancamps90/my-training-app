import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, TextField, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Brightness4, Brightness7, Menu as MenuIcon, Home as HomeIcon, Info as InfoIcon, Favorite as FavoriteIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import useThemeMode from "../hooks/useThemeMode";
import "../styles/NavBar.css";

// Animación de entrada
const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Componente de barra de búsqueda
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <TextField
                variant="outlined"
                size="small"
                placeholder="Buscar Ejercicio"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ backgroundColor: "white", borderRadius: 1, marginRight: 1 }}
            />
            <Button type="submit" variant="contained" color="primary" size="small">
                Buscar
            </Button>
        </form>
    );
};

const NavBar = ({ onSearch }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [darkMode, setDarkMode] = useThemeMode();
    const [scrolled, setScrolled] = useState(false);

    // Detectar el scroll para activar el efecto "sticky"
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                <ListItem button component={Link} to="/">
                    <HomeIcon sx={{ marginRight: 1 }} />
                    <ListItemText primary="Inicio" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <InfoIcon sx={{ marginRight: 1 }} />
                    <ListItemText primary="Sobre Nosotros" />
                </ListItem>
                <ListItem button component={Link} to="/favorites">
                    <FavoriteIcon sx={{ marginRight: 1 }} />
                    <ListItemText primary="Favoritos" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <motion.div initial="hidden" animate="visible" variants={navVariants}>
            <AppBar position="fixed" className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <Toolbar className="navbar-content">
                    {/* LOGO */}
                    <Box className="navbar-logo">
                        <img src="public\images\logo5.png" alt="Logo" className="logo" />
                        <Typography variant="h6">GYMM FYUMM</Typography>
                    </Box>

                    {/* LINKS EN PANTALLAS GRANDES */}
                    <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }} className="navbar-links">
                        <Link to="/">
                            <Button color="inherit" startIcon={<HomeIcon />}>Inicio</Button>
                        </Link>
                        <Link to="/about">
                            <Button color="inherit" startIcon={<InfoIcon />}>Sobre Nosotros</Button>
                        </Link>
                        <Link to="/favorites">
                            <Button color="inherit" startIcon={<FavoriteIcon />}>Favoritos</Button>
                        </Link>
                        <SearchBar onSearch={onSearch} />
                    </Box>

                    {/* BOTÓN MODO OSCURO */}
                    <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit" className="theme-toggle">
                        {darkMode ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
                    </IconButton>

                    {/* MENÚ HAMBURGUESA PARA MÓVILES */}
                    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                        <IconButton color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            {drawerList}
                        </Drawer>
                    </Box>
                </Toolbar>
            </AppBar>
        </motion.div>
    );
};

export default NavBar;
