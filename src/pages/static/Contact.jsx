import Layout from "../../components/layout/Layout";
import {Col, Row} from "react-bootstrap";

const Contact = () => {
  return (
      <Layout>
          <h3 className="text-center">Contact Us</h3>
        <Row className="justify-content-center">
            <Col md={6}>
                <div className="text-center">
                    Contact me at <span className="fst-italic">toni@gm.avs</span>

                </div>
            </Col>
        </Row>
      </Layout>
  )
}

export default Contact