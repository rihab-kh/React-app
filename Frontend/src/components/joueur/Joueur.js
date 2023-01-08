import "./Joueur.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Joueur({
		id,
		image,
		nom,
		prenom,
		DateNaiss,
		email,
		sexe,
		LieuNaiss,
		education,
		typeEtablissement,
		ville,
		telephone,
		prixSeance,
		poids,
		taille,
		IMC,
		preferenceManuelle,
	updateJoueur,
	joueur,
	afficherJoueur

}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [nomToUpdate, setnomToUpdate] = useState(nom)
	const [prenomToUpdate, setprenomToUpdate] = useState(prenom)
	const [datenaissanceToUpdate, setdatenaissanceToUpdate] =
		useState(DateNaiss)
	const [emailToUpdate, setemailToUpdate] = useState(email)
	const [sexeToUpdate, setsexeToUpdate] = useState(sexe)
	const [lieunaissanceToUpdate, setlieunaissanceToUpdate] =
		useState(LieuNaiss)
	const [professionToUpdate, setprofessionToUpdate] = useState(education)
	const [etablissementToUpdate, setetablissementToUpdate] =
		useState(typeEtablissement)
	const [villeToUpdate, setvilleToUpdate] = useState(ville)
	const [telToUpdate, settelToUpdate] = useState(telephone)
	const [prixseanceToUpdate, setprixseanceToUpdate] = useState(prixSeance)
	const [poidsToUpdate, setpoidsToUpdate] = useState(poids)
	const [tailleToUpdate, settailleToUpdate] = useState(taille)
	const [imcToUpdate, setimcToUpdate] = useState(IMC)
	const [preferencemanuelleToUpdate, setpreferencemanuelleToUpdate] =
		useState(preferenceManuelle)

		console.log(DateNaiss)
	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => setUpdateMode(true)}> Modifier </button>
				<button onClick={() => <Link to={`/detail-joueur/${joueur._id}`} />}> Afficher </button>
			</div>
		)
	}

	const [completed, setCompleted] = useState(false)
  const handleClick = () => {
    setCompleted(true)
  }
	return (
		<div className="joueur">
			{completed && <Redirect to={`/coach/joueur-page/${id}`} />}
			{!updateMode ? (
				<>
					<Link to={"/coach/joueur-page/" + id}></Link>
					<div className="">
						{nomToUpdate}
						{prenomToUpdate} {datenaissanceToUpdate} {emailToUpdate} {sexeToUpdate}
						{lieunaissanceToUpdate} {professionToUpdate} {etablissementToUpdate} {villeToUpdate} {telToUpdate}
						{prixseanceToUpdate} {poidsToUpdate} {tailleToUpdate} {imcToUpdate} {preferencemanuelleToUpdate} 
						
					</div>
					{}
					{renderActions()}
				</>
			) : (
				<div>
					<label>Image</label>
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
					<label>Prix Seance</label>
					<br></br>
					<input
						type="text"
						name="prixseance"
						value={prixseanceToUpdate}
						onChange={(e) => setprixseanceToUpdate(e.target.value)}
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
							updateJoueur(
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
								prixseanceToUpdate,
								poidsToUpdate,
								tailleToUpdate,
								imcToUpdate,
								preferencemanuelleToUpdate,
								
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
