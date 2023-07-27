import React from 'react';
import Header from './Header';
import CardComponent from './CardComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FiveComponent from './FiveComponent';


const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="left-content">
          
        </div>
        <div className="right-content">
          
        </div>
      </div>
      <div className="card-container">
        <CardComponent />
        
      </div>
      <SecondComponent />
      <ThirdComponent/>
      <FiveComponent/>
      
    </div>
  );
};

export default App;
