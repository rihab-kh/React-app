import { useEffect, useState } from "react"
import { fetchEventById } from "../../services/evenements.service"
import { useParams } from "react-router-dom"
import "./VoirEvenementDetails.css"
function VoirEvenementDetails() {
	const [loading, setLoading] = useState(false)
	const [event, setEvent] = useState({})

	const { eventId } = useParams()
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			const result = await fetchEventById(eventId)
			setEvent(result)
			setLoading(false)
		}
		fetchData()
	}, [eventId])

	return (
		<div className="event-details">
			<div className="header">Détails de l'événement</div>
			{loading ? (
				<div>Loading ... </div>
			) : (
				<>
					<form action="" className="form">
						<div>
							<div>
								<img src={event.event_image} width={200} height={200} />
							</div>
							<div className="title">Nom</div>
							<div className="value">{event.nom}</div>

							<div className="title">Description</div>
							<div className="value">{event.description}</div>

							<div className="title">Date de début</div>
							<div className="value">{event.date_debut}</div>

							<div className="title">Date de fin</div>
							<div className="value">{event.date_fin}</div>

							<div className="title">Confidentialite</div>
							<div className="value">{event.confidentialite}</div>
							<div className="title">Lieu</div>
							<div className="value">{event.lieu}</div>
						</div>
						<br></br>
						<div className="form">
							<button type="button">Intéressé</button>
							<button type="button">Participer</button>
							<button type="button">Ne pas Participer</button>
						</div>
					</form>
					<br></br>
					<br></br>
				</>
			)}
		</div>
	)
}

export default VoirEvenementDetails
