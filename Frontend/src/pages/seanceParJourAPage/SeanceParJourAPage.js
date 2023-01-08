// import SeanceParJourList from "../../components/seanceParJourListA/SeanceParJourListA"
// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import { fetchSeanceByDate } from "../../services/seancesC.service"

// export default function CreerSeancePage() {
// 	const [loading, setLoading] = useState(false)

// 	const [seanceParJour, setSeanceParJour] = useState([])

// 	const { seanceDate } = useParams()

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			setLoading(true)
// 			const result = await fetchSeanceByDate(seanceDate)
// 			console.log(result)
// 			setSeanceParJour(result)

// 			setLoading(false)
// 		}
// 		fetchData()
// 	}, [seanceDate])
// 	console.log(seanceParJour)

// 	return (
// 		<div className="">
// 			{loading ? (
// 				<div>Loading ... </div>
// 			) : (
// 				<>
// 					<SeanceParJourList seanceParJour={seanceParJour} />
// 				</>
// 			)}
// 		</div>
// 	)
// }
