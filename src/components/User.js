import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import '../styles/fentity-directory.css'

class User extends Component {
    
    render() {
        const user=this.props.user     
        return (
            <div>
              <h2>{user}</h2>                
            </div>)
    }
}

export default User