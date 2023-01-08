import LoginForm from "../../components/LoginForm/LoginForm"

import InfoForm from "../../components/LoginForm/InfoForm"

import React from "react"

export default function LoginPage() {
	const firstLogin = true
	const logged = true
	return (
		<div className="ProgrammeSeances-list">
			{!logged && (
				<>
					<br />
					<h1>Login</h1>
					<br />
					<LoginForm />
				</>
			)}

			{logged && firstLogin && (
				<>
					<br />
					<InfoForm />
					<br />
				</>
			)}

			{logged && !firstLogin && (
				<>
					<br />
					<h1>autre page</h1>
					<br />
				</>
			)}
		</div>
	)
}
