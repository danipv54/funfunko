import { useQuery } from '@tanstack/react-query'
import { Ifunko } from '../interface/IFunko';

const fetchData = async (): Promise<Ifunko[]> => {
    const res = await fetch(`https://funkos-api-vrkk-ma9p7othf-danipv54.vercel.app/products`);
    return await res.json()
  }
  
export const useGetFunkosByCategory = (category: string) => {
  let funkos: Ifunko[];

    const { isLoading, error, data } = useQuery(['funkoItems'],
      fetchData, {
        refetchOnMount: true, refetchOnWindowFocus: false
    });
  
  
    if (!data) {
      const data = localStorage.getItem('category')
      funkos = JSON.parse(data);
      
    } else {
      funkos = data.filter((item: Ifunko) => item.category === category);
      localStorage.setItem('category', JSON.stringify(funkos));
    }
  
    return {
      error,
      funkos,
      isLoading
    }
  }
  
  
  