import React, { useRef, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Form/Input";
import { Link } from "../../../components/Text/Link";
import { Text } from "../../../components/Text/Text";
import { FormGroup } from "../../../components/Form/FormGroup";
import './Login.css'
import { Alert } from "../../../components/Alert";

export const Login = () => {
  const [error, setError] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData);
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
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Contraseña</label>
          <Input
            inputProps={{id: 'password', name: 'password'}}
            placeholder={'Contraseña'}
            type={'password'}
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