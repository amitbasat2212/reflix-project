import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import LandingPage from './components/LandingPage';

import Movies from './components/Movies';
import NavBar from './components/NavBar';
import MovieDetailes from './components/MovieDetailes';
import {ChangeRentedMoviesInState,changeUserBudget,findWord,changeIsRentedInMovies}  from './AppUtils';

class App extends Component {
  constructor() {
    super()
    this.state = {
     Movies:[
        { id: 0, isRented: false, title: "a corgi is born", year: 1999, img: "https://static.boredpanda.com/blog/wp-content/uploads/2019/02/corgi-movie-posters-photoshop-5c73c8a259c15__700.jpg", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out."},
        { id: 1, isRented: false, title: "max", img: "https://img.buzzfeed.com/buzzfeed-static/static/2020-02/4/16/asset/c7fec37ba9e9/sub-buzz-6152-1580832662-1.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies."},
        { id: 2, isRented: false, title: "corgzila", year: 1991, img: "https://i.pinimg.com/236x/a1/f5/f2/a1f5f26e0186a47dba98bcaa9de1530d--dorm-life-horse-posters.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself."},
        { id: 3, isRented: false, title: "corgnun", year: 1963, img: "https://static.boredpanda.com/blog/wp-content/uploads/2019/02/corgi-movie-posters-photoshop-5c73c8c219ae9__700.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means."},
        { id: 4, isRented: false, title: "the corgodfuter", year: 2016, img: "https://i.pinimg.com/originals/6a/6f/85/6a6f85809991f979b402c0164a9a1780.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation."},
        { id: 5, isRented: false, title: "the corgi panter", year: 2016, img: "https://i.pinimg.com/originals/36/53/b9/3653b9b0cffb99cfa03bd4c19ea92ba7.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation."}
      ],
      Users:[
            {id:0,username:"Adi",image:"https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg",budget:20000},
            {id:1,username:"Moriel",image:"https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg",budget:30000},
            {id:2,username:"Yael",image:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",budget:40000},
            {id:3,username:"Shalev",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU33Io5Mgoxj4Hil4F0ctBZUBEXhoQd9fYEg&usqp=CAU",budget:50000},
        ],  
     
      rentedMovies:[],
      MoviePrice:3,
      
      userConnected:{id:0,username:"Adi",image:"https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg",budget:20000},
    }
  }

  
  
  setUsersAndMoviesProperties=(users,movies,rentedMovies)=>{    
    this.setState({
        Users:users,
        Movies:movies,
        rentedMovies:rentedMovies
    })
  }

  changingTheStateOfMoviesAndUsers=(userId,movieId,opertor,isRentedOrReturn)=>{
    const users=[...this.state.Users]
    const movies=[...this.state.Movies]
    const rentedMovies = [...this.state.rentedMovies]
    let movie=this.state.Movies.find(m=>m.id==parseInt(movieId));   
    let budgetForMovie = this.state.MoviePrice

    changeIsRentedInMovies(movies,movieId,isRentedOrReturn) 
    ChangeRentedMoviesInState(rentedMovies,movieId,movie) 
    changeUserBudget(users,userId,budgetForMovie,opertor) 
    this.setUsersAndMoviesProperties(users,movies,rentedMovies)
   
  }
  

  getUser=(userId)=>{
    return this.state.Users.find(u=>u.id==parseInt(userId));
    
  }

  

  FilterTheMoviesBySearch=(serchValue)=>{
    return this.stat
  }


  loginUser=(userId)=>{
    const user = this.state.Users.find(u=>u.id==parseInt(userId))
    this.setState({
        userConnected:user
    })
  }

  getMovie=(movieId)=>{
    return this.state.Movies.find(u=>u.id==parseInt(movieId));
  }


  rentMovie=(userId,movieId)=>{
    this.changingTheStateOfMoviesAndUsers(userId,movieId,1,true)
   
  }

  refundMovie=(userId,movieId)=>{
    this.changingTheStateOfMoviesAndUsers(userId,movieId,-1,false)
  }

  
  
  render() {
    const stateMovies = this.state.Movies
    const users =this.state.Users;
    const rentedMovies =this.state.rentedMovies;
    const userConnected = this.state.userConnected;
    return (
      <Router>
      <div className="App">
        <div id="home-background"></div>
        <div id="main-links">
            <NavBar userConnected={userConnected}/>      
            
        </div> 
        <div>     
        <Route path="/" exact render={() => <LandingPage
        loginUser={this.loginUser} 
        users={users} />} />    

        <Route path="/Movies/User/:id" exact render={({ match }) =>
         <Movies match={match}
          getUser={this.getUser}
          MoviesRented={rentedMovies}
          Movies={stateMovies}
          rentMovie={this.rentMovie}       
          refundMovie={this.refundMovie} 
          SetSearchValueInAppState={this.SetSearchValueInAppState}
          />} />       
       
        <Route path="/Movies/:id" exact render={({match}) => 
        <MovieDetailes match={match} getMovie={this.getMovie}/>} />  
        </div>       
      </div>
      </Router>
    );  
  }
}

export default App;
