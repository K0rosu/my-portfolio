import { Container, Grid, styled, Typography, Card, CardContent, IconButton, Box } from "@mui/material";
import Portifolio1 from "../../../../assets/images/portifolio/portifolio1.png";
import Portifolio2 from "../../../../assets/images/portifolio/portifolio2.png";
import Portifolio3 from "../../../../assets/images/portifolio/portifolio3.png";
import Portifolio4 from "../../../../assets/images/portifolio/portifolio4.png";
import Portifolio5 from "../../../../assets/images/portifolio/portifolio5.png";
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "230vh",
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
                                                    Snake Game
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                    Este é um projeto simples do clássico Snake Game desenvolvido com HTML, CSS, e JavaScript puro. O objetivo do jogo é controlar a cobra usando as setas do teclado ou controles de toque na tela, coletar alimentos que aparecem aleatoriamente no tabuleiro, e evitar colidir com as paredes ou com o próprio corpo da cobra. À medida que a cobra coleta alimentos, ela cresce e o jogo se torna progressivamente mais desafiador.                                                    </Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '70px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('https://github.com/K0rosu/Snake_Game.git')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://snake-game-ten-beta.vercel.app/')}>
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
                                                    Hunt The Ace
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                    Hunt the Ace é um jogo de cartas onde os jogadores devem adivinhar corretamente a posição do Ás de Espadas após um embaralhamento. O jogo rastreia a pontuação do jogador e o número da rodada, e oferece uma experiência simples e interativa com animações de cartas. O objetivo é encontrar o Ás antes que o jogo termine após quatro rodadas.
                                                    </Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '70px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('https://github.com/K0rosu/HuntTheAce.git')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://hunt-the-ace-gamma.vercel.app/')}>
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
                                                        Pokedex
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                    Esta é uma aplicação web de Pokedex que permite aos usuários visualizar e buscar por Pokémon até a geração 5 (649 Pokémon). A aplicação exibe uma lista de Pokémon e fornece detalhes individuais para cada um deles. Os dados são recuperados da PokeAPI e incluem informações como número, nome, tipos, habilidades e estatísticas de base de cada Pokémon.
                                                    </Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '80px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('https://github.com/K0rosu/pokedex.git')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://pokedex-flame-xi.vercel.app/')}>
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
                                                    Pressure
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                    Esta aplicação é um site interativo de pesquisa para um concurso que eu fiz, que permite aos usuários procurar e filtrar monstros do jogo Pressure no Roblox. Os usuários podem pesquisar monstros por nome ou filtrar com base em categorias específicas, como "Monstros de Nó", "Monstros Principais" e "Monstros Raros". O projeto é voltado para facilitar a navegação e fornecer informações detalhadas sobre os monstros, incluindo descrições, imagens e links para mais detalhes.                                                    </Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '80px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('https://github.com/K0rosu/trabalho-marcelo')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://pressureproject.vercel.app/')}>
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
                                                    src={Portifolio5}
                                                    alt="Nome da imagem"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CardContent>
                                                    <Typography color="primary" variant="h6" gutterBottom>
                                                    Card-Jitsu
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                    Card-Jitsu HTML5 é uma recriação baseada na web do popular jogo de cartas, apresentando um sistema de batalha de cartas jogador-vs-bot. Este jogo permite que os jogadores compitam contra um bot controlado por IA usando um conjunto de cartas representando três elementos: Fogo, Neve e Água. Os jogadores têm como objetivo coletar todos os três elementos com cores de cartas exclusivas ou reunir três cartas do mesmo elemento com cores diferentes para vencer o jogo. Este projeto foi desenvolvido como parte de um projeto de aprendizado para explorar o desenvolvimento de jogos baseados em JavaScript e a manipulação dinâmica de DOM.</Typography>
                                                    <Grid container spacing={2} style={{ marginTop: '80px' }}>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="GitHub" onClick={() => window.open('hhttps://github.com/K0rosu/card-jitsu')}>
                                                                <GitHubIcon />
                                                            </IconButton>
                                                            GitHub
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton color="primary" aria-label="Live Demo" onClick={() => window.open('https://card-jitsu.vercel.app/')}>
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
                            <Box position="absolute" width={"45%"} bottom={800} left={0}> {/* Movido para baixo */}
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
