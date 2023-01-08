import React from "react"
import InscriptionForm from "../../components/InscriptionForm/InscriptionForm"

export default function InscriptionPage() {
	return (
		<div>
			<>
				<br />
				<h1>Inscription</h1>
				<h3>
					Le lien de cette page est envoyée au joueur par mail après son ajout
					par le coach
				</h3>
				<h3>Veuillez saisir votre Nom, Prenom, Email et votre mot de passe</h3>
				<br />
				<InscriptionForm />
			</>
		</div>
	)
}
