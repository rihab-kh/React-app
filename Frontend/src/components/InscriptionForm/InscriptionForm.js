import { useState } from "react"
import validator from "validator"

export default function InscriptionForm() {
	const [nom, setNom] = useState("")
	const [prenom, setPrenom] = useState("")
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	const [errorMessage, setErrorMessage] = useState("")
	const [emailError, setEmailError] = useState("")

	const validate = (value) => {
		if (
			validator.isStrongPassword(value, {
				minLength: 8,
				minLowercase: 1,
				minUppercase: 1,
				minNumbers: 1,
				minSymbols: 1,
			})
		) {
			setErrorMessage("Is Strong Password")
		} else {
			setErrorMessage("Is Not Strong Password")
		}
	}
	const validateEmail = (e) => {
		var email = e.target.value

		if (validator.isEmail(email)) {
			setEmailError("Valid Email :)")
		} else {
			setEmailError("Enter valid Email!")
		}
	}

	function handleInscription() {
		console.log(nom, prenom)
	}
	return (
		<>
			<form action="" className="form">
				<input
					type="nom"
					name="nom"
					placeholder="Nom"
					value={nom}
					onChange={(e) => setNom(e.target.value)}
				/>
				<br />
				<input
					type="prenom"
					name="prenom"
					placeholder="Prenom"
					value={prenom}
					onChange={(e) => setPrenom(e.target.value)}
				/>
				<br />
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(validateEmail(e))}
				/>
				<span
					style={{
						fontWeight: "bold",
						color: "red",
					}}
				>
					{emailError}
				</span>

				<br />
				<input
					type="password"
					name="password"
					placeholder="Mot de passe"
					value={password}
					onChange={(e) => setPassword(validate(e.target.value))}
				/>
				<span
					style={{
						fontWeight: "bold",
						color: "red",
					}}
				>
					{errorMessage}
				</span>

				<br />
				<br />
				<button type="button" onClick={handleInscription()}>
					Confirmer
				</button>
			</form>
		</>
	)
}
