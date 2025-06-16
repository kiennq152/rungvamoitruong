//file: src/webpages/home.js
import React from 'react';
import jor123 from '../images/Bia/Bia so 123.jpg';
import jor124 from '../images/Bia/Bia so 124.jpg';
import jor125 from '../images/Bia/Bia so 125.jpg';
import jor122 from '../images/Bia/Bia so 122.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
    document.title = 'Trang chủ';

    return (
        <div>
            <li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'125'}}><img src={jor125} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 125</h3>
                <p>
                Mời Quý đọc giả đón đọc những bài báo nghiên cứu, những thông tin hữu ích về rừng và môi trường số 119, năm 2023.
                </p>
            </li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'124'}}><img src={jor124} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 124</h3>
                <p>
                Mời Quý đọc giả đón đọc những bài báo nghiên cứu, những thông tin hữu ích về rừng và môi trường số 118, năm 2023.
                </p>
            </li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'123'}}><img src={jor123} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 123</h3>
                <p>
                Mời Quý đọc giả đón đọc những bài báo nghiên cứu, những thông tin hữu ích về rừng và môi trường số 117, năm 2023.            </p>
            </li>

            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'122'}}><img src={jor122} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 122</h3>
                <p>
                Tạp chí Rừng và Môi trường trân trọng cảm ơn các tác giả đã gửi bài đăng trong các số 122
                </p>
            </li>
            </li>
        </div>
        
    );
};
export default Home;