import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import styled from 'styled-components';
import Footer from './Footer';
import { Link } from 'react-router-dom';

// component styles
const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        top: 64px;
        position: absolute;
        height: calc(100% - 64px);
        width: 100%;
        flex: 1;
        flex-direction: column;
    }
`;
const Main = styled.main`
    position: relative;
    height: calc(100% - 185px);
    width: 100%;
    padding: 1em;
    overflow-y: hidden;
    @media (min-width: 700px) {
        flex: 1;
        margin-left: 250px;
        margin-right: 200px;
        height: calc(100% - 64px);
        width: calc(100% - 420px);
    }
`;
const Side = styled.div`
    position: absolute;
    padding-top: 64px;
    width: 220px;
    padding: 1em;
    flex: 1;
    flex-direction: column;
`;

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <Wrapper>
            <div className="navigationWrapper">
            <Side style= {{marginTop: "40px",fontFamily:"cursive"}}>
                "Rừng là vàng, nếu mình biết bảo vệ và xây dựng thì rừng rất quý!"
                <br/>
                <br/>

            </Side>
                <Main>
                    {children}
                    <Footer/>
                </Main>
            </div>
        </Wrapper>        
    </React.Fragment>
    );
};
export default Layout;
