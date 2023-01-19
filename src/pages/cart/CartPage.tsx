import { useContext } from "react";
import { UIContext } from "../../contexts";
import { EmptyCartPage } from "./EmptyCartPage";

export const CartPage = () => {
  const { setCart } = useContext(UIContext);


  if (!Boolean(setCart.length)) {
    
    return (
      <EmptyCartPage></EmptyCartPage>
    );
  }


  return (
    <>
      {setCart.map(funko => (

        <div key={funko.slug} className='grid lg:grid-cols-2 md:grid-cols-2 mb-4 px-4 sm:px-1 md:px-1 mt-8 
        justify-items-center'>

          <div className='w-3/6 rounded-2xl bg-slate-100'>
            <img className='cardImageDetails sm:w-10/12' src={funko.images[0]} alt={funko.title} />
          </div>

          <div className='flex flex-col justify-center sm:pl-8 sm:mt-8'>
            <div className='flex space-x-9'>
              <p className='text-sm'>{funko.type}</p>

            </div>

            <h1 className='text-3xl my-4 lg:w-8/12 font-bold'>{funko.title}</h1>
              <p className='font-semibold'>${funko.price} USD</p>
              <p className='font-semibold'>Quatity {funko.quatity}</p>
            <div className='mt-8 lg:w-1/2'>

              <p>{funko.description.slice(0, 60)} Size: {funko.sizes}.</p>
            </div>
          </div>
        </div>
      ))
      }
    </>
  )
}
