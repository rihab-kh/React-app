import Joueur from "../../components/afficherJoueur/JoueurAfficher"
import { Link } from "react-router-dom"

function JoueurList(props) {
	return (
		<div>
			{props.myJoueur.map(function (x) {
				return (
					<Link to={`/voirJoueur-page/${x.id}`}>
						<Joueur
							key={x.id}
							id={x.id}
							nom={x.nom}
							prenom={x.prenom}
							nbrSeance={x.nbrSeance}
							objectif={x.objectif}
							taches={x.taches}
							alertes={x.alertes}
							afficherJoueur={props.afficherJoueur}
						/>
					</Link>
				)
			})}
		</div>
	)
}

export default JoueurList
