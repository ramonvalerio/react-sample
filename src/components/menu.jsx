import React, { Component } from 'react'
import { childrenWithProps } from '../../utils/reactUtils'

export default class Menu extends Component{
    render(){
        return (
            <div>
                <h1>Família {this.props.lastName}</h1>
                { childrenWithProps(this.props.children, this.props) }
            </div>
        )
    }
}