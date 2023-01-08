import Event from "../../components/event/Event"
function EventList(props) {
	return (
		<div>
			{props.myEvent.map(function (x) {
				return (
					<Event
						key={x._id}
						id={x._id}
						nom={x.nom}
						description={x.description}
						date_debut={x.date_debut}
						date_fin={x.date_fin}
						lieu={x.lieu}
						etat={x.etat}
						event_image={x.event_image}
						updateEvent={props.updateEvent}
						deleteEvent={props.deleteEvent}
					/>
				)
			})}
		</div>
	)
}

export default EventList
