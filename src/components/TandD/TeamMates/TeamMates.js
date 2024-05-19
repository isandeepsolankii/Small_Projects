import React, { useState } from "react";
import "./TeamMates.css";

function TeamMates() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");
  const [selectedMember, setSelectedMember] = useState("");

  const handleInputChange = (e) => {
    setNewMember(e.target.value);
  };

  const handleAddMember = () => {
    if (newMember.trim() !== "") {
      setMembers([...members, newMember]);
      setNewMember("");
    }
  };

  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * members.length);
    setSelectedMember(members[randomIndex]);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <input
              type="text"
              placeholder="Enter name"
              value={newMember}
              onChange={handleInputChange}
              className="TInput"
            />
            <button onClick={handleAddMember} className=" btn GButton">
              Add Member
            </button>
          </div>
          <div className="col-12 col-lg-6">
            <div className="MembersList">
              <h2>Players Name</h2>
              <hr></hr>

              {members.map((member, index) => (
                <div>
                  <p key={index}>
                    {index + 1}. {member}
                    {selectedMember === member && <span>&#9733;</span>}
                  </p>
                </div>
              ))}
              <div className="SelectedMember">
                {selectedMember !== "" ? (
                  <p>
                    <h5>{selectedMember}</h5>, It's Your Turn
                  </p>
                ) : (
                  <p>Add Players to start the game</p>
                )}
                <button onClick={handleRandomSelect} className=" btn GButton">
                  Select Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMates;
