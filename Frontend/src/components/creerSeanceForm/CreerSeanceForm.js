import "./CreerSeanceForm.css"
import { useState } from "react"
import Select from "react-select"

export default function CreerSeanceForm(props) {
	const addCreerSeance = "Créer une séance"
	const [Jour, setJour] = useState("")
	const [Horaire, setHoraire] = useState("")
	const [ProgrammeSeance, setProgrammeSeance] = useState({
		programmeSeance: [
			{ value: "seance1", label: "seance1" },
			{ value: "seance2", label: "seance2" },
			{ value: "seance3", label: "seance3" },
		],
	})
	const [Joueur, setJoueur] = useState({
		joueur: [
			{ value: "joueur1", label: "joueur1" },
			{ value: "joueur2", label: "joueur2" },
			{ value: "joueur3", label: "joueur3" },
		],
	})
	const [LieuEntr, setLieuEntr] = useState({
		lieuEntr: [
			{ value: "Tunis", label: "Tunis" },
			{ value: "Ariana", label: "Ariana" },
			{ value: "Manouba", label: "Manouba" },
		],
	})
	const [Raison, setRaison] = useState("")
	const [Feedback, setFeedback] = useState("")
	const [Competence, setCompetence] = useState({
		competence: [
			{ value: "competence1", label: "competence1" },
			{ value: "competence2", label: "competence2" },
			{ value: "competence3", label: "competence3" },
		],
	})
	const [Statistique, setStatistique] = useState({
		statistique: [
			{ value: "statistique1", label: "statistique1" },
			{ value: "statistique2", label: "statistique2" },
			{ value: "statistique3", label: "statistique3" },
		],
	})

	function handleAddCreerSeance() {
		props.addCreerSeance(
			Jour,
			Horaire,
			ProgrammeSeance,
			Joueur,
			LieuEntr,
			Raison,
			Feedback,
			Competence,
			Statistique
		)
	}

	return (
		<>
			<form action="" className="form">
				<label>Jour de la séance</label>
				<input
					type="date"
					name="Jour"
					value={Jour}
					onChange={(e) => setJour(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>Horaire</label>
				<input
					type="time"
					name="title"
					value={Horaire}
					onChange={(e) => setHoraire(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>Programme séance</label>
				<Select
					defaultValue={ProgrammeSeance}
					onChange={setProgrammeSeance}
					options={ProgrammeSeance.programmeSeance}
				/>
				<br></br>
				<label>Joueur</label>
				<Select
					defaultValue={Joueur}
					onChange={setJoueur}
					options={Joueur.joueur}
				/>
				<br></br>
				<label>Lieu</label>
				<Select
					defaultValue={LieuEntr}
					onChange={setLieuEntr}
					options={LieuEntr.lieuEntr}
				/>
				<br></br>
				<label>Compétence</label>
				<Select
					defaultValue={Competence}
					onChange={setCompetence}
					options={Competence.competence}
				/>
				<br></br>
				<label>Statistique</label>
				<Select
					defaultValue={Statistique}
					onChange={setStatistique}
					options={Statistique.statistique}
				/>
				<br></br>
				<br></br>
				<label>Raison</label>
				<input
					type="text"
					name="title"
					value={Raison}
					onChange={(e) => setRaison(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>Feedback</label>
				<input
					type="text"
					name="title"
					value={Feedback}
					onChange={(e) => setFeedback(e.target.value)}
				/>
				<br></br>
				<button type="button" onClick={handleAddCreerSeance}>
					{addCreerSeance}
				</button>
			</form>
		</>
	)
}
