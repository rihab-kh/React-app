import "./Joueurj.css"
import { useState } from "react"
export default function Joueurj({
	id,
	image,
	nom,
	prenom,
	datenaissance,
	email,
	sexe,
	lieunaissance,
	profession,
	etablissement,
	ville,
	tel,
	poids,
	taille,
	imc,
	preferencemanuelle,
	updateJoueurj,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [imageToUpdate, setImage] = useState(image)
	const [nomToUpdate, setnomToUpdate] = useState(nom)
	const [prenomToUpdate, setprenomToUpdate] = useState(prenom)
	const [datenaissanceToUpdate, setdatenaissanceToUpdate] =
		useState(datenaissance)
	const [emailToUpdate, setemailToUpdate] = useState(email)
	const [sexeToUpdate, setsexeToUpdate] = useState(sexe)
	const [lieunaissanceToUpdate, setlieunaissanceToUpdate] =
		useState(lieunaissance)
	const [professionToUpdate, setprofessionToUpdate] = useState(profession)
	const [etablissementToUpdate, setetablissementToUpdate] =
		useState(etablissement)
	const [villeToUpdate, setvilleToUpdate] = useState(ville)
	const [telToUpdate, settelToUpdate] = useState(tel)
	const [poidsToUpdate, setpoidsToUpdate] = useState(poids)
	const [tailleToUpdate, settailleToUpdate] = useState(taille)
	const [imcToUpdate, setimcToUpdate] = useState(imc)
	const [preferencemanuelleToUpdate, setpreferencemanuelleToUpdate] =
		useState(preferencemanuelle)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => setUpdateMode(true)}>Modifier </button>
			</div>
		)
	}
	return (
		<div className="joueurj">
			{!updateMode ? (
				<>
					<div className="">
						<img src={imageToUpdate} alt="img" width={50} height={50} /> {nom}{" "}
						{prenom} {datenaissance} {email} {sexe}
						{lieunaissance} {profession} {etablissement} {ville} {tel} {poids}{" "}
						{taille} {imc} {preferencemanuelle}{" "}
					</div>
					{}
					{renderActions()}
				</>
			) : (
				<div>
					<label>Image</label>
					<br></br>
					<input
						type="file"
						name="image"
						onChange={(event) => {
							const [file] = event.target.files
							setImage(URL.createObjectURL(file))
						}}
					/>
					<img src={imageToUpdate} alt="img" width={50} height={50} />
					<br></br>
					<label>Nom</label>
					<br></br>
					<input
						type="text"
						name="nom"
						value={nomToUpdate}
						onChange={(e) => setnomToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Prenom</label>
					<br></br>
					<input
						type="text"
						name="prenom"
						value={prenomToUpdate}
						onChange={(e) => setprenomToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Date de naissance</label>
					<br></br>
					<input
						type="Date"
						name="datenaissance"
						value={datenaissanceToUpdate}
						onChange={(e) => setdatenaissanceToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Email</label>
					<br></br>
					<input
						type="text"
						name="email"
						value={emailToUpdate}
						onChange={(e) => setemailToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Sexe</label>
					<br></br>
					<input
						type="text"
						name="sexe"
						value={sexeToUpdate}
						onChange={(e) => setsexeToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Lieu de naissance</label>
					<br></br>
					<input
						type="text"
						name="lieunaissance"
						value={lieunaissanceToUpdate}
						onChange={(e) => setlieunaissanceToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Profession</label>
					<br></br>
					<input
						type="text"
						name="profession"
						value={professionToUpdate}
						onChange={(e) => setprofessionToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Etablissement</label>
					<br></br>
					<input
						type="text"
						name="etablissement"
						value={etablissementToUpdate}
						onChange={(e) => setetablissementToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Ville</label>
					<br></br>
					<input
						type="text"
						name="ville"
						value={villeToUpdate}
						onChange={(e) => setvilleToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Téléphone</label>
					<br></br>
					<input
						type="text"
						name="tel"
						value={telToUpdate}
						onChange={(e) => settelToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Poids</label>
					<br></br>
					<input
						type="text"
						name="poids"
						value={poidsToUpdate}
						onChange={(e) => setpoidsToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Taille</label>
					<br></br>
					<input
						type="text"
						name="taille"
						value={tailleToUpdate}
						onChange={(e) => settailleToUpdate(e.target.value)}
					/>
					<br></br>
					<label>IMC</label>
					<br></br>
					<input
						type="text"
						name="imc"
						value={imcToUpdate}
						onChange={(e) => setimcToUpdate(e.target.value)}
					/>
					<br></br>
					<label>Préférence manuelle</label>
					<br></br>
					<input
						type="text"
						name="preferencemanuelle"
						value={preferencemanuelleToUpdate}
						onChange={(e) => setpreferencemanuelleToUpdate(e.target.value)}
					/>
					<br></br>
					<button
						onClick={() => {
							updateJoueurj(
								id,
								nomToUpdate,
								prenomToUpdate,
								datenaissanceToUpdate,
								emailToUpdate,
								sexeToUpdate,
								lieunaissanceToUpdate,
								professionToUpdate,
								etablissementToUpdate,
								villeToUpdate,
								telToUpdate,
								poidsToUpdate,
								tailleToUpdate,
								imcToUpdate,
								preferencemanuelleToUpdate
							)
							setUpdateMode(false)
						}}
					>
						Modifier Joueur
					</button>
				</div>
			)}
		</div>
	)
}
