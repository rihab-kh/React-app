import Axios from "axios"
export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
})

export const addStat = async (stat) => {
  const result = await Axios.post("http://localhost:8800/api/stats", stat,header())
  return result.data
}

export const updateStat = async (id, stat) => {
  const result = await Axios.put(
    "http://localhost:8800/api/stats/" + id,
    stat,header()
  )
  console.log(result.data)
  return result.data
}

export const deleteStat = async (id) => {
  const result = await Axios.delete("http://localhost:8800/api/stats/" + id,header())
  return result.data
}
export const fetchStatById = async (statId) => {
  const result = await Axios.get("http://localhost:8800/api/stats/" + statId,header())
  return result.data
}

export const fetchStats = async () => {
  // await delay(500)
  const result = await Axios.get("http://localhost:8800/api/stats",header())
  return result.data
}