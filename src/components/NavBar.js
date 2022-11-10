import React, { Component } from 'react';
import HomeButton from './buttons/HomeButton';
import MovieButton from './buttons/MoviesButton';
import '../styles/NavBarStyle.css'


class NavBar extends Component {
    render() {
         
        return (
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">            
            <a class="navbar-brand" href="#">
                <img src="https://previews.123rf.com/images/ajiwaluyo/ajiwaluyo2010/ajiwaluyo201000008/157999541-cute-corgi-dog-logo-illustration.jpg" alt="movies" width="60" height="60"/>
             </a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                   <HomeButton/>
                  </li>
                  <li class="nav-item">
                    <MovieButton/>
                  </li>                 
                </ul>
              </div>
            </div>
          </nav>)
    }
}

export default NavBar