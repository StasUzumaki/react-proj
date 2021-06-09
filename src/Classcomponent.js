import React, { Component } from 'react'
import './styles.css';

export default class Classcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        };

        this.incr = this.incr.bind(this);
        this.decr = this.decr.bind(this);
        this.reset = this.reset.bind(this);
    }
        incr(){
            this.setState(state =>({
                
                count: state.count +1
            }));    
        }

        decr(){
            this.setState (state =>({
                
                count: state.count -1
                }));    
        }

        reset(){
            this.setState({
                
                    count : 0
                })    
        }
    
    render() {
        return (
            <div>
                <button onClick={this.incr}> +</button>
                <button onClick={this.decr}> -</button>
                <button onClick={this.reset}> reset</button>
                <h1 className="hh"> SUM {this.state.count}</h1>
            </div>

        )
    }
}
