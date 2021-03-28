import React from "react";
import Footer from "./Footer";

export default function Welcome() {
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
						<form action="/chat" className="flex-column">
							<input
								type="text"
								name="username"
								id="username"
								placeholder="Set a name"
								required
							/>
							<button className="primary self-right">Join</button>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
