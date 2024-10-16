import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import useSuperHero from "../hooks/useSuperHeroHook";
const SuperHero = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error, refetch } = useSuperHero(id);
  if (isLoading) {
    return <h3>loading</h3>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <>
      <h1>Super hero</h1>
      <h2>{data?.data.name}-{data?.data.alterEgo}</h2>
    </>
  );
};

export default SuperHero;
