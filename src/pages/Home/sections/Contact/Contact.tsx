import {styled } from "@mui/material"

const Contact = () => {

    const StyledContact = styled("div")(()=> ({
        backgroundColor: "white",
        height: "100vh"
    }))

    return (
        <StyledContact>
            Olá
        </StyledContact>
    );
};

export default Contact;
