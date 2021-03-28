import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Chat from "./Components/Chat";
import "./main.css";

export default function App() {
	return (
		<Router>
			<Route exact path="/welcome" component={Welcome} />
			<Route path="/chat" component={Chat} />
		</Router>
	);
}
