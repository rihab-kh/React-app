import "./SeanceAnnuler.css"
import { useState } from "react"
import Select from "react-select"
import { Radio } from "antd"
import React from "react"

export default function Defi({
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
	AnnulerSeance,
	FaireFeedback,
}) {
	const [AnnlerMode, setAnnlerMode] = useState(false)
	const [FeedbackMode, setFeedbackMode] = useState(false)
	const [jourToUpdate, setJourToUpdate] = useState(jour)
	const [horaireToUpdate, setHoraireToUpdate] = useState(horaire)
	const [programmeSeanceToUpdate, setProgrammeSeanceToUpdate] =
		useState(programmeSeance)
	const [joueursToUpdate, setJoueursToUpdate] = useState(joueur)
	const [lieuEntrToUpdate, setLieuEntrToUpdate] = useState(lieuEntr)
	const [raisonToUpdate, setRaisonToUpdate] = useState(raison)
	const [feedbackToUpdate, setFeedbackToUpdate] = useState(feedback)
	const [competenceToUpdate, setCompetenceToUpdate] = useState(competence)
	const [statistiqueToUpdate, setStatistiqueToUpdate] = useState(statistique)

	
  

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => setAnnlerMode(true)}>Annuler Seance</button>
				<button onClick={() => setFeedbackMode(true)}>Faire Feedback</button>
			</div>
		)
	}

	return (
		<div className="defi">
			{!AnnlerMode && !FeedbackMode ? (
				<>
					<div className="">
						{jourToUpdate} {horaireToUpdate} {programmeSeanceToUpdate}
						{lieuEntrToUpdate}
						{joueursToUpdate} {feedbackToUpdate}
						{competenceToUpdate} {statistiqueToUpdate}
					</div>
					{}
					{renderActions()}
				</>
			) : AnnlerMode ? (
				<div>
					<div>
						{jour} {horaire}
					</div>
					<label>Raison:</label>
					<input
						type="text"
						name="raison"
						value={raisonToUpdate}
						onChange={(e) => setRaisonToUpdate(e.target.value)}
					/>
					<br />
					<button
						onClick={() => {
							AnnulerSeance(id, raisonToUpdate)
							setAnnlerMode(false)
						}}
					>
						Annuler Seance
					</button>
				</div>
			) : FeedbackMode ? (
				<>
					<div>
						<label>Feedback:</label>
						<input
							type="text"
							name="feedback"
							value={feedbackToUpdate}
							onChange={(e) => setFeedbackToUpdate(e.target.value)}
						/>{" "}
						<br />
						<label>objectif atteint?</label>
						
      					<Radio>Oui</Radio>
						  <Radio>Non</Radio>
      					
						
						
						<br />
						<button
							onClick={() => {
								FaireFeedback(id, feedbackToUpdate)
								setFeedbackMode(false)
							}}
						>
							Faire Feedback
						</button>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	)
}
