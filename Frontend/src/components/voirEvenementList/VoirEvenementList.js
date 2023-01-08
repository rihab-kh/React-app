import VoirEvenement from "./../voirEvenement/VoirEvenement"
import { Link } from "react-router-dom"
function VoirEvenementList(props) {
	return (
		<div>
			{props.myEvent.map(function (x) {
				return (
					<Link to={`/voirEvenement-page/${x.id}`}>
						<VoirEvenement
							key={x.id}
							id={x.id}
							nom={x.nom}
							description={x.description}
							date_debut={x.date_debut}
							date_fin={x.date_fin}
							lieu={x.lieu}
							confidentialite={x.confidentialite}
							event_image={x.event_image}
							detailEvenement={props.detailEvenement}
						/>
					</Link>
				)
			})}
		</div>
	)
}
export default VoirEvenementList
