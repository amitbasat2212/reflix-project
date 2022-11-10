
    export const ChangeRentedMoviesInState=(rentedMovies,movieId,movie)=>{
        if(rentedMovies.length==0){
            rentedMovies.push(movie) 
        }else{
            const movieRented = rentedMovies.findIndex((m) => m.id === parseInt(movieId));
            if(movieRented>=0){
                rentedMovies.splice(movieRented, 1);
            }else{
                rentedMovies.push(movie)
            }
    
        }   
        
        
      }
    
       
      export const changeIsRentedInMovies=(movies,movieId,isRentedOrReturn)=>{
        movies.forEach((element) => {
            if(element.id === parseInt(movieId)) {            
                element.isRented=isRentedOrReturn;
            }
        });    
      }
    
      export const changeUserBudget=(users,userId,movie,opertor)=>{
        users.forEach((element) => {
            if(element.id === parseInt(userId)) {
                const budget = opertor*movie.budget
                element.budget-=budget;
            }
        }); 
      }
    
    
      

export default {ChangeRentedMoviesInState,changeUserBudget,changeIsRentedInMovies}

