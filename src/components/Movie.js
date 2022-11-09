import React, { Component } from 'react';

import '../styles/MovieStyle.css'

class Movie extends Component {
    
    rentMovie=()=>{
        this.props.rentMovie(this.props.userConnected,this.props.movie.id)
    }

    returnMovie=()=>{
        this.props.returnMovie(this.props.userConnected,this.props.movie.id)
    }

    render() {
        const movie=this.props.movie        
        return (           
          <div className="card space" style={{width: 18+'rem'}}>
            <img src={movie.img} className=" image-max card-img-top card-img-top max-images"  alt="..."/>
            {movie.isRented?
            <button onClick={this.returnMovie} className='ButtonMovie'>return movie</button>
            :<button onClick={this.rentMovie} className='ButtonMovie'>rent Movie</button>}      
            </div>            
            )

    }
}

export default Movie