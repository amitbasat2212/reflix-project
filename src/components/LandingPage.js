import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import '../styles/fentity-directory.css'
import User from './User';

class LandingPage extends Component {
    render() {
        const Users =this.props.users; 
        return (
            <div>
                <h1 id="Landing-title">Whos Watching?</h1>
                <div id="fentities-container">
                    {Users.map(u => {
                        return (                           
                            <div className="User-Container">
                               <User user={u} />
                            </div>                            
                        )
                    })}
                </div>
            </div>)
    }
}

export default LandingPage