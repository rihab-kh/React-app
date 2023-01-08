import { useState, useEffect, useCallback } from "react"
import ProgrammeSeanceForm from "../../components/ProgrammeSeanceForm/ProgrammeSeanceForm"
import ProgrammeSeancesList from "../../components/ProgrammeSeanceList/ProgrammeSeancesList"
import {
	fetchProgramme_seances,
	addProgramme_seances as addProgramme_seancesFromApi,
	updateProgramme_seances as updateProgramme_seancesFromApi,
	deleteProgramme_seances as deleteProgramme_seancesFromApi,
} from "../../services/progSeance.service"

export default function ProgrammeSeancePage() {
	const [loading, setLoading] = useState(false)

	const [ProgrammeSeances, setProgrammeSeances] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)

			try {
				const result = await fetchProgramme_seances()
				setProgrammeSeances(result)
				setLoading(false)
			} catch (e) {
				console.log(e + "error")
				setLoading(false)
			}

			// return result
		}
		fetchData()
	}, [])

	const addProgrammeSeance = async (
		title,
		descriptionTechnique,
		image,
		lienVideo
	) => {
		await addProgramme_seancesFromApi({
			title,
			descriptionTechnique,
			image,
			lienVideo,
		})

		setProgrammeSeances((ProgrammeSeances) => [
			...ProgrammeSeances,
			{
				_id: ProgrammeSeances.length + 1,
				title: title,
				descriptionTechnique: descriptionTechnique,
				image: image,
				lienVideo: lienVideo,
			},
		])
	}

	const updateProgrammeSeance = async (
		id,
		title,
		descriptionTechnique,
		image,
		lienVideo
	) => {
		await updateProgramme_seancesFromApi(id, {
			title,
			descriptionTechnique,
			image,
			lienVideo,
		})
		const newProgrammeSeances = ProgrammeSeances.map((ProgrammeSeance) =>
			ProgrammeSeance._id === id
				? {
						id,
						title: title,
						descriptionTechnique: descriptionTechnique,
						image: image,
						lienVideo: lienVideo,
				  }
				: ProgrammeSeance
		)
		setProgrammeSeances(newProgrammeSeances)
	}

	const memoizedCallback = useCallback(addProgrammeSeance, [])

	const deleteProgrammeSeance = async (id) => {
		await deleteProgramme_seancesFromApi(id)
		const newProgrammeSeances = ProgrammeSeances.filter(
			(ProgrammeSeance) => ProgrammeSeance._id !== id
		)
		setProgrammeSeances(newProgrammeSeances)
		// setProgrammeSeances([...ProgrammeSeances, ProgrammeSeances.filter((ProgrammeSeances) => ProgrammeSeances.id !== id)]);
	}

	return (
		<div className="ProgrammeSeances-list">
			{loading && <div>loading...</div>}
			{!loading && (
				<>
					<ProgrammeSeanceForm addProgrammeSeance={memoizedCallback} />

					<ProgrammeSeancesList
						addProgrammeSeance={addProgrammeSeance}
						updateProgrammeSeance={updateProgrammeSeance}
						deleteProgrammeSeance={deleteProgrammeSeance}
						myProgrammeSeance={ProgrammeSeances}
					/>
				</>
			)}
		</div>
	)
}
