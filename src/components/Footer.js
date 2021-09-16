import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-80px" }}>      
      
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Thông tin về chúng tôi</Heading>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column> 
            <Heading>Dịch vụ</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
          </Column>
          <Column>
            <Heading>Liên hệ</Heading>
            <FooterLink href="#">SDT: +84 91 323 73 64</FooterLink>
            <FooterLink href="#">Email: nguyenzung1419@gmail.com</FooterLink>
          </Column>
          <Column>
            <Heading>Mạng xã hội</Heading>
            <FooterLink href="https://www.facebook.com/So114HoangQuocViet">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>

          </Column>
        </Row>
        <a style={{ color: "white", textAlign: "center", marginTop: "10px", marginBottom: "10px" }}> Tạp chí Rừng và Môi trường
      Tòa soạn: Số 114 đường Hoàng Quốc Việt, P. Nghĩa Tân, Q. Cầu Giấy, TP. Hà Nội.
      GPXB số: 224/GP-BTTTT - Cấp ngày 8/6/2015</a>
      </Container>
      
    </Box>
  );
};
export default Footer;