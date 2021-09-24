//file: src/webpages/home.js
import React from 'react';
import jor105106 from '../images/Bia/Bia so 105106.jpg';
import jor103 from '../images/Bia/Bia so 103.jpg';
import jor99100 from '../images/Bia/Bia so 99100.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
    document.title = 'Trang chủ';

    return (
        <div>
            <li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'105106'}}><img src={jor105106} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 105 và 106</h3>
                <p>
                Tạp chí Rừng và Môi trường ra số gộp gồm số 105 + 106. Trong đó có nhiều bài nghiên cứu của nhiều tác giả như Giàng Minh Phông, Trần Quang Khải, Phạm Cường, Đỗ Trọng Toàn, Nguyễn Văn Chín Chín, Nguyễn Ngọc Bình ,Lê Hoài Thương, Trần Anh Khoa...
                </p>
            </li>
            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'103'}}><img src={jor103} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 103</h3>
                <p>
                Mời Quý đọc giả đón đọc những bài báo nghiên cứu, những thông tin hữu ích về rừng và môi trường số 103, năm 2020.
                Tác giả: Kiều Văn Quế (Phòng Khoa học và Hợp tác quốc tế - Viện Điều tra, Quy hoạch rừng) có bài Một số vấn đề quy hoạch lâm nghiệp sau khi Luật Lâm nghiệp và Quy hoạch có hiệu lực. Cùng nhiều tác giả khác như: Dư Đức Hướng, Đỗ Quý Mạnh, Nguyễn Hoàng Hanh, Trần Minh Cảnh, Trần Văn Sáng, Trần Thị Anh, Nguyễn Thị Yến, Nguyễn Thế Hưng, Thái Thành Lượm, Tạ Văn Trọng, Trần Thái Thu Ngân... đã đăng bài trong số này                </p>
            </li>

            <li class="service-list">
                <Link to={{pathname: '/journalpage', state:'99100'}}><img src={jor99100} height="200"  /></Link>

                <h3>Tạp chí Rừng và Môi trường số 99 và 100</h3>
                <p>
                Tạp chí Rừng và Môi trường trân trọng cảm ơn các tác giả đã gửi bài đăng trong các số 99 - 100 - 101
                </p>

            </li>
            </li>
        </div>
        
    );
};
export default Home;