import { useState } from "react"

export default function LoginForm() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	return (
		<>
			<form action="" className="form">
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<br />
				<input
					type="password"
					name="password"
					placeholder="Password"
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
