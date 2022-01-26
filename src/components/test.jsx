import React from 'react';

import './test.css';
export default class TestClass extends React.Component{
    constructor(){
        super();
        this.state = {
            saludo: 'Hola como estas'
        }
    }

    componentDidMount(){
        console.log(`el componente se ha creado`)
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }

    render(){
        return (
            <div>{this.state.saludo} {this.props.nombre}</div>
        )
    }
}

export const TestFunction = ({nombre}) => {
    const [saludo, setSaludo] = React.useState('hola como estas');



    React.useEffect(() => {
        console.log(`el componente funcion se ha creado `)
        return () => {
            console.log(`el componente funcion se ha desmontado `)
        }
    }, [])

    React.useEffect(() => {
        console.log(`nombre`, nombre)
    }, [nombre])

    return (
        <div style={{
            color: 'red',
            margin: '16px 0',
        }}>{saludo} {nombre}</div>
    )
}

export const Parent = (props) => <p style={{fontWeight: 'bold'}}>{props.children}</p>

export const ComponenteF = (props) => {
    const [contador, setContador] = React.useState(0);

    const execute = () => {
        setContador(contador + 1);
        if(props.onClick){ props.onClick(contador + 1) }
        // <ComponenteF onClick={(e) => console.log(e)} />
    }

   return (
       <button className="button" onClick={execute}>Contador: {contador}</button>
    )
}