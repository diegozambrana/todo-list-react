import React, { useRef, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Form/Input";
import { Link } from "../../../components/Text/Link";
import { Text } from "../../../components/Text/Text";
import { FormGroup } from "../../../components/Form/FormGroup";
import './Login.css'
import { Alert } from "../../../components/Alert";
import { validate } from "../../../utils";

export const Login = () => {
  const [error, setError] = useState(false);
  const formRef = useRef();
  const validationFields = {
    email: ['required', 'email'],
    password: ['required'],
  }
  const [errorMessages, setErrorMessages] = useState({
    email: null,
    password: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData);
    Object.keys(values).forEach(key => {
      console.log(`validate(validationFields[key])`, validate(values[key], validationFields[key]))
      setErrorMessages(em => ({
        ...em,
        [key]: validate(values[key], validationFields[key])
      }));
    })
    console.log(values)
  }

  return (
    <Card>
      <Text type='sub-title' center text={'Login'}/>
      {error && <Alert type="error" center>Error al inciar sesión.</Alert>}
      <form onSubmit={handleSubmit} ref={formRef}>
        <FormGroup>
          <label htmlFor="email">Correo Electrónico</label>
          <Input
            inputProps={{id: 'email', name: 'email'}}
            placeholder={'Correo Electrónico'}
            error={errorMessages['email']}
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