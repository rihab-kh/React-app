import { Route } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Switch } from "react-router-dom"
import ProgrammeSeancePage from "../../pages/ProgrammeSeancePages/ProgrammeSeancePage"
import AbonnementPage from "../../pages/Abonnement/AbonnementPage"
import VoirSeanceDetails from "../../components/voirdetailsseance/VoirSeancesDetails.js"
import SeancePage from "../../pages/Seance/SeancePage"
import ModifierSeancePage from "../../pages/ModifierSeance/ModifierSeancePage"
import SeanceParJourPage from "../../pages/seanceParJourPage/SeanceParJourPage"

import CompetencePage from "../../pages/competencePage/CompetencePage"
import StatistiquePage from "../../pages/statistiquePage/StatistiquePage"
import InvitationForm from "../../components/invitationForm/InvitationForm"
import SeanceCoachPage from "../../pages/seanceCoachPage/SeanceCoachPage"
import VoirSeanceDetailsCoach from "../../components/voirdeatilsseance/VoirSeancesDetails"
import DefiPage from "../../pages/defiPage/DefiPage"
import EventPage from "../../pages/eventPage/EventPage"
import CreerSeancePage from "../../pages/creerSeancePage/CreerSeancePage"
import SeanceParJourAPage from "../../pages/seanceParJourAPage/SeanceParJourAPage"
import VoirEvenementPage from "../../pages/voirEvenementPage/VoirEvenementPage"
import VoirEvenementDetails from "../../components/voirEvenementDetails/VoirEvenementDetails"
import LieuEntrPage from "../../pages/lieuEntrPage/LieuEntrPage"

import AfficherJoueurPage from "../../pages/joueurAfficherPage/JoueurAfficherPage"
import AssigDefiPage from "../../pages/defiAssigPage/DefiAssigPage"
import AnnulerSeancePage from "../../pages/seanceAnnulerPage/SeanceAnnulerPage"
import ParametrageComptePage from "../../pages/parametrageComptePage/ParametrageComptePage"
import JoueurPage from "../../pages/joueurPage/JoueurPage"

import VoirJoueurDetails from "../../components/voirDetailsJoueur/VoirDetailsJoueur"
import LayoutSidebar from "../../components/layoutSidebar/LayoutSidebar"
import * as api from "../../services/login.service"

import JoueurDetails from "../../components/joueurDetails/JoueurDetails"

function CoachRoutes() {
	console.log("useLocation(): ", useLocation())
	console.log("useRouteMatch(): ", useRouteMatch())
	const { path } = useRouteMatch()
	return (
		<div>
			<LayoutSidebar role="coach">
				<br></br>
				<Switch>
					<Route exact path={`${path}/ProgrammeSeance-page`}>
						<ProgrammeSeancePage />
					</Route>

					<Route exact path={`${path}/payer`}>
						<AbonnementPage />
					</Route>

					<Route exact path={`${path}/modifier-seance`}>
						<ModifierSeancePage />
					</Route>

					<Route exact path={`${path}/seance`}>
						<SeancePage />
					</Route>

					<Route exact path={`${path}/voirSeance-page/:seanceId`}>
						<VoirSeanceDetails />
					</Route>

					<Route exact path={`${path}/seanceParJour`}>
						<SeanceParJourPage />
					</Route>
					<Route exact path={`${path}/competence-page`}>
						<CompetencePage />
					</Route>
					<Route exact path={`${path}/statistique-page`}>
						<StatistiquePage />
					</Route>
					<Route exact path={`${path}/joueur-page`}>
						<JoueurPage />
					</Route>

					<Route exact path={`${path}/detail-joueur/:id`}>
						<JoueurDetails />
					</Route>

					<Route exact path={`${path}/Seance-page`}>
						<SeanceCoachPage />
					</Route>
					<Route exact path={`${path}/voirSeance-page/:seanceId`}>
						<VoirSeanceDetailsCoach />
					</Route>
					<Route exact path={`${path}/defi-page`}>
						<DefiPage />
					</Route>
					<Route exact path={`${path}/event-page`}>
						<EventPage />
					</Route>
					<Route exact path={`${path}/creerseance-page`}>
						<CreerSeancePage />
					</Route>

					<Route exact path={`${path}/voirEvenement-page`}>
						<VoirEvenementPage />
					</Route>
					<Route exact path={`${path}/voirEvenement-page/:eventId`}>
						<VoirEvenementDetails />
					</Route>
					<Route exact path={`${path}/lieuEntr-page`}>
						<LieuEntrPage />
					</Route>

					<Route exact path={`${path}/AfficherJoueur-page`}>
						<AfficherJoueurPage />
					</Route>
					<Route exact path={`${path}/voirJoueur-page/:joueurId`}>
						<VoirJoueurDetails />
					</Route>
					<Route exact path={`${path}/AssigDefi-page`}>
						<AssigDefiPage />
					</Route>
					<Route exact path={`${path}/Annulerseance-page`}>
						<AnnulerSeancePage />
					</Route>
					<Route exact path={`${path}/parametrageCompte-page`}>
						<ParametrageComptePage />
					</Route>
				</Switch>
			</LayoutSidebar>
		</div>
	)
}

export default CoachRoutes
