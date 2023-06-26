import Journal from '../components/Journal';
import styled from 'styled-components';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import jor79 from '../images/Bia/Bia so 79.jpg';
import jor78 from '../images/Bia/Bia so 78.jpg';
import jor77 from '../images/Bia/Bia so 77.jpg';
import jor7576 from '../images/Bia/Bia so 7576.jpg';
import jor74 from '../images/Bia/Bia so 74.jpg';
import jor73 from '../images/Bia/Bia so 73.jpg';
import jor72 from '../images/Bia/Bia so 72.jpg';
import jor71 from '../images/Bia/Bia so 71.jpg';
import jor6970 from '../images/Bia/Bia so 6970.jpg';
import jor68 from '../images/Bia/Bia so 68.jpg';
import jor67 from '../images/Bia/Bia so 67.jpg';
import jor66 from '../images/Bia/Bia so 66.jpg';
import jor65 from '../images/Bia/Bia so 65.jpg';

const cover = styled.li`
    display: inline-block;
    padding: 10px 30px;
    styled: center
    text-align: center;

`;
const JournalList3 = () => {
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
            <Journal date = '2016' no='79' link={jor79}  note = '79'/>
                <br/>
            </cover>
            <cover>
              <Journal date = '2016' no='78' link={jor78}  note = '78'/>
                <br/>
            </cover>
            <cover>
             <Journal date = '2016' no='77' link={jor77}  note = '77'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2016' no='76' link={jor7576}  note = '75 và 76'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2015' no='74' link={jor74}  note = '74'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2015' no='73' link={jor73}  note = '73'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2015' no='72' link={jor72}  note = '72'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2015' no='71' link={jor71}  note = '71'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2015' no='6970' link={jor6970}  note = '69 và 70'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2014' no='68' link={jor68}  note = '68'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2014' no='67' link={jor67}  note = '67'/>
                <br/>
            </cover>
            <cover>
            <Journal date = '2016' no='66' link={jor66}  note = '66'/>
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
export default JournalList3;