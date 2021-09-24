import Journal from '../components/Journal';
import styled from 'styled-components';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jor65 from '../images/Bia/Bia so 65.jpg';

import jor6364 from '../images/Bia/Bia so 63+64.jpg';
import jor6162 from '../images/Bia/Bia so 61+62.jpg';
import jor60 from '../images/Bia/Bia so 60.jpg';
import jor59 from '../images/Bia/Bia so 59.jpg';
import jor58 from '../images/Bia/Bia so 58.jpg';
import jor57 from '../images/Bia/Bia so 57.jpg';
import jorchuyende2018 from '../images/Bia/Bia so Chuyen de 2018.jpg';


const cover = styled.li`
    display: inline-block;
    padding: 10px 30px;
    styled: center
    text-align: center;

`;
const JournalList4 = () => {
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
            <Journal date = '2014' no='65' link={jor65}  note = '65'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2014' no='6364' link={jor6364}  note = '63 và 64'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2014' no='6162' link={jor6162}  note = '61 và 62'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2013' no='60' link={jor60}  note = '60'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2013' no='59' link={jor59}  note = '59'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2013' no='58' link={jor58}  note = '58'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2013' no='57' link={jor57}  note = '57'/>
                <br/>
            </cover>
            <Pagination
                postsPerPage={12}
                totalPosts={44}
                paginate={paginate}
            />
        </div>
        
    );
};
export default JournalList4;