import { useState, useRef } from "react"
import "./EventForm.css"
import Select from "react-select"

export default function EventForm(props) {
	const [nom, setNom] = useState("")
	const [description, setDescription] = useState("")
	const [date_debut, setDateDebut] = useState("")
	const [date_fin, setDateFin] = useState("")
	const [lieu, setLieu] = useState("")
	const [etat, setEtat] = useState()
	const [event_image, setEventImage] = useState("")

	function handleAddEvent() {
		props.addEvent(
			nom,
			description,
			date_debut,
			date_fin,
			lieu,
			etat,
			event_image
		)
	}

	return (
		<div>
			<form action="" className="form">
				<div>
					<label>nom </label>
					<input
						type="text"
						name="nom"
						id="nom"
						value={nom}
						onChange={(e) => setNom(e.target.value)}
					/>
				</div>
				<br></br>
				<div>
					<label>Desription </label>
					<input
						type="text"
						name="Desription"
						id="Desription"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<br></br>
				<div>
					<label>Date de début </label>
					<input
						type="date"
						name="date_debut"
						id="date_debut"
						value={date_debut}
						onChange={(e) => setDateDebut(e.target.value)}
					/>
				</div>
				<br></br>
				<div>
					<label>Date de fin </label>
					<input
						type="date"
						name="date_fin"
						id="date_fin"
						value={date_fin}
						onChange={(e) => setDateFin(e.target.value)}
					/>
				</div>
				<br></br>
				<div>
					<label>Lieu </label>
					<input
						type="text"
						name="Lieu"
						id="Lieu"
						value={lieu}
						onChange={(e) => setLieu(e.target.value)}
					/>
				</div>
				<br></br>
				<div>
					<label>Etat </label>
					<input
						type="text"
						name="etat"
						value={etat}
						onChange={(e) => setEtat(e.target.value)}
					/>
				</div>
				<br></br>
				<div>
					<input
						type="file"
						name="eventImage"
						onChange={(event) => {
							var reader = new FileReader()
							const [file] = event.target.files
							//	setEventImage(URL.createObjectURL(file))
							reader.readAsDataURL(file)

							reader.onloadend = function () {
								var base64data = reader.result
								setEventImage(base64data)
							}
						}}
					/>
					<img src={event_image} alt="img" width={50} height={50} />
				</div>
				<br />
				<br />
				<button type="button" onClick={handleAddEvent}>
					Ajouter un événement
				</button>
			</form>
		</div>
	)
}
