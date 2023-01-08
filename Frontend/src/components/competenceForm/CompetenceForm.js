import "./CompetenceForm.css"
import { useState } from "react"
import "antd/dist/antd.css"
import { FaStar } from "react-icons/fa"
import { Form, Input, Button, Rate, Switch } from "antd"

export default function CompetenceForm(props) {
	const addCompetence = "Ajouter une compétence"
	const [nom, setnom] = useState("")
	const [desccomp, setdesccomp] = useState("")
	const [visibility, setvisibility] = useState("")
	const [Urlvideo, setUrlvideo] = useState("")
	const [rating, setRating] = useState(null)

	function handleAddCompetence() {
		props.addCompetence(nom, desccomp, visibility, Urlvideo, rating)
	}

	return (
		<>
			<form action="" className="form">
				<label>
					<b>Nom compétence</b>
				</label>
				<br></br>
				<input
					type="text"
					name="nom"
					placeholder="Nom de la compétence"
					value={nom}
					onChange={(e) => setnom(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Description</b>
				</label>
				<br></br>
				<input
					type="text"
					name="desccomp"
					placeholder="Description de la compétence"
					value={desccomp}
					onChange={(e) => setdesccomp(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Visibilité</b>
				</label>
				<br></br>
				<input
					type="text"
					name="visibility"
					placeholder="Visibilité de la compétence"
					value={String(visibility)}
					onChange={(e) => setvisibility(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Lien</b>
				</label>
				<br></br>
				<input
					type="text"
					name="Urlvideo"
					placeholder="Lien Vidéo"
					value={Urlvideo}
					onChange={(e) => setUrlvideo(e.target.value)}
				/>
				<br></br>
				<br></br>
				<button type="button" onClick={handleAddCompetence}>
					{addCompetence}
				</button>
			</form>
			<div>
				{[...Array(5)].map((star, i) => {
					const ratingValue = i + 1
					return (
						<label>
							<input
								type="radio"
								name="radio"
								class="radio"
								value={ratingValue}
								onClick={() => setRating(ratingValue)}
							/>
							<FaStar
								className="star"
								color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
								size={20}
							/>
						</label>
					)
				})}
			</div>
		</>
	)
}
