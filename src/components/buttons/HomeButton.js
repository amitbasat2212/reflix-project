import React, { Component } from 'react';
import { Link} from 'react-router-dom'


class HomeButton extends Component {
    render() {
         
        return (
            <div>
                <div>
                <Link className='linkColor' to="/">
                 <a class="nav-link active" aria-current="page" href="#">Home</a>
                </Link>
            </div> 
            </div>
            )
    }
}

export default HomeButton