import React, {useEffect, useState} from "react";
import "antd/dist/antd.min.css";
import {Form, Input, Button, Alert} from "antd";
import * as api from "../../services/login.service";

export default function ParaetrageCompteForm({
	coachId,
	nom,
	prenom,
	email,
	DateNaiss,
	
}) {
	const [nomToUpdate, setNomToUpdate] = useState(nom)
	const [prenomToUpdate, setPrenomToUpdate] = useState(prenom)
	const [emailToUpdate, setEmailToUpdate] = useState(email)
  const [DateNaissToUpdate, setDateNaissToUpdate] = useState(DateNaiss)
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
  useEffect(() => {
    const fetchData = async () => {
      await api.me().then((res) => {
        form.setFieldsValue(res);
      });
    };
    fetchData();
  }, []);

  const [success, setSuccess] = useState(false);
  const handleSubmit = async (value) => {
    console.log(value)
    try {
      setLoading(true)
      const newUser = await api.parametrageCompte(
        coachId, value)
      setUser(newUser)
      setLoading(false)
      setSuccess(true)
    } catch (e) {
      console.log("error",e)
    }
  }
  

  return (
    <div>
      {success ? (
        <Alert
          message="Modification éffectuée avec succès"
          type="success"
          showIcon
          style={{textAlign: "left"}}
        />
      ) : (
        ""
      )}
      <Form
        {...formItemLayout}
        name="parametrageCompte"
        onFinish={handleSubmit}
        size="default"
        className="form"
        form={form}
        scrollToFirstError>
        
        <Form.Item
          name="nom"
          value={nomToUpdate}
          label="Nom"
          rules={[
            {
              required: true,
              message: " il faut taper le Nom",
              whitespace: true,
            },
          ]}>
          <Input onChange={(e) => setNomToUpdate(e.target.value)} />
        </Form.Item>

        <Form.Item
          type="text"
          name="prenom"
          value={prenomToUpdate}
          label="Prénom"
          rules={[
            {
              required: true,
              message: "il faut taper le Prénom",
              whitespace: true,
            },
          ]}>
          <Input onChange={(e) => setPrenomToUpdate(e.target.value)} />
        </Form.Item>


        <Form.Item
          name="DateNaiss"
          value={DateNaissToUpdate}
          label="Date de naissance"
          rules={[
            {
              required: true,
              message: "il faut taper Date de naissance",
              whitespace: true,
            },
          ]}>
          <Input
            style={{
              width: "100%",
            }}
            type="date"
            onChange={(e) => setDateNaissToUpdate(e.target.value)}/>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="input">
            Modifier
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}