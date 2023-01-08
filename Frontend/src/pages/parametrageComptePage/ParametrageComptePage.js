
import ParametrageCompteForm from "../../components/parametrageCompteForme/ParametrageCompteForme"
import * as api from "./../../services/login.service"
import { useState, useEffect } from "react"
import profilePhoto from "../../images/profilePhoto.jpg"
export default function ParametrageComptePage() {
	
	const [isVisible, setIsVisible] = useState(true)
	const [coach, setCoach] = useState({})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
		setLoading(true)
		// setError(false)
		try {
			const result = await api.me()
			setCoach(result)
			setLoading(false)
		} catch (e) {
			setLoading(false)
			setError(true)
		}
		}

		fetchData()
	}, [])


	return (
		<>
		<div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>

		<div>
			<>
			<img src={profilePhoto} alt="profilePhoto" />
				
			<h1 style={{ color: "red" }}>{coach.prenom} {coach.nom}</h1>		
			<h3>{coach.email}</h3>
			<br />
			<div>
			<ParametrageCompteForm coachId={coach._id} />
			</div>		
			</>
		</div>	
		</div>
		</>
	)
}