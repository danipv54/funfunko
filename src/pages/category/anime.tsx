import { Link } from 'react-router-dom';
import { Card, LoadingScreen } from '../../components';
import { useGetFunkosByCategory } from '../../hooks';
import { Ifunko } from '../../interface/IFunko';

export function AnimePage() {
  const { funkos, isLoading, } = useGetFunkosByCategory('anime');

  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 animate__animated animate__fadeIn
             md:grid-cols-2 sm:grid-cols-1  w-auto mt-8 justify-items-center '>

      {
        isLoading
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

