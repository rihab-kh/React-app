import LieuxEntrList from "../../components/lieuEntrList/LieuEntrList"
import LieuEntrForm from "../../components/lieuEntrForm/LieuEntrForm"
import * as api from "./../../services/lieuEntr.service"
import { useState, useEffect } from "react"
export default function LieuEntrPage() {
	
	const [isVisible, setIsVisible] = useState(true)
	const [lieuxEntr, setLieuxEntr] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
		setLoading(true)
		// setError(false)
		try {
			const result = await api.fetchLieuxEntr()
			setLieuxEntr(result)
			setLoading(false)
		} catch (e) {
			setLoading(false)
			setError(true)
		}
		}

		fetchData()
	}, [])

	const addLieuEntr = async(nom, ville, pays, adresse) => {
		await api.addLieuEntr({
			nom,
			ville,
			pays,
			adresse,
		})
		setLieuxEntr([
			...lieuxEntr,
			{ _id: lieuxEntr.length + 1, nom: nom, ville: ville, pays: pays, adresse: adresse },
		])
			}


	const updateLieuEntr = async (id, nom, ville, pays, adresse) => {
		try {
			setLoading(true)
			const newLieuEntr = await api.updateLieuEntr(id, {
				nom, ville, pays, adresse
			})
			const newLieuxEntr = lieuxEntr.map((lieuEntr) => (lieuEntr._id === id ? newLieuEntr : lieuEntr))
			setLieuxEntr(newLieuxEntr)
			setLoading(false)
		  } catch (e) {
			console.log("error")
		  }
		}


	const deleteLieuEntr =  async (id) => {
		try {
			setLoading(true)
			await api.deleteLieuEntr(id)
			const newLieuxEntr = lieuxEntr.filter((lieuEntr) => lieuEntr._id !== id)
			setLieuxEntr(newLieuxEntr)
			setLoading(false)
		  } catch (e) {
			console.log("error")
		  }
		}

	return (
		<>
		
		<h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>Lieux d'entrainement</h1>
		<div className="lieuxEntr-list">

					<LieuEntrForm addLieuEntr={addLieuEntr} />
					
					{loading && <div>Loading ... </div>}
					{!loading && isVisible && (
					<>
						
						<LieuxEntrList
							myLieuxEntr={lieuxEntr}
							updateLieuEntr={updateLieuEntr}
							deleteLieuEntr={deleteLieuEntr}
							
						/>
				</>
			)}
		</div>
		</>
	)
}
