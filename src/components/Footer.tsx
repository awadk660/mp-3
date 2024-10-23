import styled from "styled-components";

const StyledFooter = styled.footer`
    text-align: center;
    background-color: #f4f4f4;
    max-width: 100%;
    box-sizing: border-box;
    padding: 10px;
    
    p {
        margin: 0;
    }
`;

export default function Footer(){
    return (
        <StyledFooter>
            <p>All Rights Reserved by Awad Khawaja ©</p>
        </StyledFooter>
    )
}