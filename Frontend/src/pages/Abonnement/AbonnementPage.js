import { useState, useEffect, useCallback } from "react"

import AbonnementForm from "../../components/AbonnementForm/AbonnementForm"
import {
	//fetchProgramme_seances,
	//addProgramme_seances as addProgramme_seancesFromApi,
	PayerAbonnement,
	//deleteProgramme_seances as deleteProgramme_seancesFromApi,
} from "../../services/abonnement.service"

import React from "react"

export default function AbonnementPage() {
	const [typeAbonnement, setTypeAbonnement] = useState([])

	const updateAbonnement = async (typeAbonnement) => {
		await PayerAbonnement({
			typeAbonnement,
		})
		const newTypeAbonnement = typeAbonnement

		setTypeAbonnement(newTypeAbonnement)
	}

	return (
		<div className="Abonnement-list">
			<>
				<br />
				<h1>Abonnement</h1>
				<br />
				<AbonnementForm updateAbonnement={updateAbonnement} />
			</>
		</div>
	)
}
