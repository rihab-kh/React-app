import Axios from "axios"
export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
})
export const addProgramme_seances = async (programme_seances) => {
	const result = await Axios.post(
		"http://localhost:8800/api/programme_seances",
		programme_seances,
		header()
	)
	return result.data
}

export const updateProgramme_seances = async (id, programme_seances) => {
	const result = await Axios.put(
		"http://localhost:8800/api/programme_seances/" + id,
		programme_seances,
		header()
	)
	return result.data
}

export const deleteProgramme_seances = async (id) => {
	const result = await Axios.delete(
		"http://localhost:8800/api/programme_seances/" + id,
		header()
	)
	return result.data
}

export const fetchProgramme_seancesById = async (id) => {
	const result = await Axios.get(
		"http://localhost:8800/api/programme_seances/" + id,
		header()
	)
	return result.data
}

export const fetchProgramme_seances = async () => {
	// await delay(500)
	const result = await Axios.get(
		"http://localhost:8800/api/programme_seances",
		header()
	)
	return result.data
}
