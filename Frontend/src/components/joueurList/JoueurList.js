import Joueur from "./../joueur/Joueur"
import "./JoueurList.css"
function JoueurList(props) {
	return (
		<div>
			{props.myJoueur.map(function (x) {
				return (
					<Joueur
						key={x._id}
						id={x._id}
						image={x.image}
						nom={x.nom}
						prenom={x.prenom}
						DateNaiss={x.DateNaiss}
						email={x.email}
						sexe={x.sexe}
						LieuNaiss={x.LieuNaiss}
						education={x.education}
						typeEtablissement={x.typeEtablissement}
						ville={x.ville}
						telephone={x.telephone}
						prixSeance={x.prixSeance}
						poids={x.poids}
						taille={x.taille}
						IMC={x.IMC}
						preferencemanuelle={x.preferencemanuelle}
						updateJoueur={props.updateJoueur}
						afficherJoueur={props.afficherJoueur}
						joueur={x}
					/>
				)
			})}
		</div>
	)
}

export default JoueurList
