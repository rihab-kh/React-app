import "./StatistiqueForm.css"
import { useState } from "react"
import Statistique from "./../statistique/Statistique"

export default function StatistiqueForm(props) {
	const addStatistique = "Ajouter une statistique"
	const [typeStat, settypeStat] = useState("")
	const [unitemesure, setunitemesure] = useState("")
	const [minmax, setminmax] = useState("")
	const [titre, settitre] = useState("")
	const [description, setdescription] = useState("")
	const [lien, setlien] = useState("")
	const [visible, setvisible] = useState("")

	function handleAddStatistique() {
		props.addStatistique(
			typeStat,
			unitemesure,
			minmax,
			titre,
			description,
			lien,
			visible
		)
	}

	return (
		<>
			<form action="" className="form">
				<label>
					<b>Type Statistique</b>
				</label>
				<br></br>
				<input
					type="text"
					name="typeStat"
					placeholder="Type statistique"
					value={typeStat}
					onChange={(e) => settypeStat(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Unité de mesure</b>
				</label>
				<br></br>
				<input
					type="text"
					name="unitemesure"
					placeholder="Unité de mesure"
					value={unitemesure}
					onChange={(e) => setunitemesure(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Stat Min/Stat Max</b>
				</label>
				<br></br>
				<input
					type="text"
					name="minmax"
					placeholder="Min/Max"
					value={minmax}
					onChange={(e) => setminmax(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Titre Statistique</b>
				</label>
				<br></br>
				<input
					type="text"
					name="titre"
					placeholder="Titre statistique"
					value={titre}
					onChange={(e) => settitre(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Description</b>
				</label>
				<br></br>
				<input
					type="text"
					name="description"
					placeholder="Description"
					value={description}
					onChange={(e) => setdescription(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Lien</b>
				</label>
				<br></br>
				<input
					type="text"
					name="lien"
					placeholder="Lien"
					value={lien}
					onChange={(e) => setlien(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Visibilité</b>
				</label>
				<br></br>
				<input
					type="text"
					name="visible"
					placeholder="Visibilité"
					value={String(visible)}
					onChange={(e) => setvisible(e.target.value)}
				/>
				<br></br>
				<br></br>
				<button type="button" onClick={handleAddStatistique}>
					{addStatistique}
				</button>
			</form>
		</>
	)
}
