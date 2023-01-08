import Seance from "../../components/seanceAnnuler/SeanceAnnuler"
function SeanceList(props) {
	return (
		<div>
			{props.mySeance.map(function (x) {
				return (
					<Seance
						key={x.id}
						id={x.id}
						jour={x.jour}
						horaire={x.horaire}
						programmeSeance={x.programmeSeance}
						joueur={x.joueur}
						lieuEntr={x.lieuEntr}
						raison={x.raison}
						feedback={x.feedback}
						competence={x.competence}
						statistique={x.statistique}
						AnnulerSeance={props.AnnulerSeance}
						FaireFeedback={props.FaireFeedback}
					/>
				)
			})}
		</div>
	)
}

export default SeanceList
