import React, { Component } from 'react'

export default class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
    }

    sum(delta){
        this.setState( { value: this.state.value + delta})
        //this.setState( { ...this.state, value: this.state.value + delta})
    }

    render(){
        return (
            <div className="contador">
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Decrement</button>
                <button onClick={() => this.sum(1)}>Increment</button>
            </div>
        )
    }
}