import moment from "moment"
const seances = [
	{
		id: 1,
		jour: "16/04/2022",
		horaire: "23:11:11",
		programmeSeance: "seance1",
		joueur: "joueur1",
		lieuEntr: "tunis",
		raison: "raison",
		feedback: "feedback",
		competence: "comp1",
		statistique: "stat1",
	},
	{
		id: 2,
		jour: "15/04/2022",
		horaire: "23:11:11",
		programmeSeance: "seance2",
		joueur: "joueur2",
		lieuEntr: "ariana",
		raison: "raison",
		feedback: "feedback",
		competence: "comp1",
		statistique: "stat1",
	},
	{
		id: 3,
		jour: "10/04/2022",
		horaire: "23:11",
		programmeSeance: "seance3",
		joueur: "joueur3",
		lieuEntr: "tunis",
		raison: "raison",
		feedback: "feedback",
		competence: "comp3",
		statistique: "stat3",
	},
	{
		id: 4,
		jour: "03/04/2022",
		horaire: "23:11",
		programmeSeance: "seance4",
		joueur: "joueur4",
		lieuEntr: "tunis",
		raison: "raison",
		feedback: "feedback",
		competence: "comp4",
		statistique: "stat4",
	},
]

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchSeances = async (searchValue) => {
	await delay(2000)
	return seances.filter(
		(seance) =>
			seance.joueur.includes(searchValue) ||
			seance.lieuEntr.includes(searchValue) ||
			seance.jour.includes(searchValue)
	)
}
export const fetchSeanceByDate = async (seanceDate) => {
	seanceDate = moment(new Date()).format("DD/MM/YYYY")
	console.log(seanceDate)
	await delay(2000)
	return seances.filter((seance) => seance.jour === seanceDate)
}
