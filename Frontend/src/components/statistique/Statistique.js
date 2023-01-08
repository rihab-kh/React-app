import "./Statistique.css"
import { useState } from "react"
export default function Statistique({
	id,
	typeStat,
	unitemesure,
	minmax,
	titre,
	description,
	lien,
	visible,
	deleteStatistique,
	updateStatistique,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [typeStatToUpdate, settypeStatToUpdate] = useState(typeStat)
	const [unitemesureToUpdate, setunitemesureToUpdate] = useState(unitemesure)
	const [minmaxToUpdate, setminmaxToUpdate] = useState(minmax)
	const [titreToUpdate, settitreToUpdate] = useState(titre)
	const [descriptionToUpdate, setdescriptionToUpdate] = useState(description)
	const [visibleToUpdate, setvisibleToUpdate] = useState(visible)
	const [lienToUpdate, setlienToUpdate] = useState(lien)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => deleteStatistique(id)}>Supprimer</button>
				<button onClick={() => setUpdateMode(true)}>Modifier</button>
			</div>
		)
	}
	return (
		<div className="statistique">
			{!updateMode ? (
				<>
					<div className="">
						{typeStat} {unitemesure} {minmax} {titre} {description} {visible}
						{lien}
					</div>
					{}
					{renderActions()}
				</>
			) : (
				<div>
					<input
						type="text"
						name="typeStat"
						value={typeStatToUpdate}
						onChange={(e) => settypeStatToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="unitemesure"
						value={unitemesureToUpdate}
						onChange={(e) => setunitemesureToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="minmax"
						value={minmaxToUpdate}
						onChange={(e) => setminmaxToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="titre"
						value={titreToUpdate}
						onChange={(e) => settitreToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="description"
						value={descriptionToUpdate}
						onChange={(e) => setdescriptionToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="visible"
						value={visibleToUpdate}
						onChange={(e) => setvisibleToUpdate(e.target.value)}
					/>
					<input
						type="text"
						name="lien"
						value={lienToUpdate}
						onChange={(e) => setlienToUpdate(e.target.value)}
					/>
					<button
						onClick={() => {
							updateStatistique(
								id,
								typeStatToUpdate,
								unitemesureToUpdate,
								minmaxToUpdate,
								titreToUpdate,
								descriptionToUpdate,
								visibleToUpdate,
								lienToUpdate
							)
							setUpdateMode(false)
						}}
					>
						Modifier Statistique
					</button>
				</div>
			)}
		</div>
	)
}
