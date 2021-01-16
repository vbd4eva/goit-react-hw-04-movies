import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import {lazy , Suspense} from 'react'


import s from './MovieDetailsAdditionalView.module.css'

const CastView = lazy(() => import('../CastView/CastView' /* webpackChunkName: "CastView" */));
const ReviewsView = lazy(() => import('../ReviewsView/ReviewsView' /* webpackChunkName: "ReviewsView" */));


export default function MovieDetailsAdditionalView({movieId}) {

    
    const { url, path } = useRouteMatch();
    
    return (
        <div className={s.block}>

            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to={`${url}/cast`} className={s.link} activeClassName={s.active}>Cast</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={`${url}/reviews`} className={s.link}  activeClassName={s.active}>Reviews</NavLink>
                </li>
            </ul>

            {/* <div className={s.content}> */}
                <Suspense fallback={<h1>Loading ...</h1>}>
                    <Switch>
                        <Route exact path={`${path}/cast`}>
                            <CastView/>
                        </Route>
                        <Route exact path={`${path}/reviews`}>
                            <ReviewsView/>
                        </Route>
                    </Switch>
                </Suspense>
            {/* </div> */}

        </div>
    )
}
