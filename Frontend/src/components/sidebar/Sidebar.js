import { Link, NavLink } from "react-router-dom"
import { Layout, Menu } from "antd"
import { logout } from "../../services/login.service"

const { Header, Content, Footer, Sider } = Layout

function Sidebar({ role }) {
	const handleClick = async () => {
		localStorage.getItem("token")

		logout("token")
		window.location = "/auth-page"
	}

	return (
		<div>
			{role === "coach" && (
				<Layout>
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1">
							<NavLink
								to="/coach/seance"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/seance") || pathname === "/"
								}
							>
								Séances
							</NavLink>
						</Menu.Item>
						<Menu.Item key="2">
							<NavLink
								to="/coach/competence-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/competence-page") || pathname === "/"
								}
							>
								Compétences
							</NavLink>
						</Menu.Item>
						<Menu.Item key="3">
							<NavLink
								to="/coach/statistique-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/statistique-page") || pathname === "/"
								}
							>
								Statisques
							</NavLink>
						</Menu.Item>
						<Menu.Item key="4">
							<NavLink
								to="/coach/defi-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/defi-page") || pathname === "/"
								}
							>
								Défis
							</NavLink>
						</Menu.Item>
						<Menu.Item key="5">
							<NavLink
								to="/coach/event-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/event-page") || pathname === "/"
								}
							>
								Evénements
							</NavLink>
						</Menu.Item>
						<Menu.Item key="6">
							<NavLink
								to="/coach/lieuEntr-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/lieuEntr-page") || pathname === "/"
								}
							>
								Lieux d'entrainement
							</NavLink>
						</Menu.Item>
						<Menu.Item key="7">
							<NavLink
								to="/coach/ProgrammeSeance-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/ProgrammeSeance-page") || pathname === "/"
								}
							>
								Programmes des Séances
							</NavLink>
						</Menu.Item>
						<Menu.Item key="8">
							<NavLink
								to="/coach/Afficherjoueur-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/joueur-page") || pathname === "/"
								}
							>
								Listes des joueurs
							</NavLink>
						</Menu.Item>

						<Menu.Item key="9">
							<NavLink
								to="/coach/parametrageCompte-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/parametrageCompte-page") || pathname === "/"
								}
							>
								Profil
							</NavLink>
						</Menu.Item>

						<Menu.Item key="10">
							<NavLink
								to="/coach/payer"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/payer") || pathname === "/"
								}
							>
								Payer
							</NavLink>
						</Menu.Item>
						<Menu.Item key="11">
							<NavLink
								onClick={handleClick}
								to="/auth-page"
								activeClassName="custom"
							>
								LogOut
							</NavLink>
						</Menu.Item>
					</Menu>
				</Layout>
			)}

			{role === "joueur" && (
				<Layout>
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1">
							<NavLink
								to="/joueur/inscription"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/inscription") || pathname === "/"
								}
							>
								inscription
							</NavLink>
						</Menu.Item>

						<Menu.Item key="2">
							<NavLink
								to="/joueur/login"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/login") || pathname === "/"
								}
							>
								FirstLogin
							</NavLink>
						</Menu.Item>

						<Menu.Item key="3">
							<NavLink
								to="/joueur/joueur-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/joueur-page") || pathname === "/"
								}
							>
								joueur
							</NavLink>
						</Menu.Item>
						<Menu.Item key="4">
							<NavLink
								to="/joueur/joueurj-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/joueurj-page") || pathname === "/"
								}
							>
								joueurj
							</NavLink>
						</Menu.Item>
						{/* <Menu.Item key="5">
							<NavLink
								to="/joueur/seanceParJour-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/seanceParJour-page") || pathname === "/"
								}
							>
								seanceParJour
							</NavLink>
						</Menu.Item> */}
						{/* <Menu.Item key="6">
							<NavLink
								to="/joueur/Seance-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/Seance-page") || pathname === "/"
								}
							>
								Lieux d'entrainement
							</NavLink>
						</Menu.Item>
						<Menu.Item key="7">
							<NavLink
								to="/joueur/voirSeance-page/:seanceId"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/voirSeance-page/:seanceId") ||
									pathname === "/"
								}
							>
								Programmes des Séances
							</NavLink>
						</Menu.Item>
						<Menu.Item key="8">
							<NavLink
								to="/joueur/seanceParJour-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/seanceParJour-page") || pathname === "/"
								}
							>
								Listes des joueurs
							</NavLink>
						</Menu.Item>

						<Menu.Item key="9">
							<NavLink
								to="/joueur/voirEvenement-page"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/voirEvenement-page") || pathname === "/"
								}
							>
								Profil
							</NavLink>
						</Menu.Item>

						<Menu.Item key="10">
							<NavLink
								to="/joueur/DefiDone"
								activeClassName="customClass"
								isActive={(_, { pathname }) =>
									pathname.match("/DefiDone") || pathname === "/"
								}
							>
								Payer
							</NavLink>
						</Menu.Item> */}
						<Menu.Item key="6">
							<NavLink
								onClick={handleClick}
								to="/auth-page"
								activeClassName="custom"
							>
								LogOut
							</NavLink>
						</Menu.Item>
					</Menu>
				</Layout>
			)}
		</div>
	)
}
export default Sidebar
