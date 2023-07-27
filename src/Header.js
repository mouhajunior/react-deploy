import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Coverhaut from './assets/Coverhaut.png';
import GooglePlay from './assets/GooglePlay.png';
import AppStore from './assets/AppStore.png';
import Backgroundelement from './assets/Backgroundelement.png';
import DesignCircle from './assets/DesignCircle.png';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="header-content">
          <Col xs={6}>
            <Button
              style={{
                color: 'black',
                background: 'white',
                marginTop: '4%',
                border: 'none',
              }}
              className="button2"
            >
              M
            </Button>
            <b style={{ color: 'white', marginLeft: '2%' }}>App</b>
          </Col>
          <Col xs={6} className="text-right">
            <Button
              className="button1"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                background: 'orangered',
                border: 'none',
              }}
            >
              Download
            </Button>
          </Col>
        </Row>
        <Row className="secondtime">
          <Col xs={12} sm={6}>
            <h1 className="h11" style={{ color: 'white', marginTop: '35px' }}>
              Sell Digital <br></br> Products the <br></br> easy-peasy way <br />
              
            </h1>
            <p style={{ color: 'white', marginTop: '40px' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
              sed diam nonumy eirmod tempor invidunt ut labore et
            </p>
            <button
              style={{
                background: 'orangered',
                padding: '10px 20px',
                borderRadius: '15px',
                marginTop: '30px',
                border: 'none',
                color: 'white',
              }}
            >
              Download now
            </button>
            <br />
            <button
              className="custom"
              style={{
                color: 'white',
                background: 'none',
                marginTop: '50px',
                padding: '0px 0px',
                borderRadius: '10px',
              }}
            >
              <img src={GooglePlay} alt=''/>
            </button>
            <button
              className="custom"
              variant="outline-primary"
              style={{
                color: 'white',
                background: 'none',
                marginTop: '50px',
                padding: '0px 0px',
                borderRadius: '10px',
                marginLeft: '20px',
              }}
            >
              <img src={AppStore} alt=''/>
            </button>
          </Col>
          <Col xs={12} sm={6}>
            <img
              className="backh"
              style={{ marginTop: '0%', position: 'absolute', right: '42%', top: '15%' }}
              src={Backgroundelement}
              alt=""
            />
            <img
              className="circleh"
              style={{ marginTop: '0%', position: 'absolute', right: '17%', top: '66%' }}
              src={DesignCircle}
              alt=""
            />
            <img
              className="coverhaut"
              src={Coverhaut}
              style={{ width: '56%', marginTop: '50px' }}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
