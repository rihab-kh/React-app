import SeanceParJourList from "../../components/SeanceParJourList/SeanceParJourList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import moment from "moment"
import { fetchSeance } from "../../services/seance.service"

export default function SeanceParJourPage() {
	const [loading, setLoading] = useState(false)

	const [seanceParJour, setSeanceParJour] = useState([])

	const { seanceDate } = useParams()

	// const fetchSeanceByDate = async (seanceDate) => {
	// 	seanceDate = moment(new Date()).format("YYYY-MM-DD")
	// 	console.log(seanceDate)
	// 	return seanceParJour.filter(
	// 		(seance) => moment(seance.jour).format("YYYY-MM-DD") === seanceDate
	// 	)
	// }
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setLoading(true)
	// 		try {
	// 			const result = await fetchSeance()
	// 			setSeanceParJour(result)
	// 			setLoading(false)
	// 		} catch (e) {
	// 			setLoading(false)
	// 		}
	// 	}
	// 	fetchData()
	// }, [])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await fetchSeance()
				const seanceDate = moment(new Date()).format("YYYY-MM-DD")
				const result2 = result.filter(
					(seance) => moment(seance.jour).format("YYYY-MM-DD") === seanceDate
				)
				setSeanceParJour(result2)
				setLoading(false)
			} catch (e) {
				setLoading(false)
			}
		}
		fetchData()
	}, [])
	console.log(seanceParJour)

	return (
		<div className="">
			{loading ? (
				<div>Loading ... </div>
			) : (
				<>
					<SeanceParJourList seanceParJour={seanceParJour} />
				</>
			)}
		</div>
	)
}
