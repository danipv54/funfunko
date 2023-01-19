import { Link } from 'react-router-dom'
import { useGetFunkos } from '../../hooks'
import { Ifunko } from '../../interface/IFunko'
import { Card, LoadingScreen, Paginator } from './'

export const ProductList = () => {
  const { isLoading, data: funkos, page, nextPage, prevPage } = useGetFunkos();

  return (
    <>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
             w-auto mt-8 justify-items-center'>
        {
          isLoading
            ? <LoadingScreen />
            : (
              funkos.map((funkoitem: Ifunko) => (
                <Link to={`products/${funkoitem.slug}`} key={funkoitem.slug} replace>
                  <Card funko={funkoitem} />
                </Link>
              ))
            )
        }

      </div>
      <Paginator page={page} nextPage={nextPage} prevPage={prevPage}></Paginator>
    </>
  )
}

