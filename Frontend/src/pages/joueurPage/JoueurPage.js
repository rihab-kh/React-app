import JoueurList from "../../components/joueurList/JoueurList"
import { useState,useCallback,useEffect } from "react"
import { fetchAllJoueurs,updateJoueur as updateJoueurFromApi ,addJoueur as addJoueurFromApi, inviterJoueur} from "../../services/joueur.service"
import fetchJoueurById from "../../services/joueur.service"
import InvitationForm from "./../../components/invitationForm/InvitationForm"
import { Redirect } from "react-router-dom"

export default function JoueurPage() {
	const loading = false
	const [isVisible, setIsVisible] = useState(true)
	const [joueurs, setJoueurs] = useState([])
	const [joueur, setJoueur] = useState({})
	const [error, setError] = useState("")
	useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAllJoueurs();
                setJoueurs(result);
            } catch (e) {
                setError("An error occurred when we tried to fetch tasks")
            }
        };
        fetchData();
    }, [])

	
	const addJoueur = async( 
		id,
		image,
		nom,
		prenom,
		DateNaiss,
		email,
		sexe,
		LieuNaiss,
		education,
		typeEtablissement,
		ville,
		telephone,
		prixSeance,
		poids,
		taille,
		IMC,
		preferenceManuelle,
		) => {
			await addJoueurFromApi({
				image,
				nom,
				prenom,
				DateNaiss,
				email,
				sexe,
				LieuNaiss,
				education,
				typeEtablissement,
				ville,
				telephone,
				prixSeance,
				poids,
				taille,
				IMC,
				preferenceManuelle,
				
			})
			setJoueurs([
				...joueurs,
				{
					image : image,
		nom : nom,
		prenom : prenom,
		DateNaiss : DateNaiss,
		email : email,
		sexe : sexe,
		LieuNaiss : LieuNaiss,
		education : education,
		typeEtablissement : typeEtablissement,
		ville : ville,
		telephone : telephone,
		prixSeance : prixSeance,
		poids : poids,
		taille : taille,
		IMC : IMC,
		preferenceManuelle : preferenceManuelle,
				},
			])
			
		}
	const updateJoueur = async (
				id,
				nom,
				prenom,
				DateNaiss,
				email,
				sexe,
				LieuNaiss,
				education,
				typeEtablissement,
				ville,
				telephone,
				prixSeance,
				poids,
				taille,
				IMC,
				preferenceManuelle,
	) => { await updateJoueurFromApi(id,{
				nom,
				prenom,
				DateNaiss,
				email,
				sexe,
				LieuNaiss,
				education,
				typeEtablissement,
				ville,
				telephone,
				prixSeance,
				poids,
				taille,
				IMC,
				preferenceManuelle,
	}


	)
		const newJoueurs = joueurs.map((joueur) =>
			joueur._id === id
				? {
					id,
				nom : nom,
				prenom : prenom,
				DateNaiss : DateNaiss,
				email : email,
				sexe : sexe,
				LieuNaiss : LieuNaiss,
				education : education,
				typeEtablissement : typeEtablissement,
				ville : ville,
				telephone : telephone,
				prixSeance : prixSeance,
				poids : poids,
				taille : taille,
				IMC : IMC,
				preferenceManuelle : preferenceManuelle,
				  }
				: joueur
		)
		setJoueurs(newJoueurs)
	}

	const  inviJoueur  = async (
				nom,
				prenom,
				DateNaiss,
				email,
				sexe,
				LieuNaiss,
				education,
				typeEtablissement,
				ville,
				telephone,
				prixSeance,
				poids,
				taille,
				IMC,
				preferenceManuelle
	) => { await inviterJoueur({
		nom,
		prenom,
		DateNaiss,
		email,
		sexe,
		LieuNaiss,
		education,
		typeEtablissement,
		ville,
		telephone,
		prixSeance,
		poids,
		taille,
		IMC,
		preferenceManuelle
	})}

	

	const afficherJoueur =  (id) => { 
		<Route exact path={`/detail-joueur/${id}`} />
	}


	const memoizedCallback = useCallback(inviJoueur, [])
	return (
		<div className="joueurs-list">
			{loading && <div>loading...</div>}
			{!loading && isVisible && (
				<>
					<JoueurList updateJoueur={updateJoueur} afficherJoueur={afficherJoueur}  myJoueur={joueurs} />
					<InvitationForm addInvitation={memoizedCallback}/>
				</>
			)}
		</div>
	)
}
