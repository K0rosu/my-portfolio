import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick: ()=> void
}



const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {

    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: "1px solid",
        borderRadius: "5px",
        padding: "20px 15px",
        width: "100%",
        color: "black",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }))


    return (
      <>
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton> 
      </>
    )
  }
  
  export default StyledButton
  