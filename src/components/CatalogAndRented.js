import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import '../styles/fentity-directory.css'

import Movie from './Movie';

class CatalogAndRented extends Component {
    
    render() {  
        const Movies = this.props.Movies         
        return (
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
            )
    }
}

export default CatalogAndRented