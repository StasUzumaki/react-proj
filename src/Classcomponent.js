import React, { Component } from 'react'

export default class Classcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Stanislas"
        };

        this.handleClick = this.handleClick.bind(this);
    }
        handleClick(){
            this.setState({
                
                    name :"Sorry bro but im Stanislav"
                })
            
        
    }
    
    render() {
        return (
            <div>
                
                <h1>Hello my dear {this.state.name}!</h1>
                <button onClick={ this.handleClick}> Click me </button>
            </div>
        )
    }
}
