import "./CreerSeance.css"
export default function CreerSeance({
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
	return (
		<div className="seance">
			<>
				<div>{jour} </div>
				<div> {horaire}</div>
				<div>{programmeSeance}</div>
				<div> {joueur}</div>
				<div>{lieuEntr}</div>
				<div>{raison}</div>
				<div>{feedback} </div>
				<div> {competence}</div>
				<div>{statistique}</div>
			</>
		</div>
	)
}
