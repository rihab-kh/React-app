import StatistiqueList from "../../components/statistiqueList/StatistiqueList"
import StatistiqueForm from "../../components/statistiqueForm/StatistiqueForm"
import { useState, useCallback, useEffect  } from "react"

import {fetchStats,  addStat, updateStat as updateStatFromApi, deleteStat as deleteStatFromApi } from "./../../services/statistiques.service"

export default function StatistiquePage() {
	const [loading, setLoading] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [statistiques, setStatistiques] = useState([])
	const [error, setError]=useState("")
	
	useEffect(() => {
		const fetchData = async () => {
		  try{
		  setLoading(true)
		 
		  const result = await fetchStats()
		  setStatistiques(result)
		  setLoading(false)
		  }
		  catch(e){
			setLoading(false)
			setError("An error occurred when we tried to fetch tasks")
		  }
		}
		console.log("useEffect")
	
		fetchData()
	  }, [])

	const addStatistique = async( 
		
		typeStat,
		unitemesure,
		minmax,
		titre,
		description,
		lien,
		visible
	) => {
		await addStat({
	    typeStat,
		unitemesure,
		minmax,
		titre,
		description,
		lien,
		visible
		})
		setStatistiques([
			...statistiques,
			{
				typeStat: typeStat,
				unitemesure: unitemesure,
				minmax: minmax,
				titre: titre,
				description: description,
				lien: lien,
				visible: visible,
			},
		])
		
	}
	const updateStatistique = async (
		id,
		typeStat,
		unitemesure,
		minmax,
		titre,
		description,
		lien,
		visible
	) => { await updateStatFromApi(id,{
		typeStat,
		unitemesure,
		minmax,
		titre,
		description,
		lien,
		visible
	})
		const newStatistiques = statistiques.map((statistique) =>
			statistique._id === id
				? {
					id,
					typeStat: typeStat,
					unitemesure: unitemesure,
					minmax: minmax,
					titre: titre,
					description: description,
					lien: lien,
					visible,
				  }
				: statistique
		)
		setStatistiques(newStatistiques)
	}
	const memoizedCallback = useCallback(addStatistique, [])
	const deleteStatistique = async (id) => {
		await deleteStatFromApi(id)
		const newStatistiques = statistiques.filter(
			(statistique) => statistique._id !== id
		)
		setStatistiques(newStatistiques)
		// setDefis([...defis, defis.filter((defis) => defis.id !== id)]);
	}

	return (
		<div className="statistiques-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<StatistiqueForm addStatistique={memoizedCallback} />
					<StatistiqueList
						updateStatistique={updateStatistique}
						deleteStatistique={deleteStatistique}
						myStatistique={statistiques}
					/>
				</>
			)}
		</div>
	)
}
