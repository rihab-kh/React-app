import "./Defiassig.css"
import { useState } from "react"
import Select from "react-select"

export default function Defi({
	id,
	objectif,
	lienVideo,
	periode,
	joueurs,
	assignerDefi,
}) {
	const [assignerMode, setAssignerMode] = useState(false)
	const [objectifToUpdate, setObjectifToUpdate] = useState(objectif)
	const [lienVideoToUpdate, setLienVideoToUpdate] = useState(lienVideo)
	const [periodeToUpdate, setPeriodeToUpdate] = useState(periode)

	const [joueursToUpdate, setJoueursToUpdate] = useState({
		Joueurs: [
			{ value: "Siwar", label: "Siwar" },
			{ value: "Aya", label: "Aya" },
			{ value: "riha", label: "riha" },
		],
	})

	function renderActions() {
		return (
			<div className="actions">
				<button onClick={() => setAssignerMode(true)}>Assigner Defi</button>
			</div>
		)
	}

	return (
		<div className="defi">
			{!assignerMode ? (
				<>
					<div className="">
						{objectifToUpdate} {lienVideoToUpdate} {periodeToUpdate} {joueurs}
					</div>
					{}
					{renderActions()}
				</>
			) : (
				<div>
					<div>
						{" "}
						{objectif} {lienVideo}{" "}
					</div>
					<label>Periode:</label>
					<input
						type="text"
						name="periode"
						value={periodeToUpdate}
						onChange={(e) => setPeriodeToUpdate(e.target.value)}
					/>{" "}
					<br />
					<label>Choisir joueurs:</label>
					<Select
						defaultValue={joueursToUpdate}
						onChange={setJoueursToUpdate}
						options={joueursToUpdate.Joueurs}
					/>
					<br />
					<button
						onClick={() => {
							assignerDefi(
								id,
								objectifToUpdate,
								lienVideoToUpdate,
								periodeToUpdate,
								joueursToUpdate
							)
							setAssignerMode(false)
						}}
					>
						assigner Defi
					</button>
				</div>
			)}
		</div>
	)
}

/**/
