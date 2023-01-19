import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Card, LoadingScreen } from '../../components';
import { searchFunko } from '../../helpers';
import { Ifunko } from '../../interface/IFunko';

export const SearchPage = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const query = decodeURI(location.pathname.substring(8));
  const { isFunkoFound, funkos, isLoading, query: name } = searchFunko(query);

  if (!query && !isFunkoFound) {
    navigate('/', { replace: true })
    return;
  }

  return (
    <>
      {!isFunkoFound
        ? (<h1 className='text-center pt-4 text-4xl font-semibold'>No result found with: {name}</h1>)
        : (<h1 className='text-center pt-4 text-4xl font-semibold'>Result found with: {name}</h1>)
      }

      <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  w-auto mt-8 
      justify-items-center '>
        
        {
          isLoading
            ? <LoadingScreen />
            : (
              funkos.map((funkoItem: Ifunko) => (
                <Link to={`/products/${funkoItem.slug}`} key={funkoItem.slug} replace>
                  <Card funko={funkoItem} />
                </Link>
              ))
            )
        }
      </div>
    </>

  )
}



