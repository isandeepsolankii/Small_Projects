import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import BoaredGame from './components/BoaredGame/BoaredGame';
import Calculator from './components/Calculator/Calculator';
import Weather from './components/Weather/Weather';
import TandD from './components/TandD/TandD';

function App() {
  // Define your components
  const Component1 = () => <div><BoaredGame /></div>;
  const Component2 = () => <div><Calculator /></div>;
  const Component3 = () => <div><Weather /></div>;
  const Component4 = () => <div><TandD /></div>;


  const [selectedComponent, setSelectedComponent] = useState(null);

  // Function to handle button clicks
  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="App">



      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6'>

              <div className='ipad'>
                <div className='ipad_back'>
                  <div className='camera'></div>
                  <div className='sensor'></div>
                  <div className='volume_button'></div>
                  <div className='power_button'></div>
                </div>
                <div className='ipad_front'>
                  <div className='bezzles'></div>
                  <div className='Screen'></div>
                </div>
              </div>
              {/* Buttons */}
              <button onClick={() => handleButtonClick(Component1)}>BoaredGame</button>
              <button onClick={() => handleButtonClick(Component2)}>Calculator</button>
              <button onClick={() => handleButtonClick(Component3)}>Weather</button>
              <button onClick={() => handleButtonClick(Component4)}>T and D</button>
            </div>
            <div className='col-12 col-lg-6'>
              <img src='ipad.png' alt='ipad' className='ipad_image'></img>
              <div className='application'>{selectedComponent}</div>
            </div>
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
