import { Ifunko } from './../interface/IFunko';

export const useSuggeration = (funkos, company, funkoShown) => {
  let Suggeration: Ifunko[];

  if (!funkos) {
    const cache = JSON.parse(localStorage.getItem('funkoCache'))
    funkos = cache;
  }

  const getSuggerationFunko = funkos.filter((funko: Ifunko) => funko.title !== funkoShown);
  
  localStorage.setItem('funkoCache', JSON.stringify(funkos));

  Suggeration = getSuggerationFunko.filter((funko: Ifunko) => funko.company === company).slice(1, 5);

  if (!Suggeration.length) {
    Suggeration = getSuggerationFunko.slice(4, 8);
  }

  return {
    Suggeration
  }

}
