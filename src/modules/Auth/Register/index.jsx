import React, { useRef, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Form/Input";
import { Link } from "../../../components/Text/Link";
import { Text } from "../../../components/Text/Text";
import { FormGroup } from "../../../components/Form/FormGroup";
import { Alert } from "../../../components/Alert";
import { validate } from "../../../utils";
import { register } from "../../../apis/auth";

export const Register = () => {
  const validationFields = {
    first_name: ['required'],
    last_name: ['required'],
    email: ['required', 'email'],
    password: ['required', 'strongPassword'],
    password2: ['required'],
  }
  const [error, setError] = useState({
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password2: null,
  });
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleOnBlur = ({target: {name, value}}) => {
    setError(er => {
      let messageError = validate(value, validationFields[name]);
      if(name === 'password2' && data.password !== data.password2){
        if(messageError){
          messageError.push('Confirmar contraseña no es igual')
        }else{
          messageError = ['Confirmar contraseña no es igual']
        }
        
      }
      return {...er, [name]: messageError}
    })
  }

  const handleOnChange = (name, value) => {
    setData((prevData) => ({...prevData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    register({...data, username: data['email']}).then((response) => {
      console.log('response', response);
    }, (error) => {
      console.log(`Error`, error)
    })
  }

  return (
    <Card>
      <Text type='sub-title' center text={'Registrar'}/>
      <form onSubmit={handleSubmit} >

        <FormGroup>
          <label htmlFor="first_name">Nombre</label>
          <Input
            inputProps={{
              id: 'first_name',
              name: 'first_name',
              onBlur: handleOnBlur
            }}
            placeholder={'Nombre'}
            value={data.first_name}
            onChange={(value) => handleOnChange('first_name', value)}
            error={error.first_name}
          />
        </FormGroup>


        <FormGroup>
          <label htmlFor="last_name">Apellido</label>
          <Input
            inputProps={{
              id: 'last_name',
              name: 'last_name',
              onBlur: handleOnBlur
            }}
            placeholder={'Apellido'}
            value={data.last_name}
            onChange={(value) => handleOnChange('last_name', value)}
            error={error.last_name}
          />
        </FormGroup>


        <FormGroup>
          <label htmlFor="email">Correo Electrónico</label>
          <Input
            inputProps={{
              id: 'email',
              name: 'email',
              onBlur: handleOnBlur
            }}
            placeholder={'Correo Electrónico'}
            value={data.email}
            onChange={(value) => handleOnChange('email', value)}
            error={error.email}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Contraseña</label>
          <Input
            inputProps={{
              id: 'password',
              name: 'password',
              onBlur: handleOnBlur
            }}
            placeholder={'Contraseña'}
            type={'password'}
            value={data.password}
            onChange={(value) => handleOnChange('password', value)}
            error={error.password}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password2">Confirmar Contraseña</label>
          <Input
            inputProps={{
              id: 'password2',
              name: 'password2',
              onBlur: handleOnBlur
            }}
            placeholder={'Confirmar Contraseña'}
            type={'password'}
            value={data.password2}
            onChange={(value) => handleOnChange('password2', value)}
            error={error.password2}
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