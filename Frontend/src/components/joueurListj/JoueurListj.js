import Joueurj from "./../joueurj/Joueurj"
import "./JoueurListj.css"
function JoueurListj(props) {
	return (
		<div>
			{props.myJoueur.map(function (x) {
				return (
					<Joueurj
						key={x.id}
						id={x.id}
						image={x.image}
						nom={x.nom}
						prenom={x.prenom}
						datenaissance={x.datenaissance}
						email={x.email}
						sexe={x.sexe}
						lieunaissance={x.lieunaissance}
						profession={x.profession}
						etablissement={x.etablissement}
						ville={x.ville}
						tel={x.tel}
						poids={x.poids}
						taille={x.taille}
						imc={x.imc}
						preferencemanuelle={x.preferencemanuelle}
						updateJoueurj={props.updateJoueurj}
					/>
				)
			})}
		</div>
	)
}

export default JoueurListj
