export default function Statistiques() {
	const statistiques = [
		{
			typeStat: "Sauts de corde",
			unitemesure: "sauts",
			minmax: "20-100",
			titre: "sauts",
			description: "hfhgfhf",
			lien: "www.stat1.com",
		},
		{
			typeStat: "num",
			unitemesure: "km",
			minmax: "20-100",
			titre: "sauts",
			description: "hfhgfhf",
			lien: "www.stat2.com",
		},
	]

	return (
		<div>
			{statistiques.map((stat) => (
				<div>
					<div>
						<label htmlFor="Type">Type du Statistique: </label>
						{stat.typeStat}
					</div>
					<div>
						<label htmlFor="Unité">Unité de mesure: </label>
						{stat.unitemesure}
					</div>
					<div>
						<label htmlFor="minmax">minmax: </label>
						{stat.minmax}
					</div>
					<div>
						<label htmlFor="titre">Titre du Statistique: </label>
						{stat.titre}
					</div>
					<div>
						<label htmlFor="Nom">Description: </label>
						{stat.description}
					</div>
					<div>
						<label htmlFor="Nom">Lien: </label>
						{stat.lien}
					</div>
					<br></br>
				</div>
			))}
		</div>
	)
}
