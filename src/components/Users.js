import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import User from './User';
import '../styles/profileStyle.css'
class Users extends Component {
    
    render() {    
        const Users=this.props.users         
        return (         
            <div className="profiles-container">
            <span className="title">Who's watching?</span>           
            <div className="profiles">
                {Users.map(u => {
                    return (                           
                        <div className="User-Container">
                           <User loginUser={this.props.loginUser}  user={u} />
                        </div>                            
                    )
                })}
            </div>                   
           
         </div>  )                    
            
            

            
    }

    
}

export default Users