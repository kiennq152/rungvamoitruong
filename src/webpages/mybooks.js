//file: src/webpages/mybooks.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import jor57 from '../images/Bia/Bia so 57.jpg';
import cont57 from '../images/Mucluc/Muc luc So 57.jpg';

const journalview = styled.div`
    padding = 10px;
    position: relative;
    li {
        display: inline-block;
        padding: 10px 30px;
    }
`;

const cover = styled.li`
    display: inline-block;
    padding: 10px 30px;
    styled: center
    text-align: center;

`;
const MyBooks = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        
      <journalview className="heading row">
      <h1 className="title-issue">Tạp chí Rừng và Môi trường số 57</h1>
      <div className="thumbnail col-md-4">
        <a className="cover" >
            <cover>
                <img src={jor57} height="800" />
                <img src={cont57} height="800" />
            </cover>
        </a>
      </div>
      <div className="issue-details col-md-8">
        <div className="description">
          <span className="issueinformation">Contents:</span>
        </div>
    
      </div>

    </journalview>
    );
};
export default MyBooks;