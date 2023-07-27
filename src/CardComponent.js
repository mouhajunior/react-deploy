import React from 'react';
import { Card } from 'react-bootstrap';
import Screens from './assets/Screens.png';

const CardComponent = () => {
  return (
    <div className="card-component">
      <div className="row">
        <div className="col-md-6">
          <Card style={{ width: '100%', marginTop: '60px', border: 'none' }}>
            <img className="screens" src={Screens} alt="" />
          </Card>
        </div>
        <div className="col-md-6">
          <Card
            className="scard justify-content-center"
            style={{ width: '100%', marginTop: '100px', border: 'none' }}
          >
            <p className="scard1">Build your business</p>
            <h2 className="scard2">Create your Store</h2>
            <p className="scard3">
              Lorem ipsum dolor sit amet, consetetur sadipscing <br />
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
