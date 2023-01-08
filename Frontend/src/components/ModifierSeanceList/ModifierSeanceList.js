import ModifierSeance from "../ModifierSeance/ModifierSeance"
function ModifierSeanceList(props) {
	return (
		<div>
			{props.mySeance.map(function (x) {
				return (
					<ModifierSeance
						key={x.id}
						id={x.id}
						horaire={x.horaire}
						programmeSeance={x.programmeSeance}
						joueur={x.joueur}
						lieuEntr={x.lieuEntr}
						raison={x.raison}
						feedback={x.feedback}
						competence={x.competence}
						statistique={x.statistique}
						updateSeance={props.updateSeance}
					/>
				)
			})}
		</div>
	)
}

export default ModifierSeanceList
