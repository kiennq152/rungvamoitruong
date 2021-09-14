//file: src/webpages/favorites.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

const MyTable = styled.table`
position: relative;
`;   
const Favorites = () => {
    useEffect(() => {
        document.title = 'My Favorites';
    });
    return (
      <MyTable>
      <tbody>
        <tr>
          <td width={47}><strong>STT</strong></td>
          <td width={253}><strong>HỌ TÊN</strong></td>
          <td width={123}><strong>ĐƠN VỊ</strong></td>
          <td width={104}><strong>LĨNH VỰC</strong></td>
          <td width={87}><strong>NHIỆM VỤ</strong></td>
        </tr>
        <tr>
          <td width={47}>1.</td>
          <td width={253}>GS.TS. Trần Đức Viên</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>Nông học</td>
          <td width={87}>Tổng Biên tập</td>
        </tr>
        <tr>
          <td width={47}>2.</td>
          <td width={253}>GS.TS. Nguyễn Xuân Trạch</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Phó Tổng biên tập</td>
        </tr>
        <tr>
          <td width={47}>3.</td>
          <td width={253}>GS.TS. Vũ Văn Liết</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>Nông học</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>4.</td>
          <td width={253}>PGS.TS. Nguyễn Đức Tùng</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>Nông học</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>5.</td>
          <td width={253}>GS.TS. Nguyễn Thị Lan</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>6.</td>
          <td width={253}>PGS.TS. Huỳnh Thị Mỹ Lệ</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>7.</td>
          <td width={253}>TS. Nguyễn Văn Giáp</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>8.</td>
          <td width={253}>GS.TS. Vũ Đình Tôn</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>9.</td>
          <td width={253}>PGS.TS. Đỗ Đức Lực</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>10.</td>
          <td width={253}>PGS.TS. Trần Nắng Thu</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>11.</td>
          <td width={253}>GS.TS. Nguyễn Văn Song</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>Kinh tế</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>12.</td>
          <td width={253}>GS.TS. Đỗ Kim Chung</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>Kinh tế</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>13.</td>
          <td width={253}>PGS.TS. Cao Việt Hà</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>TNMT</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>14.</td>
          <td width={253}>PGS.TS. Đỗ Văn Nhạ</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>TNMT</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>15.</td>
          <td width={253}>TS. Nguyễn Thị Bích Yên</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>TNMT</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>16.</td>
          <td width={253}>PGS.TS. Nguyễn Thị Thanh Thủy</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>KT<br />
            Công nghệ</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>17.</td>
          <td width={253}>TS. Nguyễn Thanh Hải</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>KT<br />
            Công nghệ</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>18.</td>
          <td width={253}>PGS.TS. Nguyễn Xuân Cảnh</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>KT<br />
            Công nghệ</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>19.</td>
          <td width={253}>PGS.TS. Nguyễn Thị Thủy</td>
          <td width={123}>Học viện NNVN</td>
          <td width={104}>CNTT</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>20.</td>
          <td width={253}>GS.TS. Lê Huy Hàm</td>
          <td width={123}>Viện Di truyền Nông nghiệp</td>
          <td width={104}>Nông học</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>21.</td>
          <td width={253}>PGS.TS. Nguyễn Văn Bộ</td>
          <td width={123}>Viện Khoa học Nông nghiệp</td>
          <td width={104}>Nông hóa</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>22.</td>
          <td width={253}>GS.TS. Lê Đức Ngoan</td>
          <td width={123}>Đại học Huế</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>23.</td>
          <td width={253}>PGS.TS. Trương Văn Dung</td>
          <td width={123}>Hội Thú y</td>
          <td width={104}>CN-TY-TS</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>24.</td>
          <td width={253}>GS.TS. Nguyễn Kim Lợi</td>
          <td width={123}>Đại học Nông lâm Thủ Đức</td>
          <td width={104}>TNMT</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>25.</td>
          <td width={253}>GS.TS. Vũ Đức Lập</td>
          <td width={123}>Học viện Kĩ thuật Quân sự</td>
          <td width={104}>Cơ khí<br />
            động lực</td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>26.</td>
          <td width={253}>GS.TS. Hoàng Văn Châu</td>
          <td width={123}>Đại học Ngoại thương</td>
          <td width={104}>Kinh tế</td>
          <td width={87}>Ủy viên</td>
        </tr>
      </tbody>
    </MyTable>
    );
};
export default Favorites;