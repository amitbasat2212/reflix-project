import React, { Component } from 'react';

import '../styles/profileStyle.css'
import User from './User';

class LandingPage extends Component {
    render() {
        const Users =this.props.users; 
        return (
            <div>
                 
              <div className="profiles-container">
                <span className="title">Who's watching?</span>
               
                <div className="profiles">
                    {Users.map(u => {
                        return (                           
                            <div className="User-Container">
                               <User user={u} />
                            </div>                            
                        )
                    })}
                </div>
                              
               
             </div>
           
            </div>)
    }
}

export default LandingPage