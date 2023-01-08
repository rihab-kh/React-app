import Axios from "axios"
export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
})
export const addLieuEntr = async (lieuEntr) => {
  const result = await Axios.post("http://localhost:8800/api/lieuxEntr", lieuEntr, header() )
  return result.data
}

export const updateLieuEntr = async (id, lieuEntr) => {
  const result = await Axios.put(
    "http://localhost:8800/api/lieuxEntr/" + id,
    lieuEntr, header()
  )
  return result.data
}

export const deleteLieuEntr = async (id) => {
  const result = await Axios.delete("http://localhost:8800/api/lieuxEntr/" + id, header())
  return result.data
}

export const fetchLieuEntrById = async (lieuEntrId) => {
  const result = await Axios.get("http://localhost:8800/api/lieuxEntr/" + lieuEntrId, header())
  return result.data
}

export const fetchLieuxEntr = async () => {
  // await delay(500)
  const result = await Axios.get("http://localhost:8800/api/lieuxEntr", header())
  return result.data
}


