import { Link } from "react-router-dom";
import { useSuggeration } from "../../hooks";
import { Ifunko } from '../../interface/IFunko';
import { getTitle } from "../../utils";

interface Props {
  funkos?: Ifunko[],
  company?: string,
  funkoShown?: string
}

export const Suggeration = ({ funkos, company, funkoShown }: Props) => {

  const { Suggeration } = useSuggeration(funkos, company, funkoShown)


  return ( 
    <div className='bg-white sm:12 md:mt-32'>
      <h1 className='sm:text-xl md:text-4xl pl-4 font-bold text-center'> People also buy</h1>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
             w-auto mt-8 justify-items-center'>
        {
          Suggeration.map((funko: Ifunko) =>

          (
            <Link to={`/products/${funko.slug}`} key={funko.slug} replace>
              <div className='sm:mt-4 mb-4 ml-8 transition ease-in-out delay-150 hover:scale-110'
                key={funko.title}>

                <div className='bg-slate-100 shadow-lg p-8 w-80 rounded-lg'>
                  <img className='mb-4 cardImage' src={funko.images[0]} alt={funko.title} />
                  <h3 className='text-black font-bold text-lg'> {getTitle(funko.title)}</h3>
                  <span>$ {funko.price}</span>
                </div>
              </div>
            </Link>
           )
          )
        }
      </div>
    </div>
  )
}

