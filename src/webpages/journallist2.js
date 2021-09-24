import Journal from '../components/Journal';
import styled from 'styled-components';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jor107 from '../images/Bia/Bia so 107.jpg';

import jorchuyende2018 from '../images/Bia/Bia so Chuyen de 2018.jpg';
import jor92 from '../images/Bia/Bia so 92.jpg';
import jor91 from '../images/Bia/Bia so 91.jpg';
import jor90 from '../images/Bia/Bia so 90.jpg';
import jor89 from '../images/Bia/Bia so 89.jpg';
import jor8788 from '../images/Bia/Bia so 87+88.jpg';
import jor86 from '../images/Bia/Bia so 86.jpg';
import jor85 from '../images/Bia/Bia so 85.jpg';
import jor84 from '../images/Bia/Bia so 84.jpg';
import jor83 from '../images/Bia/Bia so 83.jpg';
import jor8182 from '../images/Bia/Bia so 81+82.jpg';
import jor80 from '../images/Bia/Bia so 80.jpg';
import jor79 from '../images/Bia/Bia so 79.jpg';

const cover = styled.li`
    display: inline-block;
    padding: 10px 30px;
    styled: center
    text-align: center;

`;
const JournalList2 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
  
    // useEffect(() => {
    //   const fetchPosts = async () => {
    // //     setLoading(true);
    // //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // //     setPosts(res.data);
    // //     setLoading(false);
    //   };
  
    //   fetchPosts();
    // }, []);
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div style= {{marginTop: "80px", textAlign: "left"}}>
            <cover>
            <Journal date = '2019' no='92' link={jor92}  note = '92'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2018' no='chuyende2018' link={jorchuyende2018}  note = 'Chuyên đề 2018'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2018' no='91' link={jor91}  note = '91'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2018' no='90' link={jor90}  note = '90'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2018' no='89' link={jor89}  note = '89'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2018' no='8788' link={jor8788}  note = '87 và 88'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2017' no='86' link={jor86}  note = '86'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2017' no='85' link={jor85}  note = '85'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2017' no='84' link={jor84}  note = '84'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2017' no='83' link={jor83}  note = '83'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2017' no='8182' link={jor8182}  note = '81 và 82'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2016' no='80' link={jor80}  note = '80'/>
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
export default JournalList2;