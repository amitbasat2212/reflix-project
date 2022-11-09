import React, { Component } from 'react';

import '../styles/MovieStyle.css'


import CatalogAndRented from './CatalogAndRented';

class Movies extends Component {

    render() {     
        const Movies = this.props.Movies 
        const rentedMovies=this.props.MoviesRented  
        const userConnected = this.props.match.params.id 
        return (
            <div className="movie-list-container">
            <h2 className="title">Movies</h2>  
               {rentedMovies.length!=0?
               <div className="Rented"><CatalogAndRented Movies={rentedMovies} />
               </div>:null}

               <div className="movies">  
                <CatalogAndRented  rentMovie={this.props.rentMovie} userConnected={userConnected} Movies={Movies}/> 
                </div>
          </div>)

          
          
    }
}

export default Movies