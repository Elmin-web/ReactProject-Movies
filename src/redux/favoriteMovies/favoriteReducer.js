const initialState = {
  movies: [],
};
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITES":
      const checkMovie = state.movies.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (checkMovie) {
        return state;
      } else {
        return {
          ...state,
          movies: [...state.movies, action.payload],
        };
      }
    case "DELETE_FAVORITE_ITEM":
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
