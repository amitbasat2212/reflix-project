import React, { Component } from 'react';

import '../styles/MovieStyle.css'



import CatalogAndRented from './CatalogAndRented';
import UserDetails from './UserDetailes';
import SearchBar from './SearchBar';
import {findWord} from '../AppUtils'
class Movies extends Component {   

    constructor(){
        super()
        this.state=({
            SerachValue:"",
            MoviesFilter:[],
            MovieRentedFilter:[]
        })
    }
    
    SetSearchValuesAndFilter=(serchValue,MoviesNotRentedFilter,movieRented)=>{        
        this.setState({
            SerachValue:serchValue,
            MoviesFilter:MoviesNotRentedFilter,
            MovieRentedFilter:movieRented
        })
        
      } 

      FilterTheMovies=(serchValue)=>{
        const moviesNotRented = this.props.Movies.filter(m=>findWord(serchValue.toLowerCase(),m.title))
        const movieRented = this.props.MoviesRented.filter(m=>findWord(serchValue.toLowerCase(),m.title))
        this.SetSearchValuesAndFilter(serchValue,moviesNotRented,movieRented)
        
      }

    render() {     
        const Movies = this.state.SerachValue==""?this.props.Movies:this.state.MoviesFilter
        const rentedMovies= this.state.SerachValue==""?this.props.MoviesRented:this.state.MovieRentedFilter 
        const userConnected = this.props.match.params.id 

        return (
            <div>
                <SearchBar  FilterTheMovies={this.FilterTheMovies} />
                <div className='user-detailes'>
                    <UserDetails userId={userConnected} getUser={this.props.getUser}/> 
                </div>
         <div className="movie-list-container">          
            {rentedMovies.length!=0?            
                    <div className="Rented">
                    <h2 className="title headline space">rented</h2>  
                    <CatalogAndRented
                    refundMovie={this.props.refundMovie}
                    rentMovie={this.props.rentMovie}
                    userConnected={userConnected}
                    Movies={rentedMovies} />
                    </div>:null}
                </div>
           <div className="movie-list-container">
           
            <h2 className="title headline space">catagories</h2>  
             <div className="movies">               
                <CatalogAndRented refundMovie={this.props.refundMovie}
                  rentMovie={this.props.rentMovie}
                  userConnected={userConnected}
                  Movies={Movies}/>                 
                </div>
          </div>
          
          
            </div>
 
          
          )

          
          
    }
}

export default Movies