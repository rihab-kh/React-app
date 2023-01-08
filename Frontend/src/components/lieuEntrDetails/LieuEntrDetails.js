import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchLieuEntrById } from "../../services/lieuEntr.service"
import { useState } from "react"
function LieuEntrDetails() {
  const { id } = useParams()
  const [lieuEntr, setLieuEntr] = useState({})
  console.log("lieuEntr: ", lieuEntr)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchLieuEntrById(id)
      console.log("result: ", result)
      setLieuEntr(result)
    }
    fetchData()
  }, [id])

  return <div>{lieuEntr && <div>nom: {lieuEntr.nom} </div>}</div>
}

export default LieuEntrDetails
