import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchJoueurById } from "../../services/joueur.service"
import { useState } from "react"
function JoueurDetails() {
  const { id } = useParams()
  const [joueur, setJoueur] = useState({})
  console.log("joueur: ", joueur)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchJoueurById(id)
      console.log("result: ", result)
      setJoueur(result)
    }
    fetchData()
  }, [id])

  return <div>{joueur && <div>nom: {joueur.nom} </div>}</div>
}

export default JoueurDetails
