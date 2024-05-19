import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import ProjectList from './components/ProjectList/ProjectList';
import ProjectOutput from './components/ProjectOutput/ProjectOutput';

function App() {





  return (
    <div className="App">

      <div className='Navbar'><Navbar /></div>
      <div>
        <div >
          <div className='row'>
            <div className='col-12 col-lg-2'>


              <ProjectList />


            </div>
            <div className='col-12 col-lg-10'>

              <ProjectOutput/>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
