import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/MovieStyle.css'


import CatalogAndRented from './CatalogAndRented';

class Movies extends Component {



    render() {     
        const Movies = this.props.Movies 
        const rentedMovies=this.props.MoviesRented   
        return (
            <div className="movie-list-container">
            <h2 className="title">Movies</h2>  
               {rentedMovies.length!=0?<div className="Rented"><CatalogAndRented Movies={rentedMovies} /></div>:null}
               <div className="movies">  
               <CatalogAndRented Movies={Movies}/> 
                </div>
          </div>)

          
          
    }
}

export default Movies