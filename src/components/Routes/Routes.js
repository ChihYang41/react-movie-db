import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Movies from '../../containers/Movies'
import Movie from '../../containers/Movie'
import SearchResults from '../../containers/SearchResults'
import RegisterForm from '../../containers/Register'
import LoginForm from '../../containers/Login'
import WatchList from '../../containers/WatchList'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/watchlist" component={WatchList} />
      <Route exact path="/movie/:movie_id" component={Movie} />
      <Route exact path="/search/:query" component={SearchResults} />
      <Route exact path="/:filter?/:page" component={Movies} />
      <Redirect to="/popular/1" />
    </Switch>
  )
}
