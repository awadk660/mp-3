import { styled } from "styled-components";

const HeaderWrapper = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(2px + 2vw);
    width: 100vw;
    @media screen and (max-width: 750px) {
        text-align: center;
        background-color: #f4f4f4;
        box-sizing: border-box;
}
`;

export default function Header(){
  return (
      <HeaderWrapper>
          <title>React Intro</title>
          <h1>Awad Khawaja</h1>
            My online resume
      </HeaderWrapper>
  );
};