import { useContext, useState } from 'react';
import { UIContext } from '../../contexts';
import { useItemFunko } from '../../hooks';
import { Ifunko } from '../../interface/IFunko';
import { getProductStock } from '../../utils';
import { LoadingScreen } from './LoadingScreen';
import { Suggeration } from './Suggeration';

export const Item = ({ slug }: { slug: any }) => {
  let funko: Ifunko;
  let stock: number[] | number;
  let { setCart } = useContext(UIContext);
  let { isLoading, data } = useItemFunko();
  const [quatityValue, setQuatityValue] = useState(1);

  if (!data) {
    const reqData = localStorage.getItem('funko')
    funko = JSON.parse(reqData);
    stock = getProductStock(Number(funko.inStock))
  }
  else {
    funko = data.find((item: Ifunko) => item.slug === slug);
    localStorage.setItem('funko', JSON.stringify(funko));
    stock = getProductStock(Number(funko.inStock));
  }

  const onInputValue = ({ target }) => {
    setQuatityValue(target.value)
  }

  const onAddCard = () => {

    const { description, images, license, sizes, title, type, slug, price, category } = funko;

    const cartItem = {
      category,
      description,
      images,
      license,
      price,
      quatity: +quatityValue,
      sizes,
      slug,
      title,
      type,
    }

    setCart.push(cartItem)
    console.log(setCart)
  }


  return (
    <>
      {
        isLoading

          ? <LoadingScreen />

          : (
            <div className='grid lg:grid-cols-2 md:grid-cols-2 mb-4 px-8 sm:px-1 md:px-1 mt-8 justify-items-center'>
              <div className='w-3/5 rounded-2xl bg-slate-100'>
                <img className='cardImageDetails sm:w-11/12' src={funko.images[0]} alt={funko.title} />
              </div>

              <div className='flex flex-col justify-center sm:pl-8 sm:mt-8'>
                <div className='flex space-x-9'>
                  <p className='text-sm'>{funko.type}</p>
                  <div>
                    {
                      (funko.inStock <= 10 && funko.inStock > 0)
                        ?
                        (<span className='bg-yellow-100 px-4  py-1 rounded-lg'> Only {funko.inStock} in
                          stock</span>)
                        :
                        (funko.inStock === 0)
                          ? (<span className='bg-red-100 px-4  py-1 rounded-lg'> Out stock</span>)
                          : <></>
                    }
                  </div>
                </div>

                <h1 className='text-3xl my-4 lg:w-8/12 font-bold'>{funko.title}</h1>

                <p className='font-semibold'>${funko.price} USD</p>

                <div className='flex space-x-2 justify-items-center my-2'>
                  <p className='m-0'>or 4 interest-free payments of ${funko.price / 4} with </p>
                  {
                    funko.inStock === 0
                      ? <button disabled className='bg-slate-400 text-slate-300  rounded-full px-6 py-1
                       font-semibold'> Afterpay </button>

                      : <button className='bg-teal-200 hover:bg-teal-500 rounded-full px-6 py-1 
                      font-semibold'>Afterpay</button>
                  }
                </div>

                <div className='flex space-x-0'>
                  {
                    (funko.inStock == 0)
                      ? (
                        <select disabled className='bg-slate-800 text-slate-100 rounded-l-full pl-2 
                        shadow-md mr-1'>
                        </select>
                      )
                      : (
                        <select className='bg-slate-800 text-slate-100 rounded-l-full pl-2 shadow-md mr-1'
                          value={quatityValue} onChange={onInputValue}>
                          {
                            stock.map(value => (
                              <option key={value} value={`${value}`}>{value}</option>
                            ))
                          }
                        </select>
                      )
                  }
                  {
                    funko.inStock === 0
                      ? <button disabled className='bg-slate-400 text-slate-100 text-center px-6 py-1
                           rounded-r-full shadow-md'>Add to cart
                      </button>
                      : <button onClick={onAddCard} className='bg-slate-800 hover:bg-indigo-500
                       text-slate-100 text-center
                       px-6 py-1 rounded-r-full shadow-md'>Add to cart
                      </button>
                  }

                </div>

                <div className='mt-8 lg:w-1/2'>
                  <p>{funko.description} Size: {funko.sizes}.</p>
                </div>

              </div>
            </div>
          )
      }
      <Suggeration funkos={data} company={funko.company} funkoShown={funko.title} />
    </>
  )
}
