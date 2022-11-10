import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/profileStyle.css'
class UserDetails extends Component {
    
    getUser=()=>{
        return this.props.getUser(this.props.userId);
    }

    render() {
        const user=this.getUser(this.props.userId)        
            
        return (           
            <form className="d-flex" role="search">               
                <p> username: {user.username}</p>             
                <p> budget: {user.budget}</p>
            </form>                     
            
            )

            
    }

    
}

export default UserDetails