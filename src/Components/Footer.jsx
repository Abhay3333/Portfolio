import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/img/Logo.png";
import navIcon1 from "../Assets/img/nav-icon1.svg";
import navIcon2 from "../Assets/img/nav-icon2.svg";
import navIcon3 from "../Assets/img/nav-icon3.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} alt="" />
              </a>
              <a href="">
                <img src={navIcon2} alt="" />
              </a>
              <a href="">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
