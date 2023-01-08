import SeanceList from "../../components/SeanceList/SeanceList"
import SeanceForm from "./../../components/SeanceForm/SeanceForm"
import { useState, useEffect, useCallback } from "react"
import { Pagination, Input } from "antd"
import {
	fetchSeance,
	addSeance as addSeanceFromApi,
	updateSeance as updateSeanceFromApi,
	deleteEvent as deleteSeanceFromApi,
	fetchSeanceById,
	fetchSeancesFiltre,
} from "../../services/seance.service"
import "antd/dist/antd.min.css"

export default function SeancePage() {
	const [loading, setLoading] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [searchValue, setSearchValue] = useState("")
	const [error, setError] = useState("")
	const { Search } = Input
	const onSearch = (value) => console.log(value)

	const [Seances, setSeances] = useState([])
	const [seancesParPage, setSeancesParPage] = useState(2)
	const [currentPage, setCurrentPage] = useState(1)

	const index = currentPage * seancesParPage
	const indexOfSeance = index - seancesParPage
	const currentSeances = Seances.slice(indexOfSeance, index)

	const fetchSeancesbyLieuDateJoueur = async (searchValue) => {
		return Seances.filter(
			(seance) =>
				seance.lieu?.nom.includes(searchValue) ||
				seance.jour.includes(searchValue)
			//seance.joueur.nom.includes(searchValue)
		)
	}

	useEffect(() => {
		let didCancel = false
		const fetchData = async () => {
			setLoading(true)
			if (!searchValue) {
				const result = await fetchSeance()
				setSeances(result)
				setLoading(false)
			} else {
				const result2 = await fetchSeancesbyLieuDateJoueur(searchValue)
				if (!didCancel) {
					setSeances(result2)
					console.log(result2)
					setLoading(false)
				}
			}
		}
		console.log("searchvalue", searchValue)
		fetchData()
		return () => {
			console.log("cleanup:", searchValue)
			didCancel = true
		}
	}, [searchValue])

	const addSeance = async (
		joueur,
		competence,
		statistique,
		jour,
		horaire,
		progSeance,
		lieu
	) => {
		const newseance = await addSeanceFromApi({
			joueur,
			competence,
			statistique,
			jour,
			horaire,
			progSeance,
			lieu,
		})
		setSeances((previousseances) => [
			...previousseances,
			{
				...newseance,
			},
		])
		console.log(Seances)
	}
	// setSeances([
	// 	...Seances,
	// 	{
	// 		_id: Seances.length + 1,
	// 		jour: jour,
	// 		horaire: horaire,
	// 		progSeance: progSeance,
	// 		joueur: joueur,
	// 		lieu: lieu,
	// 		competence: competence,
	// 		statistique: statistique,
	// 	},
	// ])

	const updateSeance = async (
		id,
		jour,
		horaire,
		progSeance,
		joueur,
		lieu,
		raison,
		feedback,
		competence,
		statistique
	) => {
		await updateSeanceFromApi(
			id,

			{
				jour,
				horaire,
				progSeance,
				joueur,
				lieu,
				raison,
				feedback,
				competence,
				statistique,
			}
		)
		const newSeances = Seances.map((seance) =>
			seance._id === id
				? {
						id,
						jour: jour,
						horaire: horaire,
						progSeance: progSeance,
						joueur: joueur,
						lieu: lieu,
						raison: raison,
						feedback: feedback,
						competence: competence,
						statistique: statistique,
				  }
				: seance
		)
		setSeances(newSeances)
	}
	const AnnulerSeance = (
		id,
		jour,
		horaire,
		progSeance,
		joueur,
		lieu,
		raison,
		feedback,
		competence,
		statistique
	) => {
		const newSeances = Seances.map((seance) =>
			seance._id === id
				? {
						id,
						jour: jour,
						horaire: horaire,
						progSeance: progSeance,
						joueur: joueur,
						lieu: lieu,
						raison: raison,
						feedback: feedback,
						competence: competence,
						statistique: statistique,
				  }
				: seance
		)
		setSeances(newSeances)
	}
	const FaireFeedback = (
		id,
		jour,
		horaire,
		progSeance,
		joueur,
		lieu,
		raison,
		feedback,
		competence,
		statistique
	) => {
		const newSeances = Seances.map((seance) =>
			seance._id === id
				? {
						id,
						jour: jour,
						horaire: horaire,
						progSeance: progSeance,
						joueur: joueur,
						lieu: lieu,
						raison: raison,
						feedback: feedback,
						competence: competence,
						statistique: statistique,
				  }
				: seance
		)
		setSeances(newSeances)
	}
	const memoizedCallback = useCallback(addSeance, [Seances])
	const paginate = (pageNumber) => setCurrentPage(pageNumber)
	return (
		<div className="Seance-list">
			<SeanceForm addSeance={memoizedCallback} />
			<br></br>
			<br></br>
			<h3>Listes des Séances</h3>
			<Search
				placeholder="recherche par lieu, par jour"
				size="large"
				style={{ width: 304, margin: 20 }}
				onSearch={onSearch}
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>

			<br></br>
			{loading ? (
				<div>Loading ... </div>
			) : (
				<>
					<SeanceList
						updateSeance={updateSeance}
						mySeance={Seances}
						AnnulerSeance={AnnulerSeance}
						FaireFeedback={FaireFeedback}
					/>

					<Pagination
						onChange={seancesParPage}
						total={Seances.length}
						paginate={paginate}
					></Pagination>
					{error.length !== 0 && <div>{error}</div>}
				</>
			)}
		</div>
	)
}
