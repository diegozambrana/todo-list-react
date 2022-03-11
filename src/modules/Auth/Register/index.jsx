import React, { useRef, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Form/Input";
import { Link } from "../../../components/Text/Link";
import { Text } from "../../../components/Text/Text";
import { FormGroup } from "../../../components/Form/FormGroup";
import { Alert } from "../../../components/Alert";

export const Register = () => {
  const [error, setError] = useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    password2: false,
  });
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleOnChange = (name, value) => {
    setData((prevData) => ({...prevData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Card>
      <Text type='sub-title' center text={'Registrar'}/>
      <form onSubmit={handleSubmit} >

        <FormGroup>
          <label htmlFor="first_name">Nombre</label>
          <Input
            inputProps={{id: 'first_name', name: 'first_name'}}
            placeholder={'Nombre'}
            value={data.first_name}
            onChange={(value) => handleOnChange('first_name', value)}
          />
        </FormGroup>


        <FormGroup>
          <label htmlFor="last_name">Apellido</label>
          <Input
            inputProps={{id: 'last_name', name: 'last_name'}}
            placeholder={'Apellido'}
            value={data.last_name}
            onChange={(value) => handleOnChange('last_name', value)}
          />
        </FormGroup>


        <FormGroup>
          <label htmlFor="email">Correo Electrónico</label>
          <Input
            inputProps={{id: 'email', name: 'email'}}
            placeholder={'Correo Electrónico'}
            value={data.email}
            onChange={(value) => handleOnChange('email', value)}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Contraseña</label>
          <Input
            inputProps={{id: 'password', name: 'password'}}
            placeholder={'Contraseña'}
            type={'password'}
            value={data.password}
            onChange={(value) => handleOnChange('password', value)}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password2">Confirmar Contraseña</label>
          <Input
            inputProps={{id: 'password2', name: 'password2'}}
            placeholder={'Confirmar Contraseña'}
            type={'password'}
            value={data.password2}
            onChange={(value) => handleOnChange('password2', value)}
          />
        </FormGroup>

        <FormGroup>
          <Button full large value={`Registrar`} type="submit"/>
        </FormGroup>

      </form>

      <p style={{textAlign: 'right'}}>
        <Link href="#" >
          Ya tienes cuenta?
        </Link>
      </p>

    </Card>
  )
}