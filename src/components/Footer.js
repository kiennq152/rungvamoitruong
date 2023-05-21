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
                   marginTop: "-30px" }}>      
      
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Thông tin về chúng tôi</Heading>
            <FooterLink href="#">Tạp chí Rừng và Môi trường</FooterLink>
          </Column>
          <Column> 
            <Heading>Dịch vụ</Heading>
            <FooterLink href="#">Tư vấn</FooterLink>
            <FooterLink href="#">Proof reading</FooterLink>
          </Column>
          <Column>
            <Heading>Liên hệ</Heading>
            <FooterLink href="#">SDT: 0243754311 / 091 3381 559</FooterLink>
            <FooterLink href="#">FAX: 02437552220 </FooterLink>
            <FooterLink href="#">Email: tckhrungvamoitruong@.gmail.com</FooterLink>
            <FooterLink href="#">Website:www.tcrungvamoitruong.vn</FooterLink>
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
      Tòa soạn và trị sự: Số 114 đường Hoàng Quốc Việt, P. Nghĩa Tân, Q. Cầu Giấy, TP. Hà Nội.
      GPXB số: 224/GP-BTTTT - Cấp ngày 8/6/2015</a>
      </Container>
      
    </Box>
  );
};
export default Footer;
