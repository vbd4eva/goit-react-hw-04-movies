import {Switch, Route} from 'react-router-dom'


import Navigation from './components/Navigation/Navigation';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

export default function App() {  

  return (
    <>
      <h1>App.js</h1>
        <Navigation />        

      <Switch>
        <Route path="/movies" exact>
          <MoviesPage/>        
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage/>
        </Route>

        <Route>
          <HomePage/>
        </Route>
      </Switch>
    </>
  );
}