import { useSearchFunkos } from "../hooks";

export const searchFunko = (funko: string) => {
      const { isLoading, funkos, query, isFunkoFound } = useSearchFunkos(funko);
      return {
            funkos,
            isFunkoFound,
            isLoading,
            query,
        }
    }