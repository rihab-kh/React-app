import Competence from "../../components/competence/Competence"
//import competence from './../competence/Competence';
function CompetenceList(props) {
	return (
		<div>
			{props.myCompetence.map(function (x) {
				return (
					<Competence
						key={x._id}
						id={x._id}
						nom={x.nom}
						desccomp={x.desccomp}
						visibility={x.visibility}
						liencomp={x.liencomp}
						rating={x.rating}
						updateCompetence={props.updateCompetence}
						deleteCompetence={props.deleteCompetence}
					/>
				)
			})}
		</div>
	)
}

export default CompetenceList
