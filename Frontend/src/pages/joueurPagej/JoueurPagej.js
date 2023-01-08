import JoueurListj from "../../components/joueurListj/JoueurListj"
import { useState } from "react"

export default function JoueurPagej() {
	const loading = false
	const [isVisible, setIsVisible] = useState(true)
	const [joueursj, setJoueursj] = useState([
		{
			id: 1,
			nom: "Ben Ali",
			prenom: "Ahmed",
			datenaissance: "03/12/1998",
			email: "ahmed@gmail.com",
			sexe: "homme",
			lieunaissance: "Tunis",
			profession: "etudiant",
			etablissement: "etatique",
			ville: "Kram",
			tel: "40152896",
			poids: "80",
			taille: "1m75",
			imc: "0.5",
			preferencemanuelle: "droitier",
		},
	])
	const updateJoueurj = (
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
		preferencemanuelle
	) => {
		const newJoueursj = joueursj.map((joueurj) =>
			joueurj.id === id
				? {
					id,
					image: image,
					nom: nom,
					prenom: prenom,
					datenaissance: datenaissance,
					email: email,
					sexe: sexe,
					lieunaissance: lieunaissance,
					profession: profession,
					etablissement: etablissement,
					ville: ville,
					tel: tel,
					poids: poids,
					taille: taille,
					imc: imc,
					preferencemanuelle: preferencemanuelle,
				  }
				: joueurj
		)
		setJoueursj(newJoueursj)
	}
	return (
		<div className="joueursj-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<JoueurListj updateJoueurj={updateJoueurj} myJoueur={joueursj} />
				</>
			)}
		</div>
	)
}
