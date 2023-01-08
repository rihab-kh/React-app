import { useState } from "react"
export default function AbonnementForm(props) {
	const [typeAbonnementToUpdate, setTypeAbonnementToUpdate] = useState("")

	function handleUpdateAbonnement() {
		console.log("aaaa")
		props.updateAbonnement(typeAbonnementToUpdate)
	}

	return (
		<>
			<form action="" className="form">
				<div
					value={typeAbonnementToUpdate}
					onChange={(e) => setTypeAbonnementToUpdate(e.target.value)}
				>
					<input type="radio" value="free" name="typeAbonnementToUpdate" /> Free
					(3 joueurs)
					<br />
					<input
						type="radio"
						value="basic"
						name="typeAbonnementToUpdate"
					/>{" "}
					Basic (10 joueurs)
					<br />
					<input
						type="radio"
						value="premuim"
						name="typeAbonnementToUpdate"
					/>{" "}
					Premuim (illimité)
				</div>

				<br />

				<button
					onClick={() => {
						handleUpdateAbonnement(typeAbonnementToUpdate)

						//setUpdateMode(false)
					}}
				>
					Confirmer
				</button>
			</form>
		</>
	)
}
