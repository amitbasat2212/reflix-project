import React, { Component } from 'react';
import HomeButton from './buttons/HomeButton';
import MovieButton from './buttons/MoviesButton';
import '../styles/NavBarStyle.css'


class NavBar extends Component {
    render() {    
        const userConnected=this.props.userConnected;     
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">            
            <a className="navbar-brand" href="#">
                <img src="https://previews.123rf.com/images/ajiwaluyo/ajiwaluyo2010/ajiwaluyo201000008/157999541-cute-corgi-dog-logo-illustration.jpg" alt="movies" width="60" height="60"/>
             </a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                   <HomeButton/>
                  </li>
                  <li className="nav-item">
                    <MovieButton userConnected={userConnected}/>
                  </li>                 
                </ul>
              </div>
            </div>
          </nav>)
    }
}

export default NavBar