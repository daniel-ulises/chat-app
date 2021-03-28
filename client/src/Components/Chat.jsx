import React, {useState, useEffect} from "react";
import Footer from "./Footer";
// Get the username from the previously inserted form
import queryString from "query-string";
import {io} from "socket.io-client";
// Initialize SocketIO and connect it to the server
const socket = io(process.env.REACT_APP_ORIGIN_SERVER);

export default function Chat(props) {
	// Set the queried name from the previous form as the username
	const {username} = queryString.parse(props.location.search);
	const [message, setMessage] = useState({});
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		// When a message is sent by either user, add them to the
		// messages array to be displayed in the chat
		socket.on("chat message", msg => {
			setMessages([...messages, msg]);

			// Make the chat be always scrolled to the bottom
			document
				.getElementById("scroller")
				.scrollTo(0, document.getElementById("scroller").scrollHeight);
		});
		return () => {
			// This prevents the messages from displaying multiple times
			socket.off("chat message");
		};
	}, [messages]);

	// We get the user input from the text field and assign
	// that to our state
	const inputValue = e => {
		setMessage({
			name: username,
			msg: e.target.value,
		});
	};

	// When a message is sent, we will add our current message to
	// the messages array, which will be then rendered in the chat
	const handleSubmit = e => {
		e.preventDefault();
		socket.emit("chat message", message);
		e.target.reset();
	};

	// Mapping the messages array and have the render in the chat
	const renderMessages = messages.map((msg, index) => (
		<li className="flex-row" key={index}>
			<div className="name">
				<strong>{msg.name}:</strong>
			</div>
			<div className="message">{msg.msg}</div>
		</li>
	));

	return (
		<>
			<main>
				<div className="container message-box flex-column">
					<div className="card messages" id="scroller">
						<ul>{renderMessages}</ul>
					</div>
					<form onSubmit={handleSubmit} className="flex-row">
						<input
							type="text"
							name="msg"
							id="msg"
							autoFocus={true}
							autoComplete="off"
							onChange={inputValue}
						/>
						<button className="primary" type="submit">
							Send
						</button>
					</form>
					<div className="connected-as">
						Connected as: <strong>{username}</strong>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
