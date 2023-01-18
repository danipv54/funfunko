import { FC } from 'react'
import { Ifunko } from '../../interface/IFunko'
import { getTitle } from '../../utils'

interface Props {
  funko: Ifunko
}

export const Card: FC<Props> = ({ funko }) => {
  return (
    <div className='flex flex-col sm:mt-4 mb-4  '>
      <div className='bg-slate-100 shadow-lg p-8 w-80 rounded-lg'>

        {(funko.inStock === 0)
          ?
          (
            <div className='flag-container'>
              <p className='flag text-center rounded-lg bg-red-300 font-bold'>Out of stock </p>
            </div>
          )
          : <></>
        }

        <img className='mb-4 cardImage' src={funko.images[0]} alt={funko.title} />
        <h3 className='text-black font-bold text-lg'> {getTitle(funko.title)}</h3>
        <span>$ {funko.price}</span>
      </div>

    </div>
  )
}

