import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like"

class Movies extends Component {
    state = { movies: getMovies() }



    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({
            movies: movies
        })
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })

    }


    render() {
        const { length: count } = this.state.movies;

        const table = <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (<tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
                    <td onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</td>
                </tr>))}

            </tbody>
        </table>;

        if (count === 0) return <p>There are no movies in the database.</p>
        return (
            <>
                <p>Showing {count} movies in the database.</p>
                {table}
            </>
        );
    }
}

export default Movies;