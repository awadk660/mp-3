import styled from "styled-components";

const StyledMain = styled.main`
    width: 100vw;
    height: 100%;
    padding: 20px;
    @media screen and (max-width: 750px) {
        margin-left: 0;
    }
`;

export default function Main({ children }) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
};