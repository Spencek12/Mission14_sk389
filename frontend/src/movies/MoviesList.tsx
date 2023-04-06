import { useEffect, useState } from "react";
import {Movies} from "../types/movies"

function MoviesList ()
{
    const[MoviesData, setMoviesData] = useState<Movies[]>([]);

    useEffect (() => {
    const fetchMovies = async () => {
        const rsp = await fetch('https://localhost:4000/Movies');
        const temp = await rsp.json();
        setMoviesData(temp);
    };

    fetchMovies();
    }, []);


    return (
        <>
            <div className="row">
                <h4>
                    The best movies there are!
                </h4>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Rating</th>
                        <th>Category</th>
                        <th>Edited</th>
                        <th>Lent To</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {MoviesData.map((m)=>(
                        <tr key={m.movieId}>
                            <td>{m.title}</td>
                            <td>{m.year}</td>
                            <td>{m.director}</td>
                            <td>{m.rating}</td>
                            <td>{m.category}</td>
                            <td>{m.edited}</td>
                            <td>{m.lentTo}</td>
                            <td>{m.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MoviesList;