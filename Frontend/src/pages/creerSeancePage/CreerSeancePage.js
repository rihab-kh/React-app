import CreerSeanceList from "../../components/creerSeanceList/CreerSeanceList"
import { useState, useEffect } from "react"
import CreerSeanceForm from "./../../components/creerSeanceForm/CreerSeanceForm"
import { fetchSeances } from "./../../services/seancesC.service"
import { Pagination, Input } from "antd"
import "antd/dist/antd.min.css"

export default function CreerSeancePage() {
	const [loading, setLoading] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [searchValue, setSearchValue] = useState("")
	const [error, setError] = useState("")

	const [creerSeances, setCreerSeances] = useState([])
	const { Search } = Input
	const onSearch = (value) => console.log(value)

	useEffect(() => {
		let didCancel = false
		const fetchData = async () => {
			setLoading(true)
			if (!searchValue) {
				setCreerSeances([])
				setLoading(false)
			} else {
				const result = await fetchSeances(searchValue)
				console.log("result: ", didCancel)
				if (!didCancel) {
					setCreerSeances(result)
					setLoading(false)
				}
			}
		}
		fetchData()

		return () => {
			console.log("cleanup: ", searchValue)
			didCancel = true
		}
	}, [searchValue])

	function addCreerSeance(
		jour,
		horaire,
		programmeSeance,
		joueur,
		lieuEntr,
		raison,
		feedback,
		competence,
		statistique
	) {
		setCreerSeances([
			...creerSeances,
			{
				id: creerSeances.length + 1,
				jour: jour,
				horaire: horaire,
				programmeSeance: programmeSeance.value,
				joueur: joueur.value,
				lieuEntr: lieuEntr.value,
				raison: raison,
				feedback: feedback,
				competence: competence.value,
				statistique: statistique.value,
			},
		])
	}

	return (
		<div className="">
			<>
				<CreerSeanceForm addCreerSeance={addCreerSeance} />
				<br></br>
				<br></br>
				<Search
					placeholder="input search text"
					size="large"
					style={{ width: 304 }}
					onSearch={onSearch}
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<br></br>
				{loading ? (
					<div>Loading ... </div>
				) : (
					<>
						<CreerSeanceList
							addCreerSeance={addCreerSeance}
							myCreerSeance={creerSeances}
						/>
						<Pagination defaultCurrent={3} total={1} />

						{error.length !== 0 && <div>{error}</div>}
					</>
				)}
			</>
		</div>
	)
}
