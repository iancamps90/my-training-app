// src/components/NavBar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'; // Importar componentes necesarios
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';


const ToolbarContainer = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
});

const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const NavLinksContainer = styled(Box)({
    display: 'flex',
    gap: '40px',
    padding: '40px'
});

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: '#fff',
});

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Buscar Ejercicio"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ backgroundColor: 'white', borderRadius: 1, marginRight: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Buscar
            </Button>
        </form>
    );
};

const NavBar = ({ onSearch }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <HomeIcon />
                    <ListItemText primary="Inicio" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                    <InfoIcon />
                    <ListItemText primary="Sobre Nosotros" />
                </ListItem>
                <ListItem button component={Link} to="/favorites">
                    <FavoriteIcon />
                    <ListItemText primary="Favoritos" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static">
            <ToolbarContainer>
                <LogoContainer>
                    <img src="src/assets/logo5.png" alt="Company Logo" height="90" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '10px' }}>
                        GYMM FYUMM
                    </Typography>
                </LogoContainer>
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <NavLinksContainer>
                        <StyledLink to="/">
                            <Button color="inherit" startIcon={<HomeIcon />}>Inicio</Button>
                        </StyledLink>
                        <StyledLink to="/about">
                            <Button color="inherit" startIcon={<InfoIcon />}>Sobre Nosotros</Button>
                        </StyledLink>
                        <StyledLink to="/favorites">
                            <Button color="inherit" startIcon={<FavoriteIcon />}>Favoritos</Button>
                        </StyledLink>
                    </NavLinksContainer>
                    <SearchBar onSearch={onSearch} />
                </Box>
                <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <IconButton color="inherit" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                        {drawerList}
                    </Drawer>
                </Box>
            </ToolbarContainer>
        </AppBar>
    );
};

export default NavBar;