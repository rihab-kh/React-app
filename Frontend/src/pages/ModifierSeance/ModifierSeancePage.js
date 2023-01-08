import ModifierSeanceList from "../../components/ModifierSeanceList/ModifierSeanceList"
import { useState } from "react"

export default function ModifierSeancePage() {
	const loading = false
	const [isVisible, setIsVisible] = useState(true)
	const [seances, setSeances] = useState([
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
			jour: "11/04/2022",
			horaire: "23:11:11",
			programmeSeance: "seance2",
			joueur: "j2",
			lieuEntr: "tunis",
			raison: "rrrr",
			feedback: "bbbb",
			competence: "comp2",
			statistique: "stat2",
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
			...seances,
			{
				id: seances.length + 1,
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

	const updateSeance = (
		id,
		jour,
		horaire,
		programmeSeance,
		joueur,
		lieuEntr,
		raison,
		feedback,
		competence,
		statistique
	) => {
		const newSeances = seances.map((seance) =>
			seance.id === id
				? {
						id,
						jour: jour,
						horaire: horaire,
						programmeSeance: programmeSeance.value,
						joueur: joueur.value,
						lieuEntr: lieuEntr.value,
						raison: raison,
						feedback: feedback,
						competence: competence.value,
						statistique: statistique.value,
				  }
				: seance
		)
		setSeances(newSeances)
	}
	return (
		<div className="seances-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<ModifierSeanceList
						add={addCreerSeance}
						updateSeance={updateSeance}
						mySeance={seances}
					/>
				</>
			)}
		</div>
	)
}
