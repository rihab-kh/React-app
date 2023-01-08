import { useState } from "react"

export default function InfoForm() {
	const [poids, setPoids] = useState("")
	const [taille, setTaille] = useState("")
	const [droitgouchier, setDroitgouchier] = useState("Doit")
	const [objectifsportif, setObjectifsportif] = useState("")

	return (
		<>
			<form action="" className="form">
				<input
					type="number"
					name="poids"
					placeholder="Poids"
					value={poids}
					onChange={(e) => setPoids(e.target.value)}
				/>

				<br />
				<input
					type="number"
					name="taille"
					placeholder="Taille"
					value={taille}
					onChange={(e) => setTaille(e.target.value)}
				/>

				<br />
				<select
					value={droitgouchier}
					onChange={(e) => setDroitgouchier(e.target.value)}
				>
					<option selected value="Droit">
						Droit
					</option>
					<option value="Gouchier">Gouchier</option>
				</select>
				<br />
				<textarea
					type="text"
					name="objectifsportif"
					placeholder="objectifsportif"
					value={objectifsportif}
					onChange={(e) => setObjectifsportif(e.target.value)}
				/>

				<br />
				<button type="button">Confirmer</button>
			</form>
		</>
	)
}
