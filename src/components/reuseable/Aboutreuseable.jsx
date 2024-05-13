import React from 'react'
import { Col} from 'react-bootstrap'
import { FaBaseballBall } from "react-icons/fa";
const Aboutreuseable = ({title,para}) => {
  return (
    <>
         <Col lg={4}>
                <div className="about_item">
                    <div className="a_icon">
                        <FaBaseballBall/>
                    </div>
                    <h3>{title}</h3>
                    <p>{para}</p>
                </div>
            </Col>
    </>
  )
}

export default Aboutreuseable