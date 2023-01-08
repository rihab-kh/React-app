import SeanceList from "../../components/seanceCoachList/SeanceCoachList"
import { useState, useEffect } from "react"
//import CreerSeanceForm from "./../../components/CreerSeanceForm/CreerSeanceForm"
//import { fetchSeances } from "./../../services/seances.service"

export default function SeancePage() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	const [Seances, setSeances] = useState([
		{
			id: 1,
			jour: "09/04/2022",
			horaire: "23:11:11",
			programmeSeance: "seance1",
			joueur: "j1",
			lieuEntr: "tunis",
			raison: "rrr",
			feedback: "aaaa",
			competence: "comp1",
			statistique: "stat1",
		},
		{
			id: 2,
			jour: "09/04/2022",
			horaire: "23:11:11",
			programmeSeance: "seance2",
			joueur: "rihab",
			lieuEntr: "ariana",
			raison: "rrr",
			feedback: "aaaa",
			competence: "comp1",
			statistique: "stat1",
		},
		{
			id: 3,
			jour: "03/04/2022",
			horaire: "23:11",
			programmeSeance: "seance3",
			joueur: "joueur3",
			lieuEntr: "tunis",
			raison: "rrr",
			feedback: "aaaa",
			competence: "comp3",
			statistique: "stat3",
		},
		{
			id: 4,
			jour: "03/04/2022",
			horaire: "23:11",
			programmeSeance: "seance4",
			joueur: "joueur4",
			lieuEntr: "tunis",
			raison: "rrr",
			feedback: "aaaa",
			competence: "comp4",
			statistique: "stat4",
		},
	])

	function addCreerSeance(
		jour,
		horaire,
		programmeSeance,
		joueur,
		lieuEntr,
		raison,
		feedback,
		competence,
		statistique
	) {
		setSeances([
			...Seances,
			{
				id: Seances.length + 1,
				jour: jour,
				horaire: horaire,
				programmeSeance: programmeSeance.value,
				joueur: joueur.value,
				lieuEntr: lieuEntr.value,
				raison: raison,
				feedback: feedback,
				competence: competence.value,
				statistique: statistique.value,
			},
		])
		// setDefis([...defis, {id: defis.length +1, title}])
	}

	return (
		<div className="Seance-list">
			{loading ? (
				<div>Loading ... </div>
			) : (
				<>
					{<SeanceList myCreerSeance={Seances} />}
					{error.length !== 0 && <div>{error}</div>}
				</>
			)}
		</div>
	)
}
