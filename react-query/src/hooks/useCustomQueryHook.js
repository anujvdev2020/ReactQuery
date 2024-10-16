import { useQuery ,useMutation} from "react-query";
import axios from "axios";

const fetchSuperHeroes = (url) => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero=(hero)=>{
  return axios.post("http://localhost:4000/superheroes",hero)
}

const useCustomQueryHook = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    select: (data) => {
      const superheroes = data.data.map((hero) => hero);
      return superheroes;
    },
  });
};

export const useAddSuperHeroData=()=>{
  return useMutation(addSuperHero)
}

export default useCustomQueryHook;
