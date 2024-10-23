import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    width: 30vw;
    height: 100vh;
    background-color: #f4f4f4;
    padding: 20px;
    box-sizing: border-box;

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    li {
        text-align: center;
        margin: 3vh 0;
        transition: font-weight .3s ease;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        font-weight: bold;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 10px;
        height: auto;
        position: relative;

        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
        }

        li {
            display: inline;
            margin: 0;
        }
    }
`;

const NavLink = styled(Link)`
    padding: 0.5rem;
    margin: 0.25rem;
    text-decoration: none;
    color: #000;

    &:hover {
        font-weight: bold;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Education">Education</NavLink></li>
                <li><NavLink to="/Employment">Employment</NavLink></li>
                <li><NavLink to="/Achievements">Achievements</NavLink></li>
                <li><NavLink to="/References">References</NavLink></li>
                <li><NavLink to="/Calculator">Calculator</NavLink></li>
            </ul>
        </StyledNav>
    );
}
