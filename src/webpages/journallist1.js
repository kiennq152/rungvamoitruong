import Journal from '../components/Journal';
import styled from 'styled-components';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Journalpage from './journalpage';
import jor107 from '../images/Bia/Bia so 107.jpg';
import jor105106 from '../images/Bia/Bia so 105106.jpg';
import jor104 from '../images/Bia/Bia so 104.jpg';
import jor103 from '../images/Bia/Bia so 103.jpg';
import jor102 from '../images/Bia/Bia so 102.jpg';
import jor101 from '../images/Bia/Bia so 101.jpg';
import jor99100 from '../images/Bia/Bia so 99100.jpg';
import jor98 from '../images/Bia/Bia so 98.jpg';
import jor97 from '../images/Bia/Bia so 97.jpg';
import jor96 from '../images/Bia/Bia so 96.jpg';
import jor95 from '../images/Bia/Bia so 95.jpg';
import jor9394 from '../images/Bia/Bia so 9394.jpg';

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
                <Journal date = '2021' no='107' link={jor107} note='107'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2021' no='105106' link={jor105106}  note = '105 và 106'/>
                <br/>
            </cover>
            <cover>
                <Journal date = '2021' no='104' link={jor104}  note = '104'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2020' no='103' link={jor103}  note = '103'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2020' no='102' link={jor102}  note = '102'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2020' no='101' link={jor101}  note = '101'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2020' no='99100' link={jor99100}  note = '99 và 100'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2019' no='98' link={jor98}  note = '98'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2019' no='97' link={jor97}  note = '97'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2019' no='96' link={jor96}  note = '96'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2019' no='95' link={jor95}  note = '95'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2019' no='9394' link={jor9394}  note = '93 và 94'/>
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
export default JournalList1;