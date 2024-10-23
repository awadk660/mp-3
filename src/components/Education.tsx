import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    width: 100vw;
    @media screen and (max-width: 750px) {
       align-items: center;
    }
`;

const StyledP = styled.p`
    width: 80vw;
    @media screen and (max-width: 750px) {
       text-align: center;
    }
`;

const StyledH2 = styled.h2`
    @media screen and (max-width: 750px) {
       text-align: center;
    }
`

const StyledTable = styled.table`
    @media screen and (max-width: 750px) {
       align-items: center;
    }
`;

export default function Education() {
    return (
        <>
        <StyledH2>Education</StyledH2>
            <StyledDiv>
                <StyledTable border={1}>
                    <tr>
                        <td>Institution</td>
                        <td>Years</td>
                        <td>Degree</td>
                    </tr>
                    <tr>
                        <td>Boston University</td>
                        <td>2021-2025</td>
                        <td>BA Computer Science</td>
                    </tr>
                    <tr>
                        <td>Nanuet Senior High School</td>
                        <td>2017-2021</td>
                        <td>Diploma</td>
                    </tr>
                    </StyledTable>
            </StyledDiv>
            <StyledP>I am currently pursing my bachelors in computer science at Boston University, set to graduate in May, 2025. I attended a public high school in Nanuet, NY and got my diploma from there with a 3.96 GPA and honors in math.</StyledP>
        </>
    )
}