import {Container, Divider, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import StyledButton2 from "../../../../components/StyledButton2/StyledButton2";
import StyledButton3 from "../../../../components/StyledButton3/StyledButton3";



const About = () => {

    const StyledAbout = styled("div")(()=> ({
        backgroundColor: "white",
        height: "90vh"
    }))


  return (
    <>
      <StyledAbout>
        <div id="about">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography color="primary" variant="h1"  textAlign="center" >Sobre mim</Typography>
          <Grid container display="flex" justifyContent="center" spacing={3} style={{ marginTop: '10px' }}>
            <Grid item xs={12} md={3} display="flex" justifyContent="center">
            <StyledButton2 onClick={()=> console.log("experience")}>
            <WorkspacePremiumIcon/>
            <Typography>
            Experience
            </Typography>
            <Typography variant="body2" color="textSecondary">
            1 ano de experiência como estagiário.
            </Typography>
            </StyledButton2>
            </Grid>
            <Grid item xs={12} md={3} display="flex" justifyContent="center">
            <StyledButton2 onClick={()=> console.log("education")}>
            <SchoolIcon/>
            <Typography>
            Education
            </Typography>
            <Typography variant="body2" color="textSecondary">
            FECAF: Gestão de Tecnologia da Informação.
            Estágio: Prefeitura de Taboão da Serra.
            </Typography>
            </StyledButton2>
            </Grid>
          </Grid>
          <Typography color="primary" variant="h6" textAlign="left" style={{ marginTop: '40px' }}>
  Meu nome é Marcelo Seithi, tenho 20 anos e sou um estagiário dedicado no setor de Desenvolvimento de Software da Prefeitura de Taboão da Serra. 
  Ao longo dos últimos meses, tenho adquirido conhecimentos básicos e valiosos em linguagens de programação como CSS, HTML, PHP e JavaScript, além de demonstrar proficiência em SQL para gerenciamento de bancos de dados.
  Eu já havia realizado alguns projetos utilizando Bootstrap para a prefeitura.
</Typography>

          <Divider sx={{ marginTop: '20px', borderBottomWidth: '3px' }} />
          <br></br>
          <Typography color="primary" variant="h2"  textAlign="center" >Skills (Básico)</Typography>
          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("php")}>
                                        
                                        <Typography>
                                            PHP
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("git")}>
                                        
                                        <Typography>
                                            GitHub
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("react")}>
                                        
                                        <Typography>
                                            React
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("sql")}>
                                        
                                        <Typography>
                                            SQL
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("css")}>
                                        
                                        <Typography>
                                            CSS
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("html")}>
                                        
                                        <Typography>
                                            HTML
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("bootstrap")}>
                                        
                                        <Typography>
                                            Bootstrap
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("typescript")}>
                                        
                                        <Typography>
                                            TypeScript
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("javascript")}>
                                        
                                        <Typography>
                                            JavaScript
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                                <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                    <StyledButton3 onClick={()=> console.log("xampp")}>
                                        
                                        <Typography>
                                            XAMPP
                                        </Typography>
                                    </StyledButton3>
                                </Grid>
                            </Grid>
                            
                                
          </Grid>
          </Grid>
          </Container>
          </div>
      </StyledAbout>

      
    </>
  );
};

export default About;
