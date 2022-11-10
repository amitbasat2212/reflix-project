import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/profileStyle.css'
class User extends Component {
    
    loginUser=()=>{
        this.props.loginUser(this.props.user.id)
    }

    render() {
        const user=this.props.user     
        return (
           
            <div className='profile'>
                <Link to={`/Movies/User/${user.id}`}>  
                <img onClick={this.loginUser} className="image" alt="hello" src={user.image} />
                </Link>
                <span className="username">{user.username}</span>
            </div>
                       
            
            )

            
    }

    
}

export default User