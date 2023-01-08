import { useEffect, useState } from "react"
import { fetchSeanceById } from "../../services/seance.service"
import { useParams } from "react-router-dom"
import "./VoirSeancesDetails.css"
//import Joueur from './../joueur/Joueur';
function VoirSeanceDetails() {
	const [loading, setLoading] = useState(false)
	const [seance, setSeance] = useState({})

	const { seanceId } = useParams()
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const result = await fetchSeanceById(seanceId)
			setSeance(result)
			setLoading(false)
		}
		fetchData()
	}, [seanceId])

	return (
		<div className="seance-details">
			<div className="header">seance details</div>
			{loading ? (
				<div>Loading ... </div>
			) : (
				<>
					<form action="" className="form">
						<div>
							<div className="value">{seance.seance_Date}</div>
							<div className="title">Date</div>
							<div className="value">{seance.seance_Date}</div>

							<div className="title">Nom du Coach</div>
							<div className="value">{seance.nomcoach}</div>

							<div className="title">Durée</div>
							<div className="value">{seance.duree}</div>

							<div className="title">Lieu de la séance</div>
							<div className="value">{seance.lieuseance}</div>

							<div className="title">Prix de la séance</div>
							<div className="value">{seance.prix}</div>
							<div className="title">Objectifs</div>
							<div className="value">{seance.objectif}</div>
						</div>
					</form>
				</>
			)}
		</div>
	)
}

export default VoirSeanceDetails
