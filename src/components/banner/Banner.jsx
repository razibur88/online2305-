import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaBell } from "react-icons/fa6";
import BannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <section>
       <Container>
            <Row>
                <Col lg={8}>
                    <div className="banner_text">
                        <span href="#"><FaBell/>Startup Business</span>
                        <h3>Empowering startups to fuel their business growth</h3>
                        <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,velit nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                        <a href="">Get started now </a>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="banner_img">
                        <img src={BannerImg} alt="banner" />
                    </div>
                </Col>
            </Row>
       </Container>
    </section>
  )
}

export default Banner