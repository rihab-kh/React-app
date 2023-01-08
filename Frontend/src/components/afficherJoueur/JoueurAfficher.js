import "./JoueurAfficher.css"
import Competences from "../competences/Competences"
import Statistiques from "../statistiques/Statistiques"
import { Link } from "react-router-dom"

import { useState } from "react"
export default function Joueur({
	id,
	nom,
	prenom,
	nbrSeance,
	objectif,
	taches,
	alertes,
	afficherJoueur,
}) {
	const [viewMode, setViewMode] = useState(false)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => setViewMode(id)}>Afficher</button>
			</div>
		)
	}

	return (
		<div className="lieuEntr">
			{!viewMode ? (
				<>
					<Link to={"/voirJoueur-page/" + id}>
						<div className="">
							<h1>
								{nom} {prenom}{" "}
							</h1>
						</div>
						{}
						{renderActions()}
					</Link>
				</>
			) : (
				<div>
					
				</div>
			)}
		</div>
	)
}
