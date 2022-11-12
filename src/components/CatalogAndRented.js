import React, { Component } from 'react';



import Movie from './Movie';

class CatalogAndRented extends Component {
    
    render() {  
        const Movies = this.props.Movies
        const userConnected = this.props.userConnected         
        return (
            <div className="card-deck mt-20 ">
            <div className="row row-cols-2">                
                {Movies.map(m => {
                              return (                           
                                <div className="col-3 col-md-3">
                                  <div className="Movie-Container">
                                     <Movie refundMovie={this.props.refundMovie}
                                      userConnected={userConnected}
                                      rentMovie={this.props.rentMovie} movie={m} />
                                  </div>               
                                  </div>             
                              )
                          })}   
                    </div>                  
              </div>
            )
    }
}

export default CatalogAndRented