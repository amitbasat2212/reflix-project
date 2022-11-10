import React, { Component } from 'react';

import { Link} from 'react-router-dom'

class MovieButton extends Component {
    render() {
         
        return (
            <div>
                <Link className='linkColor' to="/Movies">
                 <a class="nav-link active" aria-current="page" href="#">Movies</a>
                </Link>
            </div>
            )
    }
}

export default MovieButton