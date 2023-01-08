//import Logo from "../assets/images/logo192.png"

const seances = [
	{
		id: 1,
		seance_Date: "seance1",
		nomjoueur: "farah",
		duree: "",
		lieuseance: "",
		prix: "70",
		objectif: "",
		//event_image: Logo,
	},
	{
		id: 2,
		seance_Date: "seance2",
		nomjoueur: "rihab",
		duree: "",
		lieuseance: "",
		prix: "50",
		objectif: "",
		//event_image: Logo,
	},
]

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchSeanceById = async (seanceId) => {
	await delay(2000)
	return seances.find((seance) => seance.id == seanceId)
}
