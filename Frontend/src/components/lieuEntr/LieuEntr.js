import "./LieuEntr.css"
import { useState } from "react";
export default function LieuEntr({
	id,
	nom,
	ville,
	pays,
	adresse,
	updateLieuEntr,
	deleteLieuEntr,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [nomToUpdate, setNomToUpdate] = useState(nom)
	const [villeToUpdate, setVilleToUpdate] = useState(ville)
	const [paysToUpdate, setPaysToUpdate] = useState(pays)
	const [adresseToUpdate, setAdresseToUpdate] = useState(adresse)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => deleteLieuEntr(id)}>supprimer</button>
				<button onClick={() => setUpdateMode(true)}>Modifier</button>
			</div>
		)
	}

	return (
		<div className="lieuEntr">
			
			{!updateMode ? (
				<>
						<div>{nom}</div>
						<div>{ville}</div>
						<div>{pays}</div>
						<div>{adresse}</div>
						<div>
						{}
						{renderActions()}
						</div> 
		
				
				</>
			) : (
				<div className="form">
					<label>Nom</label>
					<input
						type="text"
						name="nom"
						value={nomToUpdate}
						onChange={(e) => setNomToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Ville</label>
					<input
						type="text"
						name="ville"
						value={villeToUpdate}
						onChange={(e) => setVilleToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Pays</label>
					<input
						type="text"
						name="pays"
						value={paysToUpdate}
						onChange={(e) => setPaysToUpdate(e.target.value)}
					/>
					<br></br>
					<br></br>
					<label>Adresse</label>
					<input
						type="text"
						name="adresse"
						value={adresseToUpdate}
						onChange={(e) => setAdresseToUpdate(e.target.value)}
					/>
					<br></br> <br></br>
					<button
						onClick={() => {
							updateLieuEntr(
								id,
								nomToUpdate,
								villeToUpdate,
								paysToUpdate,
								adresseToUpdate
							)
							setUpdateMode(false)
						}}
					>
						Modifier LieuEntr
					</button>
				</div>
			)}
		</div>
	)
}
