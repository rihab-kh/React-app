import DefisList from "../../components/assigdefiList/DefiassigList"
import { useState } from "react"

export default function DefiPage() {
	const loading = false
	const [isVisible, setIsVisible] = useState(true)
	const [defis, setDefis] = useState([
		{
			id: 1,
			objectif: "100 metre",
			lienVideo: "www.rihab.com",
			periode: "",
			joueurs: "Lajjem Siwar",
		},
		{
			id: 2,
			objectif: "50 metre",
			lienVideo: "www.youtube.com",
			periode: "",
			joueurs: "Lajjem Siwar",
		},
		{
			id: 3,
			objectif: "200 metre",
			lienVideo: "www.rihab.com",
			periode: "",
			joueurs: "Lajjem Siwar",
		},
	])

	const assignerDefi = (id, objectif, lienVideo, periode, joueurs) => {
		const newDefis = defis.map((defi) =>
			defi.id === id
				? {
					id,
					objectif: objectif,
					lienVideo: lienVideo,
					periode: periode,
					joueurs: joueurs.value,
				  }
				: defi
		)
		setDefis(newDefis)
	}

	return (
		<div className="defis-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<h3>Liste des Défis</h3>
					<DefisList assignerDefi={assignerDefi} myDefi={defis} />
				</>
			)}
		</div>
	)
}
