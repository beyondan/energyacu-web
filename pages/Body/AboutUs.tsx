import { Row, Col, Carousel } from 'antd';
import 'antd/dist/antd.css';

import "./AboutUs.scss";

const AboutUs = props => (
  <div className="AboutUs">
    <Carousel autoplay className="Slideshow">
      <img src="/static/images/store_frontdesk.jpg" />
    </Carousel>
    <Row>
      <Col span={12} className="StoreDescriptionGrid">
        <h1>Getting to Energy Acupuncture</h1>
        <h2>2772 W Sepulveda Blvd<span><br /></span>Torrance, CA 90503</h2>
      </Col>
      <Col span={12}>
      </Col>
    </Row>
  </div>
);

export default AboutUs;
