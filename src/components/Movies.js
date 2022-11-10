import React, { Component } from 'react';

import '../styles/MovieStyle.css'


import CatalogAndRented from './CatalogAndRented';
import UserDetails from './UserDetailes';
class Movies extends Component {   

    render() {     
        const Movies = this.props.Movies 
        const rentedMovies=this.props.MoviesRented  
        const userConnected = this.props.match.params.id 
        return (
            <div>
           <div className="movie-list-container">
              <UserDetails userId={userConnected} getUser={this.props.getUser}/>            
            <h2 className="title">catagories</h2>  
             <div className="movies">               
                <CatalogAndRented refundMovie={this.props.refundMovie}
                  rentMovie={this.props.rentMovie}
                  userConnected={userConnected}
                  Movies={Movies}/>                 
                </div>
          </div>
          
          <div className="movie-list-container">
          <h2 className="title">rented</h2>  
            {rentedMovies.length!=0?
                <div className="Rented">
                 <CatalogAndRented
                 refundMovie={this.props.refundMovie}
                 rentMovie={this.props.rentMovie}
                 userConnected={userConnected}
                 Movies={rentedMovies} />
                </div>:null}
                </div>
            </div>
 
          
          )

          
          
    }
}

export default Movies