import AuthPage from "./pages/authPage/AuthPage"
import CoachRoutes from "./components/coachRoutes/CoachRoutes"
import JoueurRoutes from "./components/joueurRoutes/JoueurRoutes"
import { useEffect, useState } from "react"
import { me } from "./services/login.service"
import InscriptionPage from "./pages/inscriptionPage/InscriptionPage"
import FirstAuthPage from "./pages/authPage/FirstAuthPage"
import "./App.css"

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom"

function App() {
	const token = localStorage.getItem("token")
	console.log(token)
	const [user, setUser] = useState({})
	useEffect(() => {
		const fetchMe = async () => {
			try {
				const user = await me()
				console.log(user)
				setUser(user)
				console.log("user: ", user)
			} catch (e) {
				console.log("error")
			}
		}
		fetchMe()
	}, [])
	console.log(token)
	console.log(user)
	if (token && user.role === "coach") {
		// private routes

		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Redirect to="/coach" />
					</Route>
					<Route path="/coach">
						<CoachRoutes />
					</Route>
				</Switch>
			</Router>
		)
	} else if (token && user.role === "joueur") {
		// private routes

		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Redirect to="/joueur" />
					</Route>
					<Route path="/joueur">
						<JoueurRoutes />
					</Route>
				</Switch>
			</Router>
		)
	} else if (!token) {
		// public routes
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Redirect to="/auth-page" />
					</Route>
					<Route exact path="/auth-page">
						<AuthPage />
					</Route>

					<Route path="/inscription-page">
						<InscriptionPage />
					</Route>

					<Route path="/FirstAuth-page">
						<FirstAuthPage />
					</Route>
				</Switch>
			</Router>
		)
	} else {
		return <div>loading...</div>
	}
}

export default App
