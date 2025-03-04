import { useState, useEffect } from "react";
import "../css/MovieInfo.css";
import { useParams } from "react-router-dom";
import { searchMovieByID } from "../services/api";

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

    if (loading) return <h1>Loading...</h1>;

    if (!movie) return <h1>Movie not found</h1>;


    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    );
}

export default MovieInfo