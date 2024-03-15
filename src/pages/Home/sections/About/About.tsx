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
          <Typography color="primary" variant="h1"  textAlign="center" >About me</Typography>
          <Grid container display="flex" justifyContent="center" spacing={3} style={{ marginTop: '10px' }}>
            <Grid item xs={12} md={3} display="flex" justifyContent="center">
            <StyledButton2 onClick={()=> console.log("experience")}>
            <WorkspacePremiumIcon/>
            <Typography>
            Experience
            </Typography>
            <Typography variant="body2" color="textSecondary">
            6 meses de experiência como estagiário.
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
          <Typography color="primary" variant="h6" textAlign="left" style={{ marginTop: '40px' }}>Sou Marcelo, 20 anos, estagiário em GTI (Gestão de Tecnologia da Informação). Atualmente estou no 5º Semestre da FECAF fazendo um curso de Gestão de Tecnologia da Informação.</Typography>
          <Divider sx={{ marginTop: '20px', borderBottomWidth: '3px' }} />
          <Typography color="primary" variant="h2"  textAlign="center" >Skills</Typography>
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
  )
}

export default About
