import { useQuery } from '@tanstack/react-query';
import { Ifunko } from '../interface/IFunko';

const fetchData = async (): Promise<Ifunko[]> => {
  const res = await fetch(`https://funkos-api-vrkk-ma9p7othf-danipv54.vercel.app/products`);
  return await res.json()
}

export const useItemFunko = () => {
  const { isLoading, error, data, isFetching, isPreviousData } = useQuery(['funkoItems'], fetchData,
    { refetchOnWindowFocus: false, refetchOnMount: true });

  return {
    data,
    error,
    isLoading,
    isFetching,
    isPreviousData,

  }
}




