import LoginPage from "../../pages/Login/LoginPage"
import InscriptionPage from "../../pages/Inscription/InscriptionPage"
import JoueurPagej from "../../pages/joueurPagej/JoueurPagej"
import JoueurPage from "../../pages/joueurPage/JoueurPage"
import SeanceParJourAPage from "../../pages/seanceParJourAPage/SeanceParJourAPage"
import DefiDonePage from "../../pages/defiDonePage/DefiDonePage"
import LayoutSidebar from "../../components/layoutSidebar/LayoutSidebar"
import { Route } from "react-router-dom"
import SeancePage from "../../pages/Seance/SeancePage"
import { useRouteMatch } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Switch } from "react-router-dom"

function JoueurRoutes() {
	const { path } = useRouteMatch()
	return (
		<div>
			<LayoutSidebar role="joueur">
				<Switch>
					<Route exact path={`${path}/login`}>
						<LoginPage />
					</Route>

					<Route exact path={`${path}/inscription`}>
						<InscriptionPage />
					</Route>
					<Route exact path={`${path}/joueur-page`}>
						<JoueurPage />
					</Route>
					<Route exact path={`${path}/joueurj-page`}>
						<JoueurPagej />
					</Route>
					{/* <Route exact path={`${path}/seanceParJour-page`}>
						<SeanceParJourAPage />
					</Route> */}
					{/* <Route exact path={`${path}/Seance-page`}>
						<SeanceCoachPage />
					</Route>
					<Route path={`${path}/voirSeance-page/:seanceId`}>
						<VoirSeanceDetailsCoach />
					</Route>
					<Route exact path={`${path}/seanceParJour`}>
						<SeanceParJour />
					</Route>
					<Route exact path={`${path}/voirEvenement-page`}>
						<VoirEvenementPage />
					</Route>
					<Route path={`${path}/voirEvenement-page/:eventId`}>
						<VoirEvenementDetails />
					</Route>
					<Route exact path={`${path}/DefiDone-page`}>
						<DefiDonePage />
					</Route> */}
				</Switch>
			</LayoutSidebar>
		</div>
	)
}

export default JoueurRoutes
