import LieuEntr from "../../components/lieuEntr/LieuEntr"
function LieuEntrList(props) {
	return (
		<div>
			{props.myLieuxEntr.map(function (x) {
				return (
					<LieuEntr
						key={x._id}
						id={x._id}
						nom={x.nom}
						ville={x.ville}
						pays={x.pays}
						adresse={x.adresse}
						updateLieuEntr={props.updateLieuEntr}
						deleteLieuEntr={props.deleteLieuEntr}
					/>
				)
			})}
		</div>
	)
}

export default LieuEntrList
