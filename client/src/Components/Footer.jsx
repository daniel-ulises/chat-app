import React from "react";
import Logo from "../github.svg";

export default function Footer() {
	return (
		<footer>
			<a
				href="https://github.com/daniel-ulises/ChatApp"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Logo} alt="Github" />
			</a>
		</footer>
	);
}
