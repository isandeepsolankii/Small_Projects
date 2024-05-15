import React, { useState } from "react";
import "./TandD.css";
import TeamMates from "./TeamMates/TeamMates";

function TandD(selectedMember) {
	const [truthQuestion, setTruthQuestion] = useState("");
	const [dareQuestion, setDareQuestion] = useState("");
	const [isTruth, setIsTruth] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const getTruthQuestion = async () => {
		setIsLoading(true);
		try {
			const response = await fetch("https://api.truthordarebot.xyz/v1/truth");
			const data = await response.json();
			setTruthQuestion(data.question);
			setDareQuestion(""); // Reset dare question
		} catch (error) {
			console.error("Error fetching random truth question:", error);
			setTruthQuestion("Error fetching truth question");
		} finally {
			setIsLoading(false);
		}
	};

	const getDareQuestion = async () => {
		setIsLoading(true);
		try {
			const response = await fetch("https://api.truthordarebot.xyz/v1/dare");
			const data = await response.json();
			setDareQuestion(data.question);
			setTruthQuestion(""); // Reset truth question
		} catch (error) {
			console.error("Error fetching random dare question:", error);
			setDareQuestion("Error fetching dare question");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="body_container">
				<TeamMates />
				<h1>Select Truth or Dare.</h1>
				<button onClick={() => { setIsTruth(true); getTruthQuestion(); }} className="TaskButton">
					Truth
				</button>
				<button onClick={() => { setIsTruth(false); getDareQuestion(); }} className="TaskButton">
					Dare
				</button>
				{isLoading ? (
					<div className="spinner">Loading...</div>
				) : (
					<h3 className="activity">{isTruth ? truthQuestion : dareQuestion}</h3>
				)}
			</div>
		</>
	);
}

export default TandD;
