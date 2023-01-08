import Competences from "../components/competences/Competences"
import Statistiques from "../components/statistiques/Statistiques"
const joueurs = [
	{
		id: 1,
		nom: "Lajjem",
		prenom: "Siwar",
		nbrSeance: "3",
		objectif: "100m",
		alertes: "2 séances non atteint",
		taches: "course 100m",
		Competences: <Competences />,
		Statistiques: <Statistiques />,
	},
	{
		id: 2,
		nom: "Kharmachi",
		prenom: "Rihab",
		nbrSeance: "2",
		objectif: "50m",
		alertes: "1 séance non atteint",
		taches: "course 50m",
		Competences: <Competences />,
		Statistiques: <Statistiques />,
	},
	{
		id: 3,
		nom: "Hammami",
		prenom: "Aya",
		nbrSeance: "4",
		objectif: "150m",
		alertes: "3 séances non atteint",
		taches: "course 150m",
		Competences: <Competences />,
		Statistiques: <Statistiques />,
	},
]

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchJoueurById = async (joueurId) => {
	await delay(2000)
	return joueurs.find((joueur) => joueur.id == joueurId)
}
