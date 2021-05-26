const store = require('./redux')
const tvShows = require('./redux/tvShows')
const movies = require('./redux/movies')

console.log('\n')

console.log(store.getState().movies)

console.log('add movie ...')
store.dispatch(movies.addMovie('Mortal Combat'))
console.log(store.getState().movies)

console.log('add movie ...')
store.dispatch(movies.addMovie('Godzilla vs. Kong'))
console.log(store.getState().movies)

console.log('add movie ...')
store.dispatch(movies.addMovie('The Meg'))
console.log(store.getState().movies)

console.log('delete movie ...')
store.dispatch(movies.deleteMovie('Mortal Combat'))
console.log(store.getState().movies)

store.dispatch(movies.moviesViewAll())
console.log(store.getState().movies)

console.log('\n')

console.log(store.getState().tvShows)

console.log('add tv show ...')
store.dispatch(tvShows.addTvShow('Game of Thrones'))
console.log(store.getState().tvShows)

console.log('add tv show ...')
store.dispatch(tvShows.addTvShow('The Sopranos'))
console.log(store.getState().tvShows)

console.log('add tv show ...')
store.dispatch(tvShows.addTvShow('Seinfeld'))
console.log(store.getState().tvShows)

console.log('delete tv show ...')
store.dispatch(tvShows.deleteTvShow('Game of Thrones'))
console.log(store.getState().tvShows)

store.dispatch(tvShows.tvShowsViewAll())
console.log(store.getState().tvShows)
console.log('\n')