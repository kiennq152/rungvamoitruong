//file: src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
const Nav = styled.nav`
    padding: 2px;
    background: #007437;
    display: inline; 

    @media (max-width: 100%) {
        padding-top: 64px;
    }
    @media (min-width: 100%) {
        position: absolute;
        width: 100px;
        height: calc(100% - 64px);
      
    }
`;
const NavList = styled.ul`
    margin: 10px;
    padding-left: 0px;
    text-align: center;

    padding: 200px 100px;
    list-style: none;
    line-height: 2;
    display: inline; 
    li {
        display: inline-block;
        padding: 10px 30px;
    }
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1em;
        color: #333;
    }
    a:visited {
        color: #333;
    }
    a:hover,
    a:focus {
        color: #0077cc;
    }
    text-align: justify;

`;

const Navigation = () => {
    return (
        <Nav>
        <NavList>
                <li style={{display: 'inline'}}><Link to="/">Trang chủ</Link></li>
                <li style={{display: 'inline'}}><Link to="/journallist11">Lưu trữ</Link></li>
                <li style={{display: 'inline'}}><Link to="/guidelines">Hướng dẫn</Link></li>
                <li style={{display: 'inline'}}><Link to="/editionalboard">Ban biên tập</Link></li>
            </NavList>
        </Nav>
    );
};
export default Navigation;