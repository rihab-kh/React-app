import ProgrammeSeance from "../ProgrammeSeance/ProgrammeSeance"
function ProgrammeSeancesList(props) {
	return (
		<div>
			{props.myProgrammeSeance.map(function (x) {
				return (
					<ProgrammeSeance
						key={x._id}
						id={x._id}
						title={x.title}
						descriptionTechnique={x.descriptionTechnique}
						image={x.image}
						lienVideo={x.lienVideo}
						updateProgrammeSeance={props.updateProgrammeSeance}
						deleteProgrammeSeance={props.deleteProgrammeSeance}
					/>
				)
			})}
		</div>
	)
}

export default ProgrammeSeancesList
