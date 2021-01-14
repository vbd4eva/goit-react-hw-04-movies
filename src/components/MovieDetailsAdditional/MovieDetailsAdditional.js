import {NavLink, Switch, Route, useRouteMatch}  from 'react-router-dom'

import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'

import s from './MovieDetailsAdditional.module.css'



export default function MovieDetailsAdditional({movieId}) {

    
    const { url, path } = useRouteMatch();
    
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={`${url}/cast`} >Cast</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/reviews`} >Reviews</NavLink>
                </li>
            </ul>

            <Switch>
                <Route exact path={`${path}/cast`}>
                    <Cast/>
                </Route>
                <Route exact path={`${path}/reviews`}>
                    <Reviews/>
                </Route>
            </Switch>
        </div>
    )
}
