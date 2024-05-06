import { Container, Grid, styled, Typography, Card, CardContent, IconButton, Box } from "@mui/material";
import Portifolio1 from "../../../../assets/images/portifolio/portifolio1.png";
import Portifolio2 from "../../../../assets/images/portifolio/portifolio2.png";
import Portifolio3 from "../../../../assets/images/portifolio/portifolio3.png";
import Portifolio4 from "../../../../assets/images/portifolio/portifolio4.png";
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "150vh",
        display: "flex",
        alignItems: "center",
        position: "relative", // Adicionado
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            paddingTop: "0",
        }
    }));

    return (
        <>
            <StyledProjects>
            <div id="projects" style={{ margin: "0 auto", maxWidth: "lg" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Typography color="white" variant="h2" textAlign="center" >Projetos</Typography>
                            <Typography color="cyan" variant="h6" textAlign="left">
                                Portifólio
                            </Typography>
                            <Typography color="white" variant="h6" textAlign="left" style={{ marginTop: '5px' }}>
                                Cada projeto é uma peça única de desenvolvimento
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} style={{ marginTop: '20px' }}>
                                <Grid item xs={12} md={10} display="flex" justifyContent="center">
                                    <Card sx={{ width: '95%', margin: 'auto', borderRadius: 4, zIndex: 1 }}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={12} md={6}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ height: '100%', objectFit: 'cover', borderRadius: 4 }}
                                                    src={Portifolio1}
                                                    alt="Nome da imagem"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CardContent>
                                                    <Typography color="primary" variant="h6" gutterBottom>
                                                        Cadastro Social
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Um site onde o administrador pode Cadastrar os Usuários, Editar, Excluir e Imprimir a ficha de um usuário preenchido.
                                                    </Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '70px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('https://github.com')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://example.com')}>
                                                                <LanguageIcon />
                                                            </IconButton>
                                                            Live Demo
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid container display="flex" justifyContent="center" spacing={3} style={{ marginTop: '20px' }}>
                                <Grid item xs={12} md={10} display="flex" justifyContent="center">
                                    <Card sx={{ width: '95%', margin: 'auto', borderRadius: 4, zIndex: 1 }}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={12} md={6}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ height: '100%', objectFit: 'cover', borderRadius: 4 }}
                                                    src={Portifolio2}
                                                    alt="Nome da imagem"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CardContent>
                                                    <Typography color="primary" variant="h6" gutterBottom>
                                                        Lista dos Usuários
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Esse Site será onde vai visualizar os usuários cadastrados através de um Formulário. O administrador podera editar e configurar as informações do Formulário
                                                    </Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '70px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('https://github.com')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://example.com')}>
                                                                <LanguageIcon />
                                                            </IconButton>
                                                            Live Demo
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid container display="flex" justifyContent="center" spacing={3} style={{ marginTop: '20px' }}>
                                <Grid item xs={12} md={10} display="flex" justifyContent="center">
                                    <Card sx={{ width: '95%', margin: 'auto', borderRadius: 4, zIndex: 1 }}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={12} md={6}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ height: '100%', objectFit: 'cover', borderRadius: 4 }}
                                                    src={Portifolio3}
                                                    alt="Nome da imagem"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CardContent>
                                                    <Typography color="primary" variant="h6" gutterBottom>
                                                        Formulário
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        O usuário preenchera este formulário nesse site para colocar as informaçõe no site de "Lista de Usuários".
                                                    </Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '80px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('https://github.com')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://example.com')}>
                                                                <LanguageIcon />
                                                            </IconButton>
                                                            Live Demo
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid container display="flex" justifyContent="center" spacing={3} style={{ marginTop: '20px' }}>
                                <Grid item xs={12} md={10} display="flex" justifyContent="center">
                                    <Card sx={{ width: '95%', margin: 'auto', borderRadius: 4, zIndex: 1 }}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={12} md={6}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ height: '100%', objectFit: 'cover', borderRadius: 4 }}
                                                    src={Portifolio4}
                                                    alt="Nome da imagem"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CardContent>
                                                    <Typography color="primary" variant="h6" gutterBottom>
                                                        Atende Online
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Esse é o site oficial da Atende para o Taboão da Serra para o usuário acessar. Atualmente ele esta no ar para todo mundo.
                                                    </Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '80px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('https://github.com')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://atende.ts.sp.gov.br/')}>
                                                                <LanguageIcon />
                                                            </IconButton>
                                                            Live Demo
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Box position="absolute" width={"45%"} bottom={200} right={0}> {/* Movido para baixo */}
                                <AnimatedBackground />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                </div>
            </StyledProjects>
        </>
    );
};

export default Projects;
