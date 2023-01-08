import Axios from "axios"
import moment from "moment"

export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
})

export const addSeance = async (seance) => {
	const result = await Axios.post(
		"http://localhost:8800/api/creerseance",
		seance,
		header()
	)
	console.log(result.data)
	return result.data
}

export const updateSeance = async (id, seance) => {
	const result = await Axios.put(
		"http://localhost:8800/api/seance/" + id,
		seance,
		header()
	)
	return result.data
}

export const deleteSeance = async (id) => {
	console.log(id)
	const result = await Axios.delete(
		"http://localhost:8800/api/seance/" + id,
		header()
	)
	return result.data
}

export const fetchSeanceById = async (seanceId) => {
	const result = await Axios.get(
		"http://localhost:8800/api/seance/" + seanceId,
		header()
	)
	return result.data
}

export const fetchSeance = async () => {
	// await delay(500)
	const result = await Axios.get("http://localhost:8800/api/seances", header())
	console.log(result.data)
	return result.data
}

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchSeanceByDate = async (seanceDate) => {
	seanceDate = moment(new Date()).format("YYYY-MM-DD")
	console.log(seanceDate)
	await delay(2000)
	const result = await Axios.get("http://localhost:8800/api/seances", header())
	console.log(result.data)
	return result.filter(
		(seance) => moment(seance.jour).format("YYYY-MM-DD") === seanceDate
	)
}
export const fetchSeancesFiltre = async (searchValue) => {
	await delay(2000)
	return fetchSeance.filter(
		(seance) =>
			seance.joueur.nom.includes(searchValue) ||
			seance.lieu.nom.includes(searchValue) ||
			seance.jour.includes(searchValue)
	)
}
