import Seance from "../Seance/Seance"
function SeanceList(props) {
	return (
		<div>
			{props.mySeance.map(function (x) {
				return (
					<Seance
						key={x._id}
						id={x._id}
						horaire={x.horaire}
						jour={x.jour}
						progSeance={x.progSeance?.title}
						joueur={x.joueur?.nom}
						lieu={x.lieu?.nom}
						raison={x.raison}
						feedback={x.feedback}
						competence={x.competence?.nom}
						statistique={x.statistique?.titre}
						updateSeance={props.updateSeance}
						AnnulerSeance={props.AnnulerSeance}
						FaireFeedback={props.FaireFeedback}
					/>
				)
			})}
		</div>
	)
}

export default SeanceList
