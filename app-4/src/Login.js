import React, { Component } from 'react';

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    userName(val){
        this.setState({
            username: val
        })
    }
    passWord(val){
        this.setState({
            password: val
        })
    }
    alertUser(val){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input className="inputLine" onChange={(e) => this.userName(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.passWord(e.target.value)}></input>
                <button onClick={() => {this.alertUser(this.state.alert)}}>Login</button>
            </div>
        )
    }
}