import styled from "styled-components";

const StyledImage = styled.img`
    max-width: 100%;
    height: 100%;
`;

const DivImage = styled.div`
    display: flex;
    width: 100vw;
    @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

const DivLeft = styled.div`
    width: 40%;
    @media screen and (max-width: 750px) {
        max-width: 100%;
    }
`;

const DivRight = styled.div`
    padding: 5%;
    width: 60%;
    height: auto;
    @media screen and (max-width: 750px) {
        width: 100vw;
        padding: 20px;
        text-align: center;
    }
`;

const StyledH2 = styled.h2`
    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const StyledP = styled.p`
    font-size: calc(1.5vw + 1.5vh + 5px);
    line-height: 1.5;
    width: 70%;
`;

export default function Home() {
    return (
        <>
            <StyledH2>Home</StyledH2>
            <DivImage>
                <DivLeft>
                    <StyledImage src="/IMG_3145.PNG" alt="Profile Image" />
                </DivLeft>
                <DivRight>
                    <StyledP>My name is Awad Khawaja, I am a full time student at Boston University. I am a senior studying computer science, expecting to graduate in May, 2025. Welcome to my website. Here you will find things about me like my education and my work history. There is also some additional info you can take a look at if you would like.</StyledP>
                </DivRight>
            </DivImage>
        </>
    );
}
