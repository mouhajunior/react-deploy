import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import petit1 from './assets/petit1.png';
import petit2 from './assets/petit2.png';
import petit3 from './assets/petit3.png';
import './App.css'; 



const ThirdComponent = () => {
  return (
    <div className="second-component">
      <div className="text-center">
        <p style={{ textAlign: 'center', color: 'blue', marginTop: '5%' }}>A home for your bussiness</p>
        <h2 style={{ textAlign: 'center' }}>Join your fellow creators</h2>
        <p style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br></br> sed diam nonumy eirmod tempor invidunt ut
          labore et dolore
        </p>
        <button
          className="downloadnoww"
          style={{
            textAlign: 'center',
            padding: '15px 30px',
            color: 'white',
            background: 'orangered',
            border: 'none',
            borderRadius: '20px',
          }}
        >
          Download now
        </button>
      </div>
      <Container className="aligner">
        <Row className="justify-content-center">
          <Col
            className="firstcol"
            xs={12}
            sm={6}
            md={3}
            style={{
              padding: '40px 20px',
              background: '#fff',
              borderRadius: '20px',
              marginTop: '5%',
              marginRight: '20px',
              boxShadow: '0 1px 2px 1px blue',
            }}
          >
            <p className="loremfirstcol">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore
            </p>
            <img className="carim" src={petit2} style={{ borderRadius: '25px', marginTop: '9%' }} alt="" />
            <b className="rob" style={{ marginLeft: '3%' }}>
              Rob Hop
            </b>
            <p className="onepage" style={{ marginLeft: '24%' }}>
              Onepagelove.com
            </p>
          </Col>
          <Col
            className="firstcol"
            xs={12}
            sm={6}
            md={3}
            style={{
              padding: '40px 20px',
              background: '#fff',
              borderRadius: '20px',
              marginTop: '5%',
              marginRight: '20px',
              boxShadow: '0 1px 2px 1px blue',
            }}
          >
            <p className="loremfirstcol">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore
            </p>
            <img className="carim" src={petit1} style={{ borderRadius: '25px', marginTop: '9%' }} alt="" />
            <b className="rob" style={{ marginLeft: '3%' }}>
              Rob Hop
            </b>
            <p className="onepage" style={{ marginLeft: '24%', marginTop: '0%' }}>
              Onepagelove.com
            </p>
          </Col>
          <Col
            className="firstcol"
            xs={12}
            sm={6}
            md={3}
            style={{
              padding: '40px 20px',
              background:' #fff',
              borderRadius: '20px',
              marginTop: '5%',
              marginRight: '20px',
              boxShadow: '0 1px 2px 1px blue',
            }}
          >
            <p className="loremfirstcol">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore
            </p>
            <img className="carim" src={petit3} style={{ borderRadius: '25px', marginTop: '2%' }} alt="" />
            <b className="rob" style={{ marginLeft: '3%' }}>
              Rob Hop
            </b>
            <p className="onepage" style={{ marginLeft: '24%' }}>
              Onepagelove.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThirdComponent;
