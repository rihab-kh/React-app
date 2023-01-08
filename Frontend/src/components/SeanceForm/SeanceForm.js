import "../Seance/Seance.css"
import { useEffect, useState } from "react"
import Select from "react-select"
import Axios from "axios"
import AsyncSelect from "react-select/async"
import { Form, Input, Button, DatePicker, Space } from "antd"
import { header } from "../../services/seance.service"
import { NavLink } from "react-router-dom"

export default function SeanceForm(props) {
	const addSe = "Créer une séance"
	const [jour, setJour] = useState("")
	const [horaire, setHoraire] = useState("")
	const [progSeance, setProgrammeSeance] = useState("")
	const [joueur, setJoueur] = useState("")
	const [lieu, setLieuEntr] = useState("")
	const [Raison, setRaison] = useState("")
	const [Feedback, setFeedback] = useState("")
	const [competence, setCompetence] = useState("")
	const [statistique, setStatistique] = useState("")

	var Joueur = async () => {
		const result = await Axios.get(
			"http://localhost:8800/api/joueurs",
			header()
		)
		console.log(result.data)
		return result.data
	}
	var Lieu = async () => {
		const result = await Axios.get(
			"http://localhost:8800/api/lieuxEntr",
			header()
		)
		console.log(result.data)
		return result.data
	}
	var Statistique = async () => {
		const result = await Axios.get("http://localhost:8800/api/stats", header())
		console.log(result.data)
		return result.data
	}
	var Competence = async () => {
		const result = await Axios.get("http://localhost:8800/api/comps", header())
		console.log(result.data)
		return result.data
	}
	var Programme = async () => {
		const result = await Axios.get(
			"http://localhost:8800/api/programme_seances",
			header()
		)
		console.log(result.data)
		return result.data
	}

	function handleAddSeance() {
		props.addSeance(
			joueur,
			competence,
			statistique,
			jour,
			horaire,
			progSeance,
			lieu,
			Raison,
			Feedback
		)
	}

	return (
		<>
			<Form
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout="horizontal"
			>
				<Form.Item label="joueur">
					<AsyncSelect
						isMulti
						defaultOptions
						loadOptions={Joueur}
						name="joueur"
						getOptionLabel={(e) => e.nom}
						getOptionValue={(e) => e._id}
						onChange={(e) => setJoueur(e.map((x) => x._id))}
					></AsyncSelect>
				</Form.Item>
				<Form.Item label="Competence">
					<AsyncSelect
						isMulti
						defaultOptions
						name="competence"
						getOptionLabel={(e) => e.nom}
						getOptionValue={(e) => e._id}
						loadOptions={Competence}
						onChange={(e) => setCompetence(e.map((x) => x._id))}
					></AsyncSelect>
				</Form.Item>
				<Form.Item label="Statistique">
					<AsyncSelect
						isMulti
						cacheOptions
						defaultOptions
						name="statistique"
						getOptionLabel={(e) => e.titre}
						getOptionValue={(e) => e._id}
						loadOptions={Statistique}
						onChange={(e) => setStatistique(e.map((x) => x._id))}
					></AsyncSelect>
				</Form.Item>

				<Form.Item label="Jour de la seance">
					<input
						type="date"
						name="jour"
						value={jour}
						onChange={(e) => setJour(e.target.value)}
					/>
				</Form.Item>

				<Form.Item label="Horaire">
					<input
						type="time"
						name="horaire"
						value={horaire}
						onChange={(e) => setHoraire(e.target.value)}
					/>
				</Form.Item>
				<Form.Item label="Programme séance">
					<AsyncSelect
						isMulti
						cacheOptions
						defaultOptions
						name="progSeance"
						getOptionLabel={(e) => e.title}
						getOptionValue={(e) => e._id}
						loadOptions={Programme}
						onChange={(e) => setProgrammeSeance(e.map((x) => x._id))}
					></AsyncSelect>
				</Form.Item>
				<Form.Item label="Lieu">
					<AsyncSelect
						isMulti
						cacheOptions
						defaultOptions
						name="lieu"
						getOptionLabel={(e) => e.nom}
						getOptionValue={(e) => e._id}
						loadOptions={Lieu}
						onChange={(e) => setLieuEntr(e.map((x) => x._id))}
					></AsyncSelect>
				</Form.Item>
				<Button type="primary" onClick={handleAddSeance}>
					{addSe}
				</Button>
			</Form>
			<br></br>
			<br></br>
			<Button type="primary">
				<NavLink to="/coach/seanceParJour" activeClassName="custom">
					afficher la listes des séances d'aujourd'hui
				</NavLink>
			</Button>
		</>
	)
}
