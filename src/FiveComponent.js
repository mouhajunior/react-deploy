import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterImage from './assets/FooterImage.png';
import GooglePlay from './assets/GooglePlay.png';
import AppStore from './assets/AppStore.png';
import './App.css';

const FiveComponent = () => {
  return (
    <div className="five-component">
      <div className="text-center"></div>
      <Container style={{ marginTop: '20%' }}>
        <Row className="footer justify-content-center">
          <Col xs={12} sm={6} style={{marginTop:'10%'}}>
            <p className="elevate" style={{ color: 'white', marginTop: '5%' }}>
              Elevate your business
            </p>
            <h2 style={{ color: 'white' }}>
              Lorem ipsum dolor sit <br /> amet, consetetur <br /> sadipscing
              elitr, sed
            </h2>
            <button
              className="downloadnoww2"
              style={{
                background: 'orangered',
                padding: '12px 30px',
                color: 'white',
                borderRadius: '20px',
                marginTop: '8%',
                border: 'none',
                marginBottom: '5%',
                outline: 'white',
              }}
            >
              Download now
            </button>
            <br />
            <div className="d-flex justify-content-center align-items-center">
              <button
                style={{
                  background: 'none',
                  color: 'white',
                  padding: '0px 0px',
                  borderRadius: '10px',
                  marginRight: '5px',
                  outline: 'white',
                  border: 'white',
                }}
              >
                <img className="elevate" src={AppStore} alt="" />
              </button>
              <button
                style={{
                  background: 'none',
                  color: 'white',
                  padding: '0px 0px',
                  borderRadius: '10px',
                  marginLeft: '5px',
                  outline: 'white',
                  border: 'white',
                }}
              >
                <img className="elevate" src={GooglePlay} alt="" />
              </button>
            </div>
            <br />
            <button
              style={{
                marginTop: '15%',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '20px',
                color: 'black',
                background: 'white',
              }}
            >
              M
            </button>
            <b style={{ color: 'white', marginLeft: '2%' }}>App</b>
          </Col>
          <Col xs={12} sm={6}>
            <img
              className="imfo"
              src={FooterImage}
              style={{ width: '80%', marginTop: '15%' }}
              alt=""
            />
            <p
              className="mouhamed"
              style={{
                color: 'white',
                marginTop: '7%',
                float: 'right',
                marginRight: '5%',
              }}
            >
              Created by <u>Mouhamed Cisse</u>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FiveComponent;
