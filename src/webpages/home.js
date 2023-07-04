//file: src/webpages/home.js
import React from 'react';
import jor115116 from '../images/Bia/Bia so 115116.jpg';
import jor114 from '../images/Bia/Bia so 114.jpg';
import jor113 from '../images/Bia/Bia so 113.jpg';
import jor112 from '../images/Bia/Bia so 112.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
    document.title = 'Trang chủ';

    return (
        <div>
            <li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'115116'}}><img src={jor115116} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 115 và 116</h3>
                <p>
                Tạp chí Rừng và Môi trường ra số gộp gồm số 115 và 116. 
                </p>
            </li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'114'}}><img src={jor114} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 114</h3>
                <p>
                Tạp chí Rừng và Môi trường ra số 114. 
                </p>
            </li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'113'}}><img src={jor113} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 113</h3>
                <p>
                Mời Quý đọc giả đón đọc những bài báo nghiên cứu, những thông tin hữu ích về rừng và môi trường số 113, năm 2022.            </p>
            </li>

            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'112'}}><img src={jor112} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 112</h3>
                <p>
                Tạp chí Rừng và Môi trường trân trọng cảm ơn các tác giả đã gửi bài đăng trong các số 112
                </p>
            </li>
            </li>
        </div>
        
    );
};
export default Home;