import Axios from "axios"
export const header = () => ({
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
})

export const addComp = async (comp) => {
  const result = await Axios.post("http://localhost:8800/api/comps", comp,header())
  return result.data
}

export const updateComp = async (id, comp) => {
  const result = await Axios.put(
    "http://localhost:8800/api/comps/" + id,
    comp,header()
  )
  console.log(result.data)
  return result.data
}

export const deleteComp = async (id) => {
  const result = await Axios.delete("http://localhost:8800/api/comps/" + id,header())
  return result.data
}
export const fetchCompById = async (compId) => {
  const result = await Axios.get("http://localhost:8800/api/comps/" + compId,header())
  return result.data
}

export const fetchComps = async () => {
  // await delay(500)
  const result = await Axios.get("http://localhost:8800/api/comps",header())
  return result.data
}