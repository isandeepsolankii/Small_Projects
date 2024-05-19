import React from 'react';

import './ProjectList.css';

function ProjectList() {

	const projectType = [{
		id: "1",
		projectType: "ReactJS",
		projectLogo: "atom.png",
		projectComponent: "recqatjs",
	},
	{
		id: "2",
		projectType: "Python",
		projectLogo: "python.png",
		projectComponent: "ReactJS",
	},
	{
		id: "3",
		projectType: "Svelte",
		projectLogo: "svelte.png",
		projectComponent: "ReactJS",
	},
	]

	return (<div className='ProjectListContainer'>
		<div className='ProjectListInnerContainer'>
			{projectType.map((PType) => (<div>
				<div className='PTypeLink'><img src={PType.projectLogo} alt='react' className='PTImage'></img>{PType.projectType}</div>
			</div>))}
		</div>
	</div>)
}

export default ProjectList;
