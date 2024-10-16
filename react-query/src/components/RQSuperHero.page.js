import { Link } from "react-router-dom";
import useCutomQueryHook from "../hooks/useCustomQueryHook";
import { useState } from "react";
import { useAddSuperHeroData } from "../hooks/useCustomQueryHook";
const RQSuperHeroesPage = () => {

  const [name,setHeroName]=useState("")
  const [alterEgo,setAlterEgo]=useState("")

  const onSuccess = (data) => {
    console.log(data);
  };

  const onError = () => {
    console.log("No");
  };
  const { isLoading, data, isError, error, refetch } = useCutomQueryHook(
    onSuccess,
    onError
  );

  const {mutate: addHero}=useAddSuperHeroData()
  if (isLoading) {
    return <h3>loading</h3>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  const handleAddHeroClick=()=>{
   const hero={name,alterEgo}
   addHero(hero)
  }
  return (
    <>
      <h1>RQSuperHerosPage</h1>
      <button onClick={refetch}>Get heros</button>
      {data?.map((item) => (
        <div key={item.id}>
          <Link to={`/superhero/${item.id}`}>{item.alterEgo}</Link>
        </div>
      ))}

      <input type="text" onChange={(e)=>setHeroName(e.target.value)} placeholder="Hero name"/>
      <input type="text" onChange={(e)=>setAlterEgo(e.target.value)} placeholder="Alter Ego"/>
      <button onClick={handleAddHeroClick}>Add Hero</button>
    </>
  );
};

export default RQSuperHeroesPage;
