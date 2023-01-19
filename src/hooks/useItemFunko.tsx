import { useQuery } from '@tanstack/react-query';
import { Ifunko } from '../interface/IFunko';

const fetchData = async (): Promise<Ifunko[]> => {
  const res = await fetch(`https://funkos-5vkejquua-danipv54.vercel.app`);
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




