import "./User.css"
import { useState } from "react"
export default function User({
	id,
	nom,
	prenom,
	datenaiss,
	abonnement,
	email,
	password,
	alerte,
	updateUser,
}) {
	const [updateMode, setUpdateMode] = useState(false)
	const [nomToUpdate, setNomToUpdate] = useState(nom)
	const [prenomToUpdate, setPrenomToUpdate] = useState(prenom)
	const [datenaissToUpdate, setDatenaissToUpdate] = useState(datenaiss)
	const [abonnementToUpdate, setAbonnementToUpdate] = useState(abonnement)
	const [emailToUpdate, setEmailToUpdate] = useState(email)
	const [passwordToUpdate, setPasswordToUpdate] = useState(password)
	const [alerteToUpdate, setAlerteToUpdate] = useState(alerte)

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => setUpdateMode(true)}>Paramétrer</button>
			</div>
		)
	}

	return (
		<div className="user">
			{!updateMode ? (
				<>
					<div className="">
						<h3>
							{nom} {prenom}
						</h3>
						<label>Date naissance: </label>
						{datenaiss} <br />
						<label>Type Abonnement: </label> {abonnement} <br />
						<label>Email: </label>
						{email} <br />
						<label>Password: </label>
						{password} <br />
						<label>Résumé des Alertes: </label>
						{alerte}
						<div className="radio">
							<label>
								<input
									type="radio"
									value="nombre de séances non atteint par joueur par semaine"
									checked={true}
								/>
								utile
							</label>
						</div>
						<div className="radio">
							<label>
								<input
									type="radio"
									value="une valeur de statistique qui diminue ou qui augmente"
								/>
								pas utile
							</label>
						</div>
						<div className="radio">
							<label>
								<input
									type="radio"
									value="Quels sont les joueurs proches de leurs objectifs et ceux qui sont loins"
								/>
								incorrect
							</label>
						</div>
						<br />
					</div>
					{}
					<br />
					{renderActions()}
				</>
			) : (
				<div>
					<label htmlFor="name">Nom:</label>
					<input
						type="text"
						name="nom"
						value={nomToUpdate}
						onChange={(e) => setNomToUpdate(e.target.value)}
					/>
					<br />
					<label htmlFor="prenom">Prenom:</label>
					<input
						type="text"
						name="prenom"
						value={prenomToUpdate}
						onChange={(e) => setPrenomToUpdate(e.target.value)}
					/>
					<br />
					<label htmlFor="datenaiss">Date naissance:</label>
					<input
						type="text"
						name="datenaiss"
						value={datenaissToUpdate}
						onChange={(e) => setDatenaissToUpdate(e.target.value)}
					/>
					<br />
					<label htmlFor="Abonnement">Abonnement:</label>
					<input
						type="text"
						name="abonnement"
						value={abonnementToUpdate}
						onChange={(e) => setAbonnementToUpdate(e.target.value)}
					/>
					<br />
					<label htmlFor="Email">Email:</label>
					<input
						type="text"
						name="email"
						value={emailToUpdate}
						onChange={(e) => setEmailToUpdate(e.target.value)}
					/>
					<br />
					<label htmlFor="Password">Password:</label>
					<input
						type="text"
						name="password"
						value={passwordToUpdate}
						onChange={(e) => setPasswordToUpdate(e.target.value)}
					/>
					<br />
					<label htmlFor="Alerte">Alerte:</label>
					<input
						type="text"
						name="alerte"
						value={alerteToUpdate}
						onChange={(e) => setAlerteToUpdate(e.target.value)}
					/>{" "}
					<br /> <br />
					<button
						onClick={() => {
							updateUser(
								id,
								nomToUpdate,
								prenomToUpdate,
								datenaissToUpdate,
								abonnementToUpdate,
								emailToUpdate,
								passwordToUpdate,
								alerteToUpdate
							)
							setUpdateMode(false)
						}}
					>
						Paramétrer User
					</button>
				</div>
			)}
		</div>
	)
}
