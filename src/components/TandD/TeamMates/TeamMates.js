import React, { useState } from 'react';

function TeamMates() {
	const [members, setMembers] = useState([]);
	const [newMember, setNewMember] = useState('');
	const [selectedMember, setSelectedMember] = useState('');

	const handleInputChange = (e) => {
		setNewMember(e.target.value);
	};

	const handleAddMember = () => {
		if (newMember.trim() !== '') {
			setMembers([...members, newMember]);
			setNewMember('');
		}
	};

	const handleRandomSelect = () => {
		const randomIndex = Math.floor(Math.random() * members.length);
		setSelectedMember(members[randomIndex]);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Enter name"
				value={newMember}
				onChange={handleInputChange}
			/>
			<button onClick={handleAddMember}>Add Member</button>
			<button onClick={handleRandomSelect}>Select Random</button>
			<div>
				<h2>Members List</h2>

				{members.map((member, index) => (
					<div><p key={index}>
						{member} {selectedMember === member && <span>&#9733;</span>}
					</p>
					</div>
				))}
				{selectedMember != "" ? (<p>{selectedMember}, It's Your Turn</p>) : (<p>Click on Select Random to Start the Game</p>)}

			</div>
		</div>
	);
}

export default TeamMates;
