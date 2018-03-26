import React, { Component } from 'react'

export default class Field extends Component{
    constructor(props){
        super(props)
        this.state = { value: props.initialValue } // Componente com estado controlado
        //this.state = { value: undefined } // Componente com estado sem controle
        this.handleChange = this.handleChange.bind(this) // Faz com que o escopo do this da função handleChange seja referenciada ao componente field
    }

    handleChange(event){
        this.setState({ value: event.target.value }) // The 'target' object is the input that triggered the event
    }

    render(){
        return (
            <div>
                <br />
                <label>{this.state.value}</label><br />
                {/* <input onChange={this.handleChange} value={this.state.value} /> */}
                <input value={this.state.value} />
            </div>
        )
    }
}

//export default Field