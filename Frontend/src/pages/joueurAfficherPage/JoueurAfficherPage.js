import JoueursList from "../../components/afficherjoueurList/JoueurafficherList"

import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"

export default function JoueurPage() {
	const loading = false
	const [isVisible, setIsVisible] = useState(true)
	const [joueurs, setJoueurs] = useState([
		{
			id: "1",
			nom: "Lajjem",
			prenom: "Siwar",
			nbrSeance: "3",
			objectif: "100m",
			alertes: "2 séances non atteint",
			taches: "course 100m",
		},
		{
			id: "2",
			nom: "Kharmachi",
			prenom: "Rihab",
			nbrSeance: "2",
			objectif: "50m",
			alertes: "1 séance non atteint",
			taches: "course 50m",
		},
		{
			id: "3",
			nom: "Hammami",
			prenom: "Aya",
			nbrSeance: "4",
			objectif: "150m",
			alertes: "3 séances non atteint",
			taches: "course 150m",
		},
	])

	return (
		<div className="joueurs-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<JoueursList myJoueur={joueurs} />
				</>
			)}
			<br></br>
			<br></br>
			<br></br>
			<button type="button">
				<NavLink to="/coach/joueur-page" activeClassName="custom">
					Inviter un joueur
				</NavLink>
			</button>
		</div>
	)
}
