import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg={12}> footer</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer