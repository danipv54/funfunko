import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Ifunko } from '../interface/IFunko';

const fetchData = async (page: number): Promise<Ifunko[]> => {
  let res = await fetch(`https://funkos-api-vrkk-ma9p7othf-danipv54.vercel.app/products?_page=${page}&_limit=10`);
  return await res.json();
}

export const useGetFunkos = () => {
  const [page, setPage] = useState(1)
  const { isLoading, error, data, isFetching, isPreviousData }

    = useQuery(['funkoItems', page], () => fetchData(page),
      {
        keepPreviousData: true, refetchOnMount: true,
        refetchOnWindowFocus: false
      });


  const nextPage = () => {
    if ( !data.length ) return setPage(page - 1);
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  }

  return {
    data,
    error,
    isFetching,
    isLoading,
    isPreviousData,
    page,

    //methods
    nextPage,
    prevPage

  }

}


