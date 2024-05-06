import { AppBar, MenuItem, Toolbar, styled, IconButton, Menu, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "center",
        "& > *": { // Aplica o estilo a todos os elementos filhos do Toolbar
            margin: "0 30px" // Define um espaçamento horizontal entre os itens do navbar
        }
    }));


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica se a tela é menor que 'sm' (600px)

    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMobileMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        handleMobileMenuClose(); // Feche o menu móvel após clicar em um item
    };

    const scrollToProjects = () => {
        const aboutSection = document.getElementById("projects");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        handleMobileMenuClose(); // Feche o menu móvel após clicar em um item
    };

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    {!isMobile && (
                        <>
                            <MenuItem onClick={scrollToAbout}>About</MenuItem>
                            {/* Adicione manipuladores de evento semelhantes para outros itens do menu */}
                            <MenuItem onClick={scrollToAbout}>Skills</MenuItem>
                            <MenuItem onClick={scrollToProjects}>Projects</MenuItem>
                        </>
                    )}
                    {isMobile && (
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </StyledToobar>
            </AppBar>
            {/* Menu móvel */}
            <Menu
                anchorEl={mobileMenuAnchorEl}
                open={Boolean(mobileMenuAnchorEl)}
                onClose={handleMobileMenuClose}
                onClick={handleMobileMenuClose} // Feche o menu ao clicar em um item
            >
                <MenuItem onClick={scrollToAbout}>
                    <ListItemText primary="About" />
                </MenuItem>
                {/* Adicione itens de menu semelhantes para outros links */}
                <MenuItem onClick={scrollToAbout}>
                    <ListItemText primary="Skills" />
                </MenuItem>
                <MenuItem onClick={scrollToProjects}>
                    <ListItemText primary="Projects" />
                </MenuItem>
            </Menu>
        </>
    );
};

export default NavBar;
