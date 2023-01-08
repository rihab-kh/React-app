import EventsList from "../../components/eventList/EventList"
import EventForm from "../../components/eventForm/EventForm"
import { useState, useCallback, useEffect } from "react"
import {
	fetchEvents,
	addEvent as addEventFromApi,
	updateEvent as updateEventFromApi,
	deleteEvent as deleteEventFromApi,
} from "../../services/evenements.service"

export default function EventPage() {
	const [loading, setLoading] = useState(false)
	const [events, setEvents] = useState([])
	const [error, setError] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)

				const result = await fetchEvents()
				setEvents(result)
				setLoading(false)
			} catch (e) {
				setLoading(false)
				setError("An error occurred when we tried to fetch events")
			}
		}
		fetchData()
	}, [])

	const addEvent = async (
		nom,
		description,
		date_debut,
		date_fin,
		lieu,
		etat,
		event_image
	) => {
		await addEventFromApi({
			nom,
			description,
			date_debut,
			date_fin,
			lieu,
			etat,
			event_image,
		})
		setEvents([
			...events,
			{
				_id: events.length + 1,
				nom: nom,
				description: description,
				date_debut: date_debut,
				date_fin: date_fin,
				lieu: lieu,
				etat: etat,
				event_image: event_image,
			},
		])
		// setEvents([...events, {id: events.length +1, title}])
	}
	const updateEvent = async (
		id,
		nom,
		description,
		date_debut,
		date_fin,
		lieu,
		etat,
		event_image
	) => {
		await updateEventFromApi(id, {
			nom,
			description,
			date_debut,
			date_fin,
			lieu,
			etat,
			event_image,
		})
		const newEvents = events.map((event) =>
			event._id === id
				? {
						id,
						nom,
						description: description,
						date_debut: date_debut,
						date_fin: date_fin,
						lieu: lieu,
						etat: etat,
						event_image: event_image,
				  }
				: event
		)
		setEvents(newEvents)
	}
	const memoizedCallback = useCallback(addEvent, [events])

	const deleteEvent = async (id) => {
		await deleteEventFromApi(id)
		const newEvents = events.filter((event) => event._id !== id)
		setEvents(newEvents)
		// setEvents([...events, events.filter((events) => events.id !== id)]);
	}

	return (
		<div className="">
			{loading && <div>loading...</div>}
			{!loading && (
				<>
					<EventForm addEvent={memoizedCallback} />
					<br /> <br></br> <br></br>
					<EventsList
						updateEvent={updateEvent}
						deleteEvent={deleteEvent}
						myEvent={events}
					/>
				</>
			)}
		</div>
	)
}
