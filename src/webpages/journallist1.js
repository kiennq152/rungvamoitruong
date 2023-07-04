import Journal from '../components/Journal';
import styled from 'styled-components';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Journalpage from './journalpage';
import jor115116 from '../images/Bia/Bia so 115116.jpg';
import jor114 from '../images/Bia/Bia so 114.jpg';
import jor113 from '../images/Bia/Bia so 113.jpg';
import jor112 from '../images/Bia/Bia so 112.jpg';
import jor110111 from '../images/Bia/Bia so 110-111.jpg';
import jor109 from '../images/Bia/Bia so 109.jpg';
import jor108 from '../images/Bia/Bia so 108.jpg';

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
                <Journal date = '2023' no='115116' link={jor115116} note='115 và 116'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2022' no='114' link={jor114} note='114'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2022' no='113' link={jor113}  note = '113'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2022' no='112' link={jor112}  note = '112'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2022' no='110-111' link={jor110111}  note = '110 và 111'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2021' no='109' link={jor109}  note = '109'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2021' no='108' link={jor108}  note = '108'/>
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