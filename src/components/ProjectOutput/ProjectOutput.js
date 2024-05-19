import React, { useState } from 'react';
import './ProjectOutput.css';
import BoaredGame from '../BoaredGame/BoaredGame';
import Calculator from '../Calculator/Calculator';
import Weather from '../Weather/Weather';
import TandD from '../TandD/TandD';

function ProjectOutput() {


	// Define your components


	const buttonsList = [{
		id: '1',
		componentName: "BoaredGame",
		appName: "Boared Game",
		image: "bored.png",
	},
	{
		id: '2',
		componentName: "Calculator",
		appName: "Calculator",
		image: "calculator.png",

	}, {
		id: '3',
		componentName: "Weather",
		appName: "Weather",
		image: "weather.png",

	}, {
		id: '4',
		componentName: "TandD",
		appName: "T and D",
		image: "tandd.png",

	},

	]


	const renderComponent = (componentName) => {
		switch (componentName) {
			case 'BoaredGame':
				return <div><BoaredGame /></div>;
			case 'Calculator':
				return <div><Calculator /></div>;
			case 'Weather':
				return <div><Weather /></div>;
			case 'TandD':
				return <div><TandD /></div>;
			// Add more cases for other component names if needed
			default:
				return <div>No component found for {componentName}</div>;
		}
	};
	const [selectedComponent, setSelectedComponent] = useState(null);

	// Function to handle button clicks
	const handleButtonClick = (component) => {
		setSelectedComponent(component);
	};

	return (
		<div className="POContainer">

<p className='RProject'>ReactJS Projects</p>
			

				
				<div className='btncontainer'>
					
				{buttonsList.map((item) => (
				<div className='buttonContainer'>
					
					<button type='button' className=' btn Pbutton	' onClick={() => handleButtonClick(renderComponent(item.componentName))}><img src={item.image}></img><p className='buttonText'>{item.appName}</p></button></div>
				
			))}
				</div>
			&nbsp;
			<p className='RProject'>Game Name</p>
			<div className='application'>{selectedComponent}</div>
			{/* <div className='ipad'>

                <div className='ipad_front'>
                  <div className='Screen'></div>
                </div>
              </div> */}



		</div>
	);
}

export default ProjectOutput;
