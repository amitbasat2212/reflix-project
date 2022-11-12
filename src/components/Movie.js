import React, { Component } from 'react';

import { Link} from 'react-router-dom'
import '../styles/MovieStyle.css'

class Movie extends Component {

   
    
    rentMovie=()=>{     
       this.props.rentMovie(this.props.userConnected,this.props.movie.id)
    }

    refundMovie=()=>{
        this.props.refundMovie(this.props.userConnected,this.props.movie.id)
    }

    render() {
        const movie=this.props.movie        
        return (           
          <div className="card space" style={{width: 18+'rem'}}>
            <Link to={`/Movies/${this.props.movie.id}`}>
            <img src={movie.img} className=" image-max card-img-top card-img-top max-images"  alt="..."/>
            </Link>
            {movie.isRented?
            <button onClick={this.refundMovie} className='ButtonMovie'>return movie</button>
            :<button onClick={this.rentMovie} className='ButtonMovie'>rent Movie</button>}      
            </div>            
            )

    }
}

export default Movie