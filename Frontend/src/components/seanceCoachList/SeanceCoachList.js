import Seance from "../seanceCoach/SeanceCoach"
import { Link } from "react-router-dom"
function SeanceList(props) {
	return (
		<div>
			{props.myCreerSeance.map(function (x) {
				return (
					<Link to={`/voirSeance-page/${x.id}`}>
						<Seance
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
					</Link>
				)
			})}
		</div>
	)
}

export default SeanceList
