import { useEffect, useState } from "react"
import { fetchJoueurById } from "../../services/joueurDetails.service"
import { useParams } from "react-router-dom"


function VoirJoueurDetails() {
	const [loading, setLoading] = useState(false)
	const [joueur, setJoueur] = useState({})

	const { joueurId } = useParams()
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const result = await fetchJoueurById(joueurId)
			setJoueur(result)
			setLoading(false)
		}
		fetchData()
	}, [joueurId])

	return (
		<div className="joueur-details">
			<div className="header">joueur details</div>
			{loading ? (
				<div>Loading ... </div>
			) : (
				<>
					<form action="" className="form">
						<div>
							<h5>Nom du Joueur</h5>
							<div className="value">{joueur.nom}</div>

							<h5>Prenom</h5>
							<div className="value">{joueur.prenom}</div>

							<h5>nombre Seance</h5>
							<div className="value">{joueur.nbrSeance}</div>

							<h5>objectif</h5>
							<div className="value">{joueur.objectif}</div>

							<h5>Alertes</h5>
							<div className="value">{joueur.alertes}</div>

							<h5>taches</h5>
							<div className="value">{joueur.taches}</div>

							<h5>Competences</h5>
							<div className="value">{joueur.Competences}</div>

							<h5>Statistiques</h5>
							<div className="value">{joueur.Statistiques}</div>
						</div>
					</form>
				</>
			)}
		</div>
	)
}

export default VoirJoueurDetails
