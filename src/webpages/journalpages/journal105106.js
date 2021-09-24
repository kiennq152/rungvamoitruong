//file: src/webpages/mybooks.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

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
const journal107 = ({ journalnumber }) => {
    // useEffect(() => {
    //     document.title = 'Journal'+journalnumber;
    // });
    return (
        
      <journalview className="heading row">
      <h1 className="title-issue">Tạp chí Rừng và Môi trường số {journalnumber}</h1>
      <div className="thumbnail col-md-4">
        <a className="cover" >
            <cover>
                <img src={'jor'+journalnumber} height="800" />
                <img src={'cont'+journalnumber} height="800" />
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
export default journal107;


// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className='pagination'>
//         {pageNumbers.map(number => (
//             <a href={'./journallist'+number} className='page-link' >
//               {number+'   '}
//             </a>
//         ))}
//       </ul>
//     </nav>
//   );
// };
