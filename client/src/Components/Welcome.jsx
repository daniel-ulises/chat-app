import React, {useState} from "react";
import Footer from "./Footer";
import {Link} from "react-router-dom";

export default function Welcome() {
	const [userName, setUserName] = useState("");

	const handleChange = e => {
		setUserName(e.target.value);
	};
	return (
		<>
			<main>
				<div className="container">
					<div className="card welcome">
						<h3>Welcome to the chat. </h3>
						<p>
							To join just give us a desired username for the session and click
							"Join!"
						</p>
					</div>
					<div className="card login flex-column">
						<form className="flex-column">
							<input
								type="text"
								name="username"
								id="username"
								placeholder="Set a name"
								onChange={handleChange}
								required
							/>
							<Link
								to={{
									pathname: "/chat",
									state: {userName: userName},
								}}
							>
								<button className="primary self-right">Join</button>
							</Link>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
