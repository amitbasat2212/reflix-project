import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/MovieStyle.css'

class Movie extends Component {
    
    reduceBudge=()=>{
        this.props.reduceBudge()
    }

    render() {
        const movie=this.props.movie     
        return (           
          <div class="card space" style={{width: 18+'rem'}}>
            <img src={movie.img} class=" image-max card-img-top card-img-top max-images"  alt="..."/>
            <button className='plusButton'>rent Movie</button>
        
            </div>
            
            )

    }
}

export default Movie