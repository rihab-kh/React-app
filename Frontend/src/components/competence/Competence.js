import "./Competence.css"
import { useState } from "react"
import { FaStar } from "react-icons/fa"

import { Form, Input, Button } from "antd"
export default function Competence({
	id,
	nom,
	desccomp,
	visibility,
	liencomp,
	rating,
	updateCompetence,
	deleteCompetence,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [nomToUpdate, setnomToUpdate] = useState(nom)
	const [desccompToUpdate, setdesccompToUpdate] = useState(desccomp)
	const [visibilityToUpdate, setvisibilityToUpdate] = useState(visibility)
	const [liencompToUpdate, setliencompToUpdate] = useState(liencomp)
	const [ratingToUpdateMode, setRatingToUpdateMode] = useState(rating)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => deleteCompetence(id)}>Supprimer</button>
				<button onClick={() => setUpdateMode(true)}>Modifier</button>
			</div>
		)
	}
	return (
		<div className="competence">
			{!updateMode ? (
				<>
					<div className="">
						{nom} {desccomp} {visibility} {liencomp} {rating}
					</div>
					{}
					{renderActions()}
				</>
			) : (
				<div>
					<input
						type="text"
						name="nom"
						value={nomToUpdate}
						onChange={(e) => setnomToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="desccomp"
						value={desccompToUpdate}
						onChange={(e) => setdesccompToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="visibility"
						value={String(visibilityToUpdate)}
						onChange={(e) => setvisibilityToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="liencomo"
						value={liencompToUpdate}
						onChange={(e) => setliencompToUpdate(e.target.value)}
					/>
					<div>
						{[...Array(5)].map((star, i) => {
							const ratingValue = i + 1
							return (
								<label>
									<input
										type="radio"
										name="radio"
										class="radio"
										value={ratingToUpdateMode}
										onClick={() => setRatingToUpdateMode(ratingValue)}
									/>
									<FaStar
										className="star"
										color={
											ratingValue <= ratingToUpdateMode ? "#ffc107" : "#e4e5e9"
										}
										size={20}
									/>
								</label>
							)
						})}
					</div>
					<button
						onClick={() => {
							updateCompetence(
								id,
								nomToUpdate,
								desccompToUpdate,
								visibilityToUpdate,
								liencompToUpdate,
								ratingToUpdateMode
							)
							setUpdateMode(false)
						}}
					>
						Modifier Competence
					</button>
				</div>
			)}
		</div>
	)
}
