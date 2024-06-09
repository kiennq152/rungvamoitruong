//file: src/webpages/home.js
import React from 'react';
import jor115116 from '../images/Bia/Bia so 115116.jpg';
import jor119 from '../images/Bia/Bia so 119.jpg';
import jor117 from '../images/Bia/Bia so 117.jpg';
import jor118 from '../images/Bia/Bia so 118.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
    document.title = 'Trang chủ';

    return (
        <div>
            <li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'119'}}><img src={jor119} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 119</h3>
                <p>
                Mời Quý đọc giả đón đọc những bài báo nghiên cứu, những thông tin hữu ích về rừng và môi trường số 119, năm 2023.
                </p>
            </li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'118'}}><img src={jor118} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 118</h3>
                <p>
                Mời Quý đọc giả đón đọc những bài báo nghiên cứu, những thông tin hữu ích về rừng và môi trường số 118, năm 2023.
                </p>
            </li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'117'}}><img src={jor117} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 117</h3>
                <p>
                Mời Quý đọc giả đón đọc những bài báo nghiên cứu, những thông tin hữu ích về rừng và môi trường số 117, năm 2023.            </p>
            </li>

            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'115116'}}><img src={jor115116} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 115 và 116</h3>
                <p>
                Tạp chí Rừng và Môi trường trân trọng cảm ơn các tác giả đã gửi bài đăng trong các số 115 và 116
                </p>
            </li>
            </li>
        </div>
        
    );
};
export default Home;