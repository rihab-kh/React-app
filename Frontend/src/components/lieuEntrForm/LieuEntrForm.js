import "./LieuEntrForm.css"
import { useState, useEffect } from "react";
import { Form, Input, Button } from "antd"
import "antd/dist/antd.min.css"

export default function LieuEntrForm(props) {
	const addLieuEntr = "Ajouter LieuEntr"
	const [nom, setNom] = useState("")
	const [ville, setVille] = useState("")
	const [pays, setPays] = useState("")
	const [adresse, setAdresse] = useState("")

	const handleAddLieuEntr = () => {
		props.addLieuEntr(nom, ville, pays, adresse);
	  };
	  useEffect(() => {
		
		document.nom = nom;
	
	  });
	
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
				<Form.Item
					label="nom"
					name="nom"
					value={nom}
					onChange={(e) => setNom(e.target.value)}
					rules={[{ required: true, message: "Please input your nom!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="ville"
					name="ville"
					value={ville}
					onChange={(e) => setVille(e.target.value)}
					rules={[{ required: true, message: "Please input your ville!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="pays"
					name="pays"
					value={pays}
					onChange={(e) => setPays(e.target.value)}
					rules={[{ required: true, message: "Please input your pays!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="adresse"
					name="adresse"
					value={adresse}
					onChange={(e) => setAdresse(e.target.value)}
					rules={[{ required: true, message: "Please input your adresse!" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item>
					<Button type="primary" onClick={handleAddLieuEntr}>
						{addLieuEntr}
					</Button>
				</Form.Item>
			</Form>
			
		</>
	)
}
