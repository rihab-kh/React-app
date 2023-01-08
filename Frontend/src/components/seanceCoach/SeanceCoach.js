import "./SeanceCoach.css"
import { useState } from "react"
export default function Seance({
	id,
	jour,
	horaire,
	programmeSeance,
	joueur,
	lieuEntr,
	raison,
	feedback,
	competence,
	statistique,
	
}) {
	const [updateMode, setUpdateMode] = useState(false)

	return (
		<div className="seance">
			{!updateMode ? (
				<>
					<div className="">
						{jour} {horaire}
						{programmeSeance} {joueur} {lieuEntr}
						{raison} {feedback} {competence} {statistique}
					</div>
					{}
				</>
			) : (
				<div></div>
			)}
		</div>
	)
}
