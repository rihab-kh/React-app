import Axios from "axios"
export const header = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})

export const addUser = async (user) => {
  const result = await Axios.post("http://localhost:8800/api/signup", user)
  return result.data.model
}

export const parametrageCompte = async (id, user) => {
console.log(id)
console.log(user)
  const result = await Axios.put(
    "http://localhost:8800/api/coach/parametrageCompte/" + id,
    user, header()
  )
  return result.data
}

export const login = async (credentials) => {
  const result = await Axios.post(
    "http://localhost:8800/api/signin",
    credentials
    
  )
  console.log(result.data.token)
  return result.data.token
}
export const me = async () => {
  // await delay(500)
  const result = await Axios.get(
    "http://localhost:8800/api/me",
    header()
  )
  console.log(result.data)
  return result.data.model
}

export const logout = async () => {
  // await delay(500)
  const result = await Axios.get(
    "http://localhost:8800/api/signout",
    localStorage.removeItem("token")
  )
}
