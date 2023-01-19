import { useQuery } from '@tanstack/react-query';
import { Ifunko } from '../interface/IFunko';

const fetchData = async (): Promise<Ifunko[]> => {
  const res = await fetch(`https://funkos-5vkejquua-danipv54.vercel.app`);
  return await res.json();
}

export const useSearchFunkos = (query: string) => {
  let funko = query.toLowerCase();
  let isFunkoFound = true;
  let funkos;

  const { error, isLoading, data, }: any = useQuery(['funkoItems'], fetchData,
    {
      refetchOnWindowFocus: false
    });
    

    funkos=data.filter((item: Ifunko) => item.license === funko);
    
    if (!funkos.length) {
      funkos = data;
      isFunkoFound = false;
    }


  return {
    error,
    query,
    funkos,
    isLoading,
    isFunkoFound,
  }
}
