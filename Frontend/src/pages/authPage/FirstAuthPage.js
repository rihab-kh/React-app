import { useState } from "react"
import FirstAuthForm from "../../components/authForm/FirstAuthForm"

import React from "react"

export default function AuthPage() {
	const loading = false
	return (
		<div className="ProgrammeSeances-list">
			{loading && <div>loading...</div>}
			{!loading && (
				<>
					<br />
					<h1>Choisir..</h1>
					<br />
					<FirstAuthForm />
				</>
			)}
		</div>
	)
}
