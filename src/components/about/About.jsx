import React from 'react'
import { Container,Row } from 'react-bootstrap'
import "./about.css"
import Aboutreuseable from '../reuseable/Aboutreuseable';

const About = () => {
    
  return (
    <Container>
        <Row>
           <Aboutreuseable title="ami" para="Et vero eos et accusamus et iusto odio dignissimos"/>
           <Aboutreuseable title="tumi" para="Et vero eos et accusamus et iusto odio dignissimos"/>
           <Aboutreuseable title="she" para="Et vero eos et accusamus et iusto od dignissimos"/>
        </Row>
    </Container>
  )
}

export default About