import 'animate.css';
import { Link } from 'react-router-dom';
import { Card, LoadingScreen } from '../../components';
import { useGetFunkosByCategory } from '../../hooks';
import { Ifunko } from '../../interface/IFunko';

export const HeroesVillainsPage = () => {
  const { funkos, isLoading, } = useGetFunkosByCategory('heroes-villians');

  return (
    <div className='grid  xl:grid-cols-4 lg:grid-cols-3   md:grid-cols-2 sm:grid-cols-1  w-auto mt-8 
    justify-items-center animate__animated animate__fadeIn'>

      { isLoading
          ? <LoadingScreen />
          : (
            funkos.map((funkoitem: Ifunko) => (
              <Link to={`/products/${funkoitem.slug}`} key={funkoitem.slug} replace>
                <Card funko={funkoitem} />
              </Link>
            ))
          )
      }
    </div>
  )
}

