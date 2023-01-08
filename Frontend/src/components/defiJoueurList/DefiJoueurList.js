import Defi from "../defiJoueur/DefiJoueur"
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
					/>
				)
			})}
		</div>
	)
}

export default DefiList
