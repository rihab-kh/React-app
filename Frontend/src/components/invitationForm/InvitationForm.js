import "./invitationForm.css"
import React, { useState } from "react"

export default function invitationForm(props) {
	//const addInvitation = "Inviter"
	const [photo] = useState("")
	const [nom, setnom] = useState("")
	const [prenom, setprenom] = useState("")
	const [DateNaiss, setdatenaissance] = useState("")
	const [email, setemail] = useState("")
	const [sexe] = useState("")
	const [LieuNaiss, setlieunaissance] = useState("")
	const [education] = useState("")
	const [typeEtablissement] = useState("")
	const [ville, setville] = useState("")
	const [telephone, settel] = useState("")
	const [prixSeance, setprixseance] = useState("")
	const [poids, setpoids] = useState("")
	const [taille, settaille] = useState("")
	const [IMC, setimc] = useState("")
	const [preferenceManuelle, setpreferencemanuelle] = useState("")

	function handleAddInvitation() {
		props.addInvitation(
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
			preferenceManuelle
		)
	}

	return (
		<>
			<form action="" className="form">
				<h1>
					<b>Formulaire d'invitation</b>
				</h1>
				<label className="text-muted">
					<b>Photo</b>
				</label>
				<input
					name="photo"
					type="file"
					accept="image/*"
					className="form-control"
				/>

				<br></br>
				<label>
					<b>Nom</b>
				</label>
				<br></br>
				<input
					type="text"
					name="nom"
					required={true}
					placeholder="Nom"
					value={nom}
					onChange={(e) => setnom(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Prénom</b>
				</label>
				<br></br>
				<input
					type="text"
					name="prenom"
					required={true}
					placeholder="Prénom"
					value={prenom}
					onChange={(e) => setprenom(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Email</b>
				</label>
				<br></br>
				<input
					type="text"
					name="email"
					required={true}
					placeholder="Email"
					value={email}
					onChange={(e) => setemail(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Telephone</b>
				</label>
				<br></br>
				<input
					type="text"
					name="tel"
					required={true}
					placeholder="Tel"
					value={telephone}
					onChange={(e) => settel(e.target.value)}
				/>
				<br></br>
				<br></br>
				<h2>
					<b>Vous pouvez renseigner d'autres informations</b>
				</h2>
				<br></br>
				<br></br>
				<label>
					<b>Date de naissance</b>
				</label>
				<br></br>
				<input
					type="Date"
					name="datenaissance"
					placeholder="Date de naissance"
					value={DateNaiss}
					onChange={(e) => setdatenaissance(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Sexe</b>
				</label>
				<br></br>
				<select name="sexe">
					<option value="male">Homme</option>
					<option value="female">Femme</option>
				</select>
				<br></br>
				<br></br>
				<label>
					<b>Lieu de naissance</b>
				</label>
				<br></br>
				<input
					type="text"
					name="lieunaissance"
					placeholder="Lieu de naissance"
					value={LieuNaiss}
					onChange={(e) => setlieunaissance(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Profession</b>
				</label>
				<br></br>
				<select name="profession">
					<option value="el">Eleve</option>
					<option value="et">Etudiant</option>
				</select>
				<br></br>
				<br></br>
				<label>
					<b>Etablissement</b>
				</label>
				<br></br>
				<select name="etablissement">
					<option value="et">Etatique</option>
					<option value="pr">Privé</option>
					<option value="ms">Mission</option>
				</select>
				<br></br>
				<br></br>
				<label>
					<b>Ville</b>
				</label>
				<br></br>
				<input
					type="text"
					name="ville"
					placeholder="Ville"
					value={ville}
					onChange={(e) => setville(e.target.value)}
				/>
				<br></br>
				<br></br>

				<label>
					<b>Prix de la séance</b>
				</label>
				<br></br>
				<input
					type="text"
					name="prixseance"
					placeholder="Prix"
					value={prixSeance}
					onChange={(e) => setprixseance(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Poids</b>
				</label>
				<br></br>
				<input
					type="text"
					name="poids"
					placeholder="Poids"
					value={poids}
					onChange={(e) => setpoids(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Taille</b>
				</label>
				<br></br>
				<input
					type="text"
					name="taille"
					placeholder="Taille"
					value={taille}
					onChange={(e) => settaille(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>IMC</b>
				</label>
				<br></br>
				<input
					type="text"
					name="imc"
					placeholder="IMC"
					value={IMC}
					onChange={(e) => setimc(e.target.value)}
				/>
				<br></br>
				<br></br>
				<label>
					<b>Préférence manuelle</b>
				</label>
				<br></br>
				<input
					type="text"
					name="preferencemanuelle"
					placeholder="Préférence manuelle"
					value={preferenceManuelle}
					onChange={(e) => setpreferencemanuelle(e.target.value)}
				/>
				<br></br>
				<br></br>
				<button type="button" onClick={handleAddInvitation}>
					Inviter
				</button>
				<button type="button">Annuler</button>
			</form>
		</>
	)
}
