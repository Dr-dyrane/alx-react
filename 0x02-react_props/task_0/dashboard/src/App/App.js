// App.js
import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

function App() {
	return (
		<>
			<Notifications />
			<Header />
			<div className="App-body">
				<p>Login to access the full dashboard</p>
				<Login />
			</div>
			<Footer />
		</>
	);
}

export default App;
