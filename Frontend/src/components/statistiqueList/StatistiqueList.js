import Statistique from "../../components/statistique/Statistique"
//import competence from './../competence/Competence';
function StatistiqueList(props) {
	return (
		<div>
			{props.myStatistique.map(function (x) {
				return (
					<Statistique
						key={x._id}
						id={x._id}
						typeStat={x.typeStat}
						unitemesure={x.unitemesure}
						minmax={x.minmax}
						titre={x.titre}
						description={x.description}
						lien={x.lien}
						visible={x.visible}
						updateStatistique={props.updateStatistique}
						deleteStatistique={props.deleteStatistique}
					/>
				)
			})}
		</div>
	)
}

export default StatistiqueList
