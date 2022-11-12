import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/UserDetailes.css'
class UserDetails extends Component {
    
    getUser=()=>{
        return this.props.getUser(this.props.userId);
    }

    render() {
        const user=this.getUser(this.props.userId)        

        return (                         

                <div className="card card-user-body" style={{width: 10+'rem'}}>
                    <img src={user.image} className="card-img-top card-user" alt="..."/>
                    <div className="card-body card-user-body">
                    <p className="card-text">userName: {user.username} her budget is:{user.budget}</p>
                    
                </div>
                </div>
                               
            
            )

            
    }

    
}

export default UserDetails