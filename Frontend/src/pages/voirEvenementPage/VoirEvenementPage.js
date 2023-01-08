import VoirEvenementList from "../../components/voirEvenementList/VoirEvenementList"
import { useState } from "react"
import Logo from "../../images/logo192.png"

export default function VoirEvenementPage() {
	const loading = false
	const [events, setEvents] = useState([
		{
			id: 1,
			nom: "événement1",
			description: "événement1",
			date_debut: "01/04/2022",
			date_fin: "04/04/2022",
			lieu: "Ariana",
			confidentialite: "Publique",
			event_image: Logo,
		},
		{
			id: 2,
			nom: "événement2",
			description: "événement2",
			date_debut: "01/04/2022",
			date_fin: "03/04/2022",
			lieu: "Manouba",
			confidentialite: "Publique",
			event_image: Logo,
		},
		{
			id: 3,
			nom: "événement3",
			description: "événement3",
			date_debut: "01/04/2022",
			date_fin: "02/04/2022",
			lieu: "Tunis",
			confidentialite: "Privé",
			event_image: Logo,
		},
	])

	return (
		<div className="">
			{loading && <div>loading...</div>}
			{!loading && (
				<>
					<VoirEvenementList myEvent={events} />
				</>
			)}
		</div>
	)
}
