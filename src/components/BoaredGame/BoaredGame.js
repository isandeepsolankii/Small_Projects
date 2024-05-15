import { useState } from "react";

import "./BoaredGame.css";

function BoaredGame() {
	const [activity, setActivity] = useState("");
	const [isLoading, setIsLoading] = useState(false);


	const getActivity = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(" https://www.boredapi.com/api/activity");
			const data = await response.json();
			setActivity(data.activity);
		} catch (error) {
			console.error("Error fetching random activity:", error);
			setActivity("Error fetching activity");
		} finally {
			setIsLoading(false);
		}
	};


	return (
		<>
			<div className="body_container">
				<h1>Let's find you something to do</h1>
				<button onClick={getActivity} className="TaskButton">
					Get Activity{" "}
				</button>
				{isLoading ? (<div>Loading...</div>) : (<h3 className="activity">{activity}</h3>)}

			</div>
		</>
	);
}

export default BoaredGame;
