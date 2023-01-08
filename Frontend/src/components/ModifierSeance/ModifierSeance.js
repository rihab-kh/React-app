import "./ModifierSeance.css"
import { useState } from "react"
export default function Seance({
	id,
	jour,
	horaire,
	programmeSeance,
	joueur,
	lieuEntr,
	raison,
	feedback,
	competence,
	statistique,
	updateSeance,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [jourToUpdate, setJourToUpdate] = useState(jour)
	const [horaireToUpdate, setHoraireToUpdate] = useState(horaire)
	const [joueurToUpdate, setJoueurToUpdate] = useState(joueur)
	const [lieuEntrToUpdate, setLieuEntrToUpdate] = useState(lieuEntr)
	const [programmeSeanceToUpdate, setProgrammeSeanceToUpdate] =
		useState(programmeSeance)
	const [raisonToUpdate, setRaisonToUpdate] = useState(raison)
	const [feedbackToUpdate, setFeedbackToUpdate] = useState(feedback)
	const [competenceToUpdate, setCompetenceToUpdate] = useState(competence)
	const [statistiqueToUpdate, setStatistiqueToUpdate] = useState(statistique)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => setUpdateMode(true)}>Update</button>
			</div>
		)
	}
	return (
		<div className="joueur">
			{!updateMode ? (
				<>
					<div className="">
						{jour} {horaire} {programmeSeance} {joueur}
						{lieuEntr} {raison} {feedback} {competence} {statistique}
					</div>
					{}
					{renderActions()}
				</>
			) : (
				<div>
					<label>Jour</label>
					<br></br>
					<input
						type="text"
						name="nom"
						value={jourToUpdate}
						onChange={(e) => setJourToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Horaire</label>
					<br></br>
					<input
						type="text"
						name="horaire"
						value={horaireToUpdate}
						onChange={(e) => setHoraireToUpdate(e.target.value)}
					/>
					<br></br>
					<label>joueur</label>
					<br></br>
					<input
						type="text"
						name="joueur"
						value={joueurToUpdate}
						onChange={(e) => setJoueurToUpdate(e.target.value)}
					/>
					<br></br>
					<label>lienEntr</label>
					<br></br>
					<input
						type="text"
						name="lienEntr"
						value={lieuEntrToUpdate}
						onChange={(e) => setLieuEntrToUpdate(e.target.value)}
					/>
					<br></br>
					<input
						type="text"
						name="programmeSeance"
						value={programmeSeanceToUpdate}
						onChange={(e) => setProgrammeSeanceToUpdate(e.target.value)}
					/>
					<br></br>
					<label>raison</label>
					<br></br>
					<input
						type="text"
						name="raison"
						value={raisonToUpdate}
						onChange={(e) => setRaisonToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Lieu de naissance</label>
					<br></br>
					<input
						type="text"
						name="feedback"
						value={feedbackToUpdate}
						onChange={(e) => setFeedbackToUpdate(e.target.value)}
					/>

					<br></br>
					<label>competence</label>
					<br></br>
					<input
						type="text"
						name="competence"
						value={competenceToUpdate}
						onChange={(e) => setCompetenceToUpdate(e.target.value)}
					/>
					<br></br>
					<label>statistique</label>
					<br></br>
					<input
						type="text"
						name="statistique"
						value={statistiqueToUpdate}
						onChange={(e) => setStatistiqueToUpdate(e.target.value)}
					/>
					<br></br>

					<button
						onClick={() => {
							updateSeance(
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
							)
							setUpdateMode(false)
						}}
					>
						update Seance
					</button>
				</div>
			)}
		</div>
	)
}
