import {Switch, Route} from 'react-router-dom'


import {lazy, Suspense} from 'react';

import Navigation from './components/Navigation/Navigation';

  const HomePage = lazy(() => import('./views/HomePage.js' /* webpackChunkName: "HomePage" */));
  const MoviesPage = lazy(() => import('./views/MoviesPage.js' /* webpackChunkName: "MoviesPage" */));
  const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */));

export default function App() {  

  return (
    <>
      <Navigation />   
       
      <Suspense fallback={<h1>Loading ...</h1>}>
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
      </Suspense>
    </>
  );
}