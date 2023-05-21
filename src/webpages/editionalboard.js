//file: src/webpages/favorites.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

const MyTable = styled.table`
position: relative;
`;   
const Favorites = () => {
    useEffect(() => {
        document.title = 'Ban biên tập';
    });
    return (
      <MyTable style= {{marginTop: "80px", textAlign: "left" , marginBottom: "10px" }}>
      <tbody>
        <tr>
          <td width={47}><strong>STT</strong></td>
          <td width={253}><strong>HỌ TÊN</strong></td>
          <td width={123}><strong>ĐƠN VỊ</strong></td>
          <td width={104}><strong>LĨNH VỰC</strong></td>
          <td width={87}><strong>NHIỆM VỤ</strong></td>
        </tr>
        <td width={50}><strong>****</strong></td>
        <td width={500}><strong>Hội đồng biên tập</strong></td> 
        <tr>
          <td width={47}>1.</td>
          <td width={253}>PGS.TS. Triệu Văn Hùng</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={200}>Chủ tịch Hội Đồng</td>
        </tr>
        <tr>
          <td width={47}>2.</td>
          <td width={253}>NB Đàm Thị Mỹ</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Phó chủ tịch thường trực</td>
        </tr>
        <tr>
          <td width={47}>3.</td>
          <td width={253}>GS.TSKH. Nguyễn Ngọc Lung</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>4.</td>
          <td width={253}>GS. Hoàng Hòe</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>5.</td>
          <td width={253}>PGS.TS. Trần Văn Chứ</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>6.</td>
          <td width={253}>PGS.TS. Phạm Văn Chương</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>7.</td>
          <td width={253}>GS.TS Võ Đại Hải</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>8.</td>
          <td width={253}>PGS.TS. Viên Ngọc Nam</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>9.</td>
          <td width={253}>PGS.TS. Nguyễn Thị Bích Ngọc</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>10.</td>
          <td width={253}>TS. Nguyễn Quốc Trị</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
        <tr>
          <td width={47}>11.</td>
          <td width={253}>TS. Đỗ Xuân Lân</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Ủy viên</td>
        </tr>
      </tbody>
    </MyTable>
    );
};
export default Favorites;
