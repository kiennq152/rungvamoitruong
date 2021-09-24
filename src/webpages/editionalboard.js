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
          <td width={200}>Hội đồng biên tập</td>
        </tr>
        <tr>
          <td width={47}>2.</td>
          <td width={253}>KS. Đỗ Văn Nhuận</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Hội đồng biên tập</td>
        </tr>
        <tr>
          <td width={47}>3.</td>
          <td width={253}>GS.TS. Hà Chu Chử</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Hội đồng biên tập</td>
        </tr>
        <tr>
          <td width={47}>4.</td>
          <td width={253}>GS. Hoàng Hòe</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Hội đồng biên tập</td>
        </tr>
        <tr>
          <td width={47}>5.</td>
          <td width={253}>GS.TSKH. Nguyễn Ngọc Lung</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Hội đồng biên tập</td>
        </tr>
        <tr>
          <td width={47}>6.</td>
          <td width={253}>TS. Trần Lê Hưng</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Hội đồng biên tập</td>
        </tr>
        <tr>
          <td width={47}>7.</td>
          <td width={253}>KS. Tô Đình Mai</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Hội đồng biên tập</td>
        </tr>
        <tr>
          <td width={47}>8.</td>
          <td width={253}>PGS.TS. Phạm Xuân Hoài</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Hội đồng biên tập</td>
        </tr>
        <tr>
          <td width={47}>9.</td>
          <td width={253}>PGS.TS. Phạm Văn Chương</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Hội đồng biên tập</td>
        </tr>

        <td width={50}><strong>****</strong></td>
        <td width={500}><strong>Tổng biên tập</strong></td>
        <tr>
          <td width={47}></td>
          <td width={253}>PGS.TS. Triệu Văn Hùng</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Tổng biên tập</td>
        </tr>
        <td width={50}><strong>****</strong></td>
        <td width={500}><strong>Phó Tổng biên tập</strong></td> 
        <tr>
          <td width={47}></td>
          <td width={253}>GS.TS. Hà Chu Chử</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Phó Tổng biên tập</td>
        </tr>
        <td width={50}><strong>****</strong></td>
        <td width={500}><strong>Thực hiện nội dung số KH-CN</strong></td> 
        <tr>
          <td width={47}></td>
          <td width={253}>Đàm Thị Mỹ</td>
          <td width={123}></td>
          <td width={104}></td>
          <td width={87}>Phó Tổng biên tập</td>
        </tr>
        <td width={50}><strong>****</strong></td>
        <td width={500}><strong>Biên tập và trình bày</strong></td> 
        <tr>
          <td width={47}></td>
          <td width={253}>Nguyễn Zũng - Đàm Phương</td>
        </tr>
      </tbody>
    </MyTable>
    );
};
export default Favorites;