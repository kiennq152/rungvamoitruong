import Journal from '../components/Journal';
import styled from 'styled-components';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Journalpage from './journalpage';
import jor120 from '../images/Bia/Bia so 120.jpg';
import jor121 from '../images/Bia/Bia so 121.jpg';
import jor122 from '../images/Bia/Bia so 122.jpg';
import jor123 from '../images/Bia/Bia so 123.jpg';
import jor124 from '../images/Bia/Bia so 124.jpg';
import jor125 from '../images/Bia/Bia so 125.jpg';

const cover = styled.li`
    display: inline-block;
    padding: 10px 30px;
    styled: center
    text-align: center;

`;
const JournalList1 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    document.title = 'Lưu trữ ';

    return (
        <div style= {{marginTop: "80px", textAlign: "left"}}>
              <cover>
                <Journal date = '2024' no='125' link={jor125} note='125'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2024' no='124' link={jor124} note='124'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2024' no='123' link={jor123} note='123'/>
                <br/>
            </cover>
             <cover>
                <Journal date = '2024' no='122' link={jor122} note='122'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2024' no='121' link={jor121} note='121'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2024' no='120' link={jor120}  note = '120'/>
                <br/>
            </cover>
           
          
            <Pagination
                postsPerPage={12}
                totalPosts={50}
                paginate={paginate}
            />
        </div>
        
    );
};
export default JournalList1;