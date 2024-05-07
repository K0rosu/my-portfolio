import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "105vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { // <= mobile
        paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: { // >=mobile
        paddingTop: "0",
    }
}));

const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
}));

const Hero = () => {

    const handleContactClick = () => {
        const email = 'marcelo.seithi@gmail.com'; // Substitua pelo seu endereço de e-mail
        const subject = 'Contato'; // Assunto do e-mail
        const body = 'Olá Marcelo, vi seu perfil e gostaria de entrar em contato...'; // Corpo do e-mail
    
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        // Configurações da nova janela
        const windowFeatures = 'width=600,height=400,resizable=yes,scrollbars=yes';
    
        window.open(gmailUrl, '_blank', windowFeatures);
    };
    
    

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Marcelo Seithi Seto</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center" >Eu sou um Desenvolvedor de Software</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={() => console.log("download")}>
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={handleContactClick}>
                                    <MailOutlineIcon />
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;
