// src/components/NavBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const ToolbarContainer = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const LogoContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const NavLinksContainer = styled(Box)({
    display: 'flex',
    gap: '20px',
});

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: '#fff',
});

const NavBar = () => {
    return (
        <AppBar position="static">
            <ToolbarContainer>
                <LogoContainer>
                    <img src="/logo5.png" alt="Company Logo" height="60" />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '10px' }}>
                        Empresa
                    </Typography>
                </LogoContainer>
                <NavLinksContainer>
                    <StyledLink to="/">
                        <Button color="inherit" startIcon={<HomeIcon />}>Inicio</Button>
                    </StyledLink>
                    <StyledLink to="/about">
                        <Button color="inherit" startIcon={<InfoIcon />}>Sobre Nosotros</Button>
                    </StyledLink>
                </NavLinksContainer>
            </ToolbarContainer>
        </AppBar>
    );
};

export default NavBar;