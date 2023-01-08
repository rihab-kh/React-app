export default function Competences() {
	const competences = [
		{
			nom: "Sauts de corde",
			desccomp: "jusqu à 200 sauts dans 3 minutes seulement",
			liencomp: "www.comp1.com",
		},
		{
			nom: "foot",
			desccomp: "gagner 4 matchs sur 5",
			liencomp: "www.comp2.com",
		},
	]

	return (
		<div>
			{competences.map((comp) => (
				<div>
					<div>
						<label htmlFor="Nom">Nom du compétence: </label>
						{comp.nom}
					</div>
					<div>
						<label htmlFor="Description">Description: </label>
						{comp.desccomp}
					</div>
					<div>
						<label htmlFor="Lien">Lien: </label>
						{comp.liencomp}
					</div>
					<br></br>
				</div>
			))}
		</div>
	)
}
