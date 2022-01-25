import React from 'react';

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
        <div>{saludo} {nombre}</div>
    )
}