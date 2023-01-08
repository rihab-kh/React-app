import InscriptionForm from "../../components/inscriptionCoachForm/InscriptionCoachForm"
import { useState, useEffect } from "react"
import * as api from "../../services/login.service"

export default function UserPage() {
	
	const [isVisible, setIsVisible] = useState(true)
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])
	

	const addUser = async (nom, prenom, DateNaiss, email, password) => {
		try {
		  setLoading(true)
		  const newUser = await api.addUser({
			nom, prenom, DateNaiss, email, password
		  })
		  setUsers([...users, newUser])
		  setLoading(false)
		} catch (e) {
		  console.log("error")
		}
	  }
	

	return (
		<div>
			<h1>Inscription</h1>
			<InscriptionForm addUser={addUser} />
			
		</div>
	)
}
