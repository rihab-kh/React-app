import CompetenceList from "../../components/competenceList/CompetenceList"
import CompetenceForm from "../../components/competenceForm/CompetenceForm"
import { useState, useCallback, useEffect  } from "react"

import {fetchComps, addComp, updateComp as updateCompFromApi, deleteComp as deleteCompFromApi } from "./../../services/competences.service"

export default function CompetencePage() {
	const [loading, setLoading] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [competences, setCompetences] = useState([])
	const [error, setError]=useState("")
	
	useEffect(() => {
		const fetchData = async () => {
		  try{
		  setLoading(true)
		 
		  const result = await fetchComps()
		  setCompetences(result)
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

	const addCompetence = async(
		nom,
		desccomp,
		visibility,
		liencomp,
		rating
		) => {
			await addComp({
			nom,
			desccomp,
			visibility,
			liencomp,
			rating
			})
		setCompetences([
			...competences,
			{
				nom: nom,
				desccomp: desccomp,
				visibility: visibility,
				liencomp: liencomp,
				rating: rating,
			},
		])
		
	}
	const updateCompetence = async(
		id,
		nom,
		desccomp,
		visibility,
		liencomp,
		rating
	) => {
		await updateCompFromApi(id,{
			nom,
			desccomp,
			visibility,
			liencomp,
			rating
		})
		const newCompetences = competences.map((competence) =>
			competence._id === id
				? {
					id,
					nom: nom,
					desccomp: desccomp,
					visibility: visibility,
					liencomp,
					rating,
				  }
				: competence
		)
		setCompetences(newCompetences)
	}
	const memoizedCallback = useCallback(addCompetence, [])
	const deleteCompetence = async(id) => {
		await deleteCompFromApi(id)
		const newCompetences = competences.filter(
			(competence) => competence._id !== id
		)
		setCompetences(newCompetences)
		// setDefis([...defis, defis.filter((defis) => defis.id !== id)]);
	}

	return (
		<div className="competences-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<CompetenceForm addCompetence={memoizedCallback} />
					<CompetenceList
						updateCompetence={updateCompetence}
						deleteCompetence={deleteCompetence}
						myCompetence={competences}
					/>
				</>
			)}
		</div>
	)
}
