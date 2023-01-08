import Defi from "../assigdefi/Defiassig"
function DefiList(props) {
	return (
		<div>
			{props.myDefi.map(function (x) {
				return (
					<Defi
						key={x.id}
						id={x.id}
						objectif={x.objectif}
						lienVideo={x.lienVideo}
						periode={x.periode}
						joueurs={x.joueurs}
						assignerDefi={props.assignerDefi}
					/>
				)
			})}
		</div>
	)
}

export default DefiList
