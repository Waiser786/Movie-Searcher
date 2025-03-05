import { useState, useEffect } from "react";
import "../css/MovieInfo.css";
import { useParams } from "react-router-dom";
import { searchMovieByID } from "../services/api";
import MovieCard from "../components/MovieCard";

function MovieInfo() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const fetchedMovie = await searchMovieByID(id);
                setMovie(fetchedMovie);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movie:", error);
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) return <p>Loading...</p>;

    if (!movie) return <p>Movie not found</p>;

    return (
        <div className="Info-grid">
            <div className="movie-info-card">
                <MovieCard movie={movie} key={movie.id} />
            </div>
            <div>
                <h2 className="movie-text ">{movie.title}</h2>
                <p className="movie-text ">{movie.tagline}</p>
                <p className="movie-text "><strong>Country of Origin: </strong>{movie.origin_country.join(", ")}</p>
                <p className="movie-text "><strong>Genre: </strong>{movie.genres.map((genre) => genre.name).join(", ")}</p>
                <p className="movie-text"><strong>Duration: </strong>{movie.runtime} minutes</p>
                <p className="movie-text"><strong> Rate: </strong>{movie.vote_average}</p>
                <p className="movie-text "><strong>Popularity: </strong>{movie.popularity}</p>
                <h3 className="movie-text ">Overview</h3>
                <p className="movie-text ">{movie.overview}</p>
            </div>
        </div>
    );
}

export default MovieInfo