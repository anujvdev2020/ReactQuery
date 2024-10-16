import React, { useEffect } from "react"
import axios from "axios"


const  SuperHeroesPage=()=>{
    const [isLoading,setLoading]=React.useState(true)
    const [data,setData]=React.useState([])
    const [error,setError]=React.useState("")

    useEffect(()=>{
        axios.get("http://localhost:4000/superheroes").then((res)=>{
            setData(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        })
    },[])
    if(isLoading){
        return <h3>loading</h3>
    }

    if(error){
        return <h3>{error}</h3>
    }
    return  <>
     <h1>SuperHerosPage</h1>
     {data.map((item)=><div key={item.id}>
        {item.name}
     </div>)}
    </>

}

export default SuperHeroesPage