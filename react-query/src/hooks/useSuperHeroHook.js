import { useQuery,useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = ({queryKey}) => {
    const heroId=queryKey[1]
  return axios.get("http://localhost:4000/superheroes/"+heroId);
};

const useSuperHero = (heroId,onSuccess, onError) => {
    const queryClient =useQueryClient()
  return useQuery(["superhero",heroId],fetchSuperHero, {
    onSuccess,
    onError,
    initialData:()=>{
        const hero=queryClient.getQueryData("super-heroes")?.data.find((hero)=>hero.id===parseInt(heroId))
        if(hero){
            return {
                data:hero
            }
        }
        else return undefined
    }

  });
};

export default useSuperHero;
