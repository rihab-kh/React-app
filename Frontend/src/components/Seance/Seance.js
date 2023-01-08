import "./Seance.css"
import { useState } from "react"
import { Button, Card, Radio } from "antd"
import { Link } from "react-router-dom"
import moment from "moment"
export default function Seance({
	id,
	joueur,
	competence,
	statistique,
	jour,
	horaire,
	progSeance,
	lieu,
	raison,
	feedback,
	FaireFeedback,
	updateSeance,
	AnnulerSeance,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [jourToUpdate, setJourToUpdate] = useState(jour)
	const [horaireToUpdate, setHoraireToUpdate] = useState(horaire)
	const [joueurToUpdate, setJoueurToUpdate] = useState(joueur)
	const [lieuEntrToUpdate, setLieuEntrToUpdate] = useState(lieu)
	const [programmeSeanceToUpdate, setProgrammeSeanceToUpdate] =
		useState(progSeance)
	const [raisonToUpdate, setRaisonToUpdate] = useState(raison)
	const [feedbackToUpdate, setFeedbackToUpdate] = useState(feedback)
	const [competenceToUpdate, setCompetenceToUpdate] = useState(competence)
	const [statistiqueToUpdate, setStatistiqueToUpdate] = useState(statistique)
	const [AnnulerMode, setAnnulerMode] = useState(false)
	const [FeedbackMode, setFeedbackMode] = useState(false)

	function renderActions() {
		return (
			<div className="actions">
				<Button onClick={() => setUpdateMode(true)}>Update</Button>
				<Button onClick={() => setAnnulerMode(true)}>Annuler Seance</Button>
				<Button onClick={() => setFeedbackMode(true)}>Faire Feedback</Button>
				<Button>
					<Link to={`/voirSeance-page/${id}`}>Détails</Link>
				</Button>
			</div>
		)
	}

	return (
		<div>
			{!updateMode && !AnnulerMode && !FeedbackMode ? (
				<>
					<Card style={{ width: 800, margin: 20 }}>
						<div> {joueurToUpdate}</div>
						<div>
							Date de séance: {moment(jourToUpdate).format("DD/MM/YYYY")}
						</div>
						<div>Horaire: {horaireToUpdate}</div>
						<div>Programme de séance: {programmeSeanceToUpdate}</div>
						<div>Lieu: {lieuEntrToUpdate}</div>
						{renderActions()}
					</Card>
				</>
			) : updateMode && !AnnulerMode && !FeedbackMode ? (
				<div>
					<label>joueur</label>
					<br></br>
					<input
						type="text"
						name="joueur"
						value={joueurToUpdate}
						onChange={(e) => setJoueurToUpdate(e.target.value)}
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
					<label>programme séance</label>
					<input
						type="text"
						name="programmeSeance"
						value={programmeSeanceToUpdate}
						onChange={(e) => setProgrammeSeanceToUpdate(e.target.value)}
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

					<label>raison</label>
					<br></br>
					<input
						type="text"
						name="raison"
						value={raisonToUpdate}
						onChange={(e) => setRaisonToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Feedback</label>
					<br></br>
					<input
						type="text"
						name="feedback"
						value={feedbackToUpdate}
						onChange={(e) => setFeedbackToUpdate(e.target.value)}
					/>

					<br></br>

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
							updateSeance(
								id,
								jour,
								horaire,
								progSeance,
								joueur,
								lieu,
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
			) : !updateMode && AnnulerMode && !FeedbackMode ? (
				<div>
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
							setAnnulerMode(false)
						}}
					>
						Annuler Seance
					</button>
				</div>
			) : (
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
			)}
		</div>
	)
}
