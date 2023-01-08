import "./Defi.css"
import { useState } from "react"
export default function Defi({
	id,
	objectif,
	lienVideo,
	updateDefi,
	deleteDefi,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [objectifToUpdate, setObjectifToUpdate] = useState(objectif)
	const [lienVideoToUpdate, setLienVideoToUpdate] = useState(lienVideo)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => deleteDefi(id)}>Supprimer</button>
				<button onClick={() => setUpdateMode(true)}>Modifier</button>
			</div>
		)
	}
	return (
		<div className="defi">
			{!updateMode ? (
				<>
					<div>{objectif}</div>
					<div>{lienVideo}</div>
					<div>
						{}
						{renderActions()}
					</div>
				</>
			) : (
				<div className="form">
					<label>Objectif</label>
					<input
						type="text"
						name="objectif"
						value={objectifToUpdate}
						onChange={(e) => setObjectifToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Vidéo</label>
					<input
						type="text"
						name="lienvideo"
						value={lienVideoToUpdate}
						onChange={(e) => setLienVideoToUpdate(e.target.value)}
					/>
					<br></br> <br></br>
					<button
						onClick={() => {
							updateDefi(id, objectifToUpdate, lienVideoToUpdate)
							setUpdateMode(false)
						}}
					>
						Modifier un défi
					</button>
				</div>
			)}
		</div>
	)
}
