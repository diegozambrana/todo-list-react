import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Form/Input";
import { Link } from "../../../components/Text/Link";
import { Text } from "../../../components/Text/Text";
import { FormGroup } from "../../../components/Form/FormGroup";
import './Login.css'
import { Alert } from "../../../components/Alert";
import { validate } from "../../../utils";
import { useAuth } from '../../../apis/auth';
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const {authenticate, response, error, success} = useAuth()
  const formRef = useRef();
  const validationFields = {
    username: ['required', 'email'],
    password: ['required'],
  }
  const [errorMessages, setErrorMessages] = useState({
    username: null,
    password: null,
  })
  const isAuthenticated = useMemo(() => {
    return success || localStorage.getItem('token')
  }, [success])
  useEffect(() => {console.log(`response`, response)}, [response])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData);
    Object.keys(values).forEach(key => {
      setErrorMessages(em => ({
        ...em,
        [key]: validate(values[key], validationFields[key])
      }));
    })
    authenticate(values)
  }

  if(isAuthenticated) return <Navigate to="/todo" />

  return (
    <Card>
      <Text type='sub-title' center text={'Login'}/>
      {error && <Alert type="error" center>
        {response?.detail || `Error al inciar sesión.`}
      </Alert>}
      <form onSubmit={handleSubmit} ref={formRef}>
        <FormGroup>
          <label htmlFor="username">Correo Electrónico</label>
          <Input
            inputProps={{id: 'username', name: 'username'}}
            placeholder={'Correo Electrónico'}
            error={errorMessages['username']}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Contraseña</label>
          <Input
            inputProps={{id: 'password', name: 'password'}}
            placeholder={'Contraseña'}
            type={'password'}
            error={errorMessages['password']}
          />
        </FormGroup>

        <FormGroup>
          <Button full large value={`Iniciar Sesión`} type="submit"/>
        </FormGroup>

        <FormGroup>
          <Button full large secondary value={`Registrar`}/>
        </FormGroup>
      </form>

      <p style={{textAlign: 'right'}}>
        <Link href="#" >
          Olvidaste tu Contraseña?
        </Link>
      </p>

    </Card>
  )
}