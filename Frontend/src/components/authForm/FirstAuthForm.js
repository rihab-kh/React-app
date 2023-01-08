import { useState } from "react"
import {Form, Input, Checkbox, Button, DatePicker} from "antd";


export default function AuthForm() {
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

	const handleClick = async () => {
		
		window.location = "/auth-page"
		
		}
	
	return (
		<>
		
		<Form
			{...formItemLayout}
			form={form}
			name="register"
			onFinish={handleClick}
			size="default"
			className="form"
			scrollToFirstError>
		
			<h3>Choisir discipline:</h3>
			<Form.Item
				
				name="discipline"
				valuePropName="checked"

				{...tailFormItemLayout}>
			<Checkbox className="input">
					Tennis
			</Checkbox>
			
					
			<Checkbox className="input">
					Foot
			</Checkbox>
						
					
			<Checkbox className="input">
					Préparatuer physqiue tennis
			</Checkbox>							
			</Form.Item>
					<h3>Choisir Type Alerte:</h3>
			<Form.Item
				
				name="Alerte"
				valuePropName="checked"

				{...tailFormItemLayout}>		
						
				<Checkbox className="input">
							nombre de séances non atteint par joueur par semaine
				</Checkbox>

						
				<Checkbox className="input">
							une valeur de statistique qui diminue ou qui augmente
				</Checkbox>

						
				<Checkbox className="input">
							Quels sont les joueurs proches de leurs objectifs et ceux qui sont
							loins
				</Checkbox>
			</Form.Item>			
					
			<Form.Item {...tailFormItemLayout}>
					<button type="button" onClick={handleClick}>
					Valider
					</button>
			</Form.Item>	
					
		</Form>
		</>
	)
}
