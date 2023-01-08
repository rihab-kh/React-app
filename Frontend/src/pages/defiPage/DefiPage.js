import DefisList from "../../components/defiList/DefiList"
import DefiForm from "../../components/defiForm/DefiForm"
import {
	fetchDefis,
	addDefi as addDefiFromApi,
	updateDefi as updateDefiFromApi,
	deleteDefi as deleteDefiFromApi,
} from "./../../services/defi.service"
import { useState, useCallback, useEffect } from "react"

export default function DefiPage() {
	const [loading, setLoading] = useState(false)
	const [defis, setDefis] = useState([])
	const [error, setError] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const result = await fetchDefis()
				setDefis(result)
				setLoading(false)
			} catch (e) {
				setLoading(false)
				setError("An error occurred when we tried to fetch tasks")
			}
		}
		fetchData()
	}, [])

	const addDefi = async (objectif, lienVideo) => {
		await addDefiFromApi({
			objectif,
			lienVideo,
		})
		setDefis([
			...defis,
			{ _id: defis.length + 1, objectif: objectif, lienVideo: lienVideo },
		])
		//setDefis((previousDefis) => [...previousDefis, { ...newDefi }])
		// setDefis([...defis, {id: defis.length +1, title}])
	}

	const updateDefi = async (id, objectif, lienVideo) => {
		await updateDefiFromApi(id, {
			objectif,
			lienVideo,
		})
		const newDefis = defis.map((defi) =>
			defi._id === id ? { id, objectif: objectif, lienVideo } : defi
		)
		setDefis(newDefis)
	}

	const deleteDefi = async (id) => {
		await deleteDefiFromApi(id)
		const newDefis = defis.filter((defi) => defi._id !== id)
		console.log(newDefis)
		setDefis(newDefis)
		// setDefis([...defis, defis.filter((defis) => defis.id !== id)]);
	}

	const memoizedCallback = useCallback(addDefi, [defis])
	return (
		<div className="defis-list">
			{loading && <div>loading...</div>}
			{!loading && (
				<>
					<DefiForm addDefi={memoizedCallback} />
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<DefisList
						updateDefi={updateDefi}
						deleteDefi={deleteDefi}
						myDefi={defis}
					/>
				</>
			)}
		</div>
	)
}
