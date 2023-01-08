import "./DefiForm.css"
import { useState } from "react"
import { Form, Input, Button } from "antd"
import "antd/dist/antd.min.css"

export default function DefiForm(props) {
	const addDefi = "Ajouter un défi"
	const [objectif, setObjectif] = useState("")
	const [lienVideo, setLienVideo] = useState("")

	function handleAddDefi() {
		props.addDefi(objectif, lienVideo)
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
				<Form.Item
					label="Objectif"
					name="objectif"
					value={objectif}
					onChange={(e) => setObjectif(e.target.value)}
					rules={[{ required: true, message: "Please input your objectif!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Vidéo"
					name="lienVideo"
					value={lienVideo}
					onChange={(e) => setLienVideo(e.target.value)}
					rules={[{ required: true, message: "Please input your video!" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item>
					<Button type="primary" onClick={handleAddDefi}>
						{addDefi}
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
