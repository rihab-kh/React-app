import Defi from "../../components/defi/Defi"
function DefiList(props) {
	return (
		<div>
			{props.myDefi.map(function (x) {
				return (
					<Defi
						key={x._id}
						id={x._id}
						objectif={x.objectif}
						lienVideo={x.lienVideo}
						updateDefi={props.updateDefi}
						deleteDefi={props.deleteDefi}
					/>
				)
			})}
		</div>
	)
}

export default DefiList
