import "./InscriptionCoachForm.css"
import "antd/dist/antd.min.css";
import FirstAuthPage from "../../pages/authPage/FirstAuthPage"
import {Form, Input, Alert} from "antd";
import { useState } from "react"

export default function UserForm(props) {
	const formItemLayout = {
		labelCol: {
		  xs: {
			span: 20,
		  },
		  sm: {
			
			span: 6,
		  },
		},
		wrapperCol: {
		  xs: {
			span: 20,
		  },
		  sm: {
			span: 12,
		  },
		},
	  };
	  const tailFormItemLayout = {
		wrapperCol: {
		  xs: {
			span: 20,
			offset: 0,
		  },
		  sm: {
			span: 12,
			offset: 6,
		  },
		},
	  };
	
	const [form] = Form.useForm();
	const [error, setError] = useState(false);
  	const [success, setSuccess] = useState(false);
  	const [msg, setMsg] = useState("");

	const addUser = "S'inscrire"
	const [Nom, setNom] = useState("")
	const [Prenom, setPrenom] = useState("")
	const [Datenaiss, setDatenaiss] = useState("")
	const [Email, setEmail] = useState("")
	const [Password, setPassword] = useState("")

	function handleAddUser() {
		props.addUser(Nom, Prenom, Datenaiss, Email, Password)
		setSuccess(true);
    	setMsg("Inscription avec succès");
		window.location = "/FirstAuth-page"
	}

	return (
		<>
		
		<Form
			{...formItemLayout}
			form={form}
			name="register"
			onFinish={handleAddUser}
			size="default"
			className="form"
			scrollToFirstError>
			{error ? (
					<Alert className="alert" message={msg} type="error" showIcon />
				) : (
					""
				)}
			{success ? (
					<Alert className="alert" message={msg} type="success" showIcon />
				) : (
					""
				)}
			
			<Form.Item
				type="text"
				name="nom"
				value={Nom}
				label="Nom"
				rules={[
				{
					required: true,
					message: "Donner votre nom",
					whitespace: true,
				},
				]}>
        		<Input className="input" onChange={(e) => setNom(e.target.value)} />
      		</Form.Item>
			
			<Form.Item
				type="text"
				name="prenom"
				value={Prenom}
				label="Prenom"
				rules={[
				{
					required: true,
					message: "Donner votre prénom",
					whitespace: true,
				},
				]}>
				<Input className="input" onChange={(e) => setPrenom(e.target.value)}/>
      		</Form.Item>

			<Form.Item
				type="date"
				name="datenaiss"
				value={Datenaiss}
				label="Date naissance"
				rules={[
				{
					required: true,
					message: "Donner votre Date naissance",
					whitespace: true,
				},
				]}>
				<Input className="input" onChange={(e) => setDatenaiss(e.target.value)}/>
      		</Form.Item>
				
			<Form.Item
				type="email"
				name="email"
				value={Email}
				label="E-mail"
				rules={[
				{
					type: "email",
					message: "The input is not valid E-mail!",
				},
				{
					required: true,
					message: "Donner votre email",
				},
				]}>
				<Input className="input" onChange={(e) => setEmail(e.target.value)}/>
      		</Form.Item>
			  
			<Form.Item
					type="password"
					name="password"
					value={Password}
					label="Mot de passe"
					rules={[
					{
						required: true,
						message: "Donner votre mot de passe SVP !",
					},
					]}
					>
					<Input.Password className="input" onChange={(e) => setPassword(e.target.value)} />
			</Form.Item>
			
			<Form.Item {...tailFormItemLayout}>
					<button type="button" onClick={handleAddUser}>
							{addUser}
					</button>
			</Form.Item>
				
			
		</Form>
	</>
	)
}
