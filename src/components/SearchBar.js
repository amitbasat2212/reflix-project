import React, { Component} from 'react'

export default class SearchBar extends Component {

  constructor(){
    super()
    this.state=({
        serchValue:0
    })

  }  
  
  
  filterTheMovies=()=>{
    this.props.FilterTheMovies(this.state.serchValue)
  }

  SetSearchValue=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
  }

  render() {
    return (
      <div className="input-group">
        <input name='serchValue'  onChange={this.SetSearchValue} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" onClick={this.filterTheMovies} className="btn btn-outline-primary">search</button>
      </div>
    )
  }
}
