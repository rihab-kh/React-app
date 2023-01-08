export default function VoirEvenement({
	id,
	nom,
	description,
	date_debut,
	date_fin,
	confidentialite,
	lieu,
	event_image,
	detailEvenement,
}) {
	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => detailEvenement(id)}>Details</button>
			</div>
		)
	}

	return (
		<div className="event">
			<>
				<div>{nom} </div>
				<div>{description}</div> <div>{date_debut} </div>
				<div>{date_fin}</div> <div>{confidentialite}</div>
				<div> {lieu}</div>
				<div>
					<img src={event_image} />
				</div>
				<div>{renderActions()}</div>
			</>
		</div>
	)
}
