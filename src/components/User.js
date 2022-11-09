import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/profileStyle.css'
class User extends Component {
    
    render() {
        const user=this.props.user     
        return (
            <Link to={`/Movies/User/${user.id}`}>  
            <div className='profile'>
                <img className="image" alt="hello" src={user.image} />
                <span className="username">{user.username}</span>
            </div>
            </Link>           
            
            )

            
    }

    
}

export default User