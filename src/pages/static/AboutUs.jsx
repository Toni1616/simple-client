import Layout from "../../components/layout/Layout";
import {Col, Row} from "react-bootstrap";

const AboutUs = () => {
  return (
      <Layout>
          <h3 className="text-center">About Us</h3>
          <Row className="justify-content-center">
              <Col md={6}>
                  <div className="text-center">
                      About Us. Learning React, NodeJS and Express JS is so fun.

                  </div>
              </Col>
          </Row>
      </Layout>
  )
}

export default AboutUs