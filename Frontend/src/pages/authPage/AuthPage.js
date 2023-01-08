import { useState } from "react"
import { login } from "../../services/login.service"
import { useHistory } from "react-router-dom"
import React from "react"
import "antd/dist/antd.min.css";
import {Form, Input, Button, Alert} from "antd";
import { Link, NavLink } from "react-router-dom"


function AuthPage() {
	const formItemLayout = {
		labelCol: {
		  xs: {
			span: 24,
		  },
		  sm: {
			span: 8,
		  },
		},
		wrapperCol: {
		  xs: {
			span: 24,
		  },
		  sm: {
			span: 16,
		  },
		},
	  };
	  const tailFormItemLayout = {
		wrapperCol: {
		  xs: {
			span: 24,
			offset: 0,
		  },
		  sm: {
			span: 16,
			offset: 8,
		  },
		},
	  };

	const [form] = Form.useForm();
	

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const history = useHistory()
	const handleClick = async () => {
	const token = await login({ email, password })
	console.log("token: ", token)
	localStorage.setItem("token", token)
	
	window.location = "/"
	
	}
	  // const history = useHistory();
	
	
	  
	  return (
		<div>
		<h1 style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			
		  }}>Login</h1>
		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		  }}>
			
			<Form
				{...formItemLayout}
				form={form}
				name="login"
				onFinish={handleClick}
				size="default"
				className="form"
				scrollToFirstError>
				
				<Form.Item
					type="email"
					name="email"
					value={email}
					label="E-mail"
					rules={[
					{
						type: "email",
						required: true,
						message: "Donner votre email",
					},
					]}>
					<Input className="input" onChange={(e) => setEmail(e.target.value)} />
				</Form.Item>

				<Form.Item
					type="password"
					name="password"
					value={password}
					label="Mot de passe"
					rules={[
					{
						required: true,
						message: "Donner votre mot de passe",
					},
					]}
					>
					<Input.Password className="input" onChange={(e) => setPassword(e.target.value)} />
				</Form.Item>

				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit" className="input">
					Se connecter
					</Button>
				</Form.Item>
    		</Form>
		
	  
		</div>

		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			
		  }}>
		<NavLink
                to="/inscription-page"
                className="btn btn-outline-primary ms-2 px-4 rounded-pill"
              >
                S'inscrire
        </NavLink>
		</div>

		</div>
			
	  )

  }

  export default AuthPage;