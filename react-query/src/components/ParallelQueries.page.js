import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const fetchSuperHeroes=()=>{
    return axios.get("http://localhost:4000/superheroes")
}
const fetchFriednds=()=>{
    return axios.get("http://localhost:4000/friends")
}
const ParallelQueries=()=>{
    useQuery('super-heroes',fetchSuperHeroes)
    useQuery('friends',fetchFriednds)

    return <h1>ParallelQueries</h1>
}

export default ParallelQueries