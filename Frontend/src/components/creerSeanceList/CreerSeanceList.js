import CreerSeance from "./../creerSeance/CreerSeance"

function CreerSeanceList(props) {
	return (
		<div>
			{props.myCreerSeance.map(function (x) {
				return (
					<CreerSeance
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
					/>
				)
			})}
		</div>
	)
}

export default CreerSeanceList
