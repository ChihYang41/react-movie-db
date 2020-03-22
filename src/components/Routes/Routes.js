import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Loading from '../loading/Loading'

const Movies = React.lazy(() => import('../../containers/Movies'))
const Movie = React.lazy(() => import('../../containers/Movie'))
const SearchResults = React.lazy(() => import('../../containers/SearchResults'))
const RegisterForm = React.lazy(() => import('../../containers/Register'))
const LoginForm = React.lazy(() => import('../../containers/Login'))
const WatchList = React.lazy(() => import('../../containers/WatchList'))

export default function Routes() {
  return (
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/watchlist" component={WatchList} />
        <Route exact path="/movie/:movie_id" component={Movie} />
        <Route exact path="/search/:query" component={SearchResults} />
        <Route exact path="/:filter?/:page" component={Movies} />
        <Redirect to="/popular/1" />
      </Switch>
    </Suspense>
  )
}
