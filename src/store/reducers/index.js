import { combineReducers } from 'redux';
import MovieListReducer from './movieList'
import MovieReducer from './Movie';
import CastReducer from './Cast';
import MovieImagesReducer from './MovieImages';
import RecommendationsReducer from './Recommendations';
import SearchReducer from './SearchResults';
import TrailerReducer from './Trailer';
import WatchListReducer from './WatchList';
import AuthReducer from  './Auth';

const reducer = combineReducers({
  movies: MovieListReducer,
  movie: MovieReducer,
  cast: CastReducer,
  movieImages: MovieImagesReducer,
  recommendations: RecommendationsReducer,
  searchResults: SearchReducer,
  trailers: TrailerReducer,
  watchlist: WatchListReducer,
  auth: AuthReducer,
})

export default reducer