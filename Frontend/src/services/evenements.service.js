import Axios from "axios"
export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
})

export const addEvent = async (event) => {
	const result = await Axios.post(
		"http://localhost:8800/api/event",
		event,
		header()
	)
	console.log(result.data)
	return result.data
}

export const updateEvent = async (id, event) => {
	const result = await Axios.put(
		"http://localhost:8800/api/event/" + id,
		event,
		header()
	)
	return result.data
}

export const deleteEvent = async (id) => {
	console.log(id)
	const result = await Axios.delete(
		"http://localhost:8800/api/event/" + id,
		header()
	)
	return result.data
}

export const fetchEventById = async (eventId) => {
	const result = await Axios.get(
		"http://localhost:8800/api/event/" + eventId,
		header()
	)
	return result.data
}

export const fetchEvents = async () => {
	// await delay(500)
	const result = await Axios.get("http://localhost:8800/api/event", header())
	console.log(result.data)
	return result.data
}

// function delay(ms) {
// 	return new Promise((resolve) => setTimeout(resolve, ms))
// }

// export const fetchEventById = async (eventId) => {
// 	await delay(2000)
// 	return events.find((event) => event.id == eventId)
// }
