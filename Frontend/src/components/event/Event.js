import { useState } from "react"
import "./Event.css"
import moment from "moment"
export default function Event({
	id,
	nom,
	description,
	date_debut,
	date_fin,
	etat,
	lieu,
	event_image,
	updateEvent,
	deleteEvent,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [NomToUpdate, setNomToUpdate] = useState(nom)
	const [DescrToUpdate, setDescrToUpdate] = useState(description)
	const [DateDToUpdate, setDateDToUpdate] = useState(date_debut)
	const [DateFToUpdate, setDateFToUpdate] = useState(date_fin)
	const [etatToUpdate, setEtatToUpdate] = useState(etat)
	const [LieuToUpdate, setLieuToUpdate] = useState(lieu)
	const [ImageToUpdate, setImageToUpdate] = useState(event_image)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => setUpdateMode(true)}>Modifier</button>
				<button onClick={() => deleteEvent(id)}>Supprimer</button>
			</div>
		)
	}
	return (
		<div className="event">
			{!updateMode ? (
				<>
					<div>{nom}</div>
					<div> {description} </div>
					<div>{moment(date_debut).format("YYYY-MM-DD")}</div>
					<div> {moment(date_fin).format("YYYY-MM-DD")}</div>
					<div> {lieu}</div>
					<div>Public: {etat ? "true" : "false"}</div>
					<div>
						<img src={event_image} width={200} height={200} />
					</div>
					{}
					{renderActions()}
				</>
			) : (
				// 	<>
				// 	<Row>
				// 		<Col span={18}>
				// 			<Typography>Nom: {nom}</Typography>
				// 			<Typography> Description: {description}</Typography>
				// 			<Typography>Lieu: {lieu}</Typography>
				// 			<Typography>Date: {date_debut}</Typography>
				// 			<Typography>createdBy: {date_fin}</Typography>
				// 			<Typography>Public: {etat}</Typography>
				// 		</Col>
				// 	</Row>
				// </>
				<div className="form">
					<label>Nom de l'événement</label>
					<input
						type="text"
						name="nom"
						value={NomToUpdate}
						onChange={(e) => setNomToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Description</label>
					<input
						type="text"
						name="description"
						value={DescrToUpdate}
						onChange={(e) => setDescrToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Date de début</label>
					<input
						type="date"
						name="dateD"
						value={DateDToUpdate}
						onChange={(e) => setDateDToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Date de fin</label>
					<input
						type="date"
						name="dateF"
						value={DateFToUpdate}
						onChange={(e) => setDateFToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Lieu</label>
					<input
						type="text"
						name="lieu"
						value={LieuToUpdate}
						onChange={(e) => setLieuToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Etat</label>
					<input
						type="text"
						name="etat"
						value={etatToUpdate}
						onChange={(e) => setEtatToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<input
						type="file"
						// value={ImageToUpdate}
						name="image"
						onChange={(event) => {
							var reader = new FileReader()
							const [file] = event.target.files
							reader.readAsDataURL(file)
							reader.onloadend = function () {
								var base64data = reader.result

								setImageToUpdate(base64data)
							}
						}}
					/>

					<img src={event_image} alt="img" width={200} height={200} />
					<button
						onClick={() => {
							updateEvent(
								id,
								NomToUpdate,
								DescrToUpdate,
								DateDToUpdate,
								DateFToUpdate,
								LieuToUpdate,
								etatToUpdate,
								ImageToUpdate
							)
							setUpdateMode(false)
						}}
					>
						Modifier un événement
					</button>
				</div>
			)}
		</div>
	)
}
