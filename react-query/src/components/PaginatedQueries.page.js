import { useQuery } from "react-query";
import axios from "axios";
import React, { useState } from "react";

const fetchColors = (pageNumber) => {
  return axios.get("http://localhost:4000/colors?_limit=2&_page="+pageNumber);
};

const PaginatedQuery = () => {
    const [pageNumber,setPageNumber]=useState(1);
  const { isLoading, data, isError, error, refetch } = useQuery(
   [ "colors",pageNumber],
   ()=> fetchColors(pageNumber),
   {keepPreviousData:true }

  );
  if (isLoading) {
    return <h3>loading</h3>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <>
      <h1>Paginated queries</h1>
      <ul>
        {data.data?.map((color) => (
          <li>{color.name}</li>
        ))}
      </ul>

      <button disabled={pageNumber==1} onClick={()=>setPageNumber(pageNumber-1)}>Prev</button>
      <button  disabled={pageNumber==4} onClick={()=>setPageNumber(pageNumber+1)}>Next</button>
    </>
  );
};

export default PaginatedQuery;
