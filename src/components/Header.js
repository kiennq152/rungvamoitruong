//file: src/components/Header.js
import React from 'react';
import logo from '../images/header.jpg';
import styled from 'styled-components';
import Navigation from './Navigation';
const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 80px;
    position: fixed;
    align-items: center;
    background-color: #007437;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const Header = () => {
return (
    <HeaderBar>
        <img src={logo} alt="Xcelvations Logo" height="80" />
        <Navigation/>
    </HeaderBar>
    );
};
export default Header;