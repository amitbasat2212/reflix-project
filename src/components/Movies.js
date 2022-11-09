import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/MovieStyle.css'
import RentedMovies from './RentedMovies';

import Movie from './Movie';
import Catalog from './Catalog';

class Movies extends Component {

    

    render() {     
        const Movies = this.props.Movies    
        return (
            <div className="movie-list-container">
            <h2 className="title">Trending Now</h2>
           
            <div className="movies">  
            <div class="row row-cols-2">
                {Movies.map(m => {
                              return (                           
                                <div class="col-3 col-md-3">
                                  <div className="Movie-Container">
                                     <Movie reduceBudge={this.props.reduceBudge} movie={m} />
                                  </div>               
                                  </div>             
                              )
                          })}        
               
              </div>
            </div>
          </div>)

          
          
    }
}

export default Movies