import Axios from "axios"
export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
})

export const addDefi = async (defi) => {
	const result = await Axios.post(
		"http://localhost:8800/api/defis",
		defi,
		header()
	)
	return result.data
}

export const updateDefi = async (id, defi) => {
	const result = await Axios.put(
		"http://localhost:8800/api/defis/" + id,
		defi,
		header()
	)
	return result.data
}

export const deleteDefi = async (id) => {
	console.log(id)
	const result = await Axios.delete(
		"http://localhost:8800/api/defis/" + id,
		header()
	)
	return result.data
}

export const fetchDefiById = async (defiId) => {
	const result = await Axios.get(
		"http://localhost:8800/api/defis/" + defiId,
		header()
	)
	return result.data
}

export const fetchDefis = async () => {
	// await delay(500)
	const result = await Axios.get("http://localhost:8800/api/defis", header())
	return result.data
}
