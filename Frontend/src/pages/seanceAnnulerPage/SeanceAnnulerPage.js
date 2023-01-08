import SeancesList from "../../components/seanceAnnulerList/SeanceAnnulerList"
import { useState } from "react"

export default function AnnulerSeancePage() {
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
			raison: "",
			feedback: "",
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
			raison: "",
			feedback: "",
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
			raison: "",
			feedback: "",
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
			raison: "",
			feedback: "",
			competence: "comp4",
			statistique: "stat4",
		},
	])

	const AnnulerSeance = (
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
					programmeSeance: programmeSeance,
					joueur: joueur,
					lieuEntr: lieuEntr,
					raison: raison,
					feedback: feedback,
					competence: competence,
					statistique: statistique,
				  }
				: seance
		)
		setSeances(newSeances)
	}
	const FaireFeedback = (
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
					programmeSeance: programmeSeance,
					joueur: joueur,
					lieuEntr: lieuEntr,
					raison: raison,
					feedback: feedback,
					competence: competence,
					statistique: statistique,
				  }
				: seance
		)
		setSeances(newSeances)
	}

	return (
		<div className="Seances-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<SeancesList
						AnnulerSeance={AnnulerSeance}
						FaireFeedback={FaireFeedback}
						mySeance={seances}
					/>
				</>
			)}
		</div>
	)
}
