import React, { Component } from 'react';
import '../styles/MovieStyle.css'
class HomeButton extends Component {
    getMovie=(movieId)=>{
        return this.props.getMovie(movieId);
    }
    render() {         
        const movie =this.getMovie(this.props.match.params.id)
        return (
            <div class="card-deck space">
            <div class="card">
                <img class="card-img-top" src={movie.img} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">{movie.title}</h5>
                <p class="card-text">{movie.descrShort}</p>
                <p class="card-text"><small class="text-muted">{movie.budget}</small></p>
                </div>
            </div>
            </div>
            )
            
            
    }
}

export default HomeButton