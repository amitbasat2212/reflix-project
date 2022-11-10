import React, { Component } from 'react';
import Users from './Users'
import '../styles/profileStyle.css'


class LandingPage extends Component {
    render() {
        const users =this.props.users; 
        return (
            <div>                 
              <Users loginUser={this.props.loginUser} users={users}/>
            </div>)
    }
}

export default LandingPage