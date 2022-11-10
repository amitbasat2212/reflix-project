import React, { Component } from 'react';

import { Link} from 'react-router-dom'

class MovieButton extends Component {
    render() {         
        return (
            <div>
                <Link className='linkColor' to={`/Movies/user/${this.props.userConnected.id}`}>
                 <a className="nav-link active link" aria-current="page" href="#">Movies</a>
                </Link>
            </div>
            )
    }
}

export default MovieButton