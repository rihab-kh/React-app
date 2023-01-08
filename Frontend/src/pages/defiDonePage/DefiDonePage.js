import DefisList from "../../components/defiJoueurList/DefiJoueurList"
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
			joueurs: "",
		},
		{
			id: 2,
			objectif: "50 metre",
			lienVideo: "www.youtube.com",
			periode: "",
			joueurs: "",
		},
		{
			id: 3,
			objectif: "200 metre",
			lienVideo: "www.rihab.com",
			periode: "",
			joueurs: "",
		},
	])

	return (
		<div className="defis-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<h3>Liste des Défis</h3>
					<DefisList myDefi={defis} />
				</>
			)}
		</div>
	)
}
