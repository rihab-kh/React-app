import { useState } from "react"

export default function AuthForm() {
	const [nom, setNom] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	return (
		<>
			<form action="" className="form">
				<label htmlFor="name">Nom:</label>
				<br />
				<input
					type="text"
					name="nom"
					value={nom}
					onChange={(e) => setNom(e.target.value)}
				/>
				<br />
				<label htmlFor="email">Email:</label> <br />
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<label htmlFor="password">Password:</label> <br />
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<br />
				<button type="button">login</button>
			</form>
		</>
	)
}
