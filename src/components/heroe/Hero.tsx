
export const Hero = () => {
  return (
    < div className="grid grid-flow-col" >
      <div className='md:flex sm:grid sm:justify-items-center sm:grid-cols-1  justify-center bg-gradient-to-r
       from-indigo-500 to-indigo-300  pl-8 py-14 px-0'>
        <div className='flex flex-col justify-center md: mb-6 sm:ml-30'>
          <p className='text-slate-50 font-semibold text-lg'>All Funkos</p>
          <h1 className='text-6xl text-slate-50 font-black mb-4'>Get a coupon</h1>
          <p className='text-slate-50 text-xl w-1/2 font-medium mb-4'>Hop on for a Wild Ride With New 
          Exclusive Disney Villain Collectibles! Shop Pop! Trains and More.</p>
          <button className='text-xl font-semibold bg-slate-100 hover:bg-indigo-600 hover:text-slate-100 
          py-4 shadow-sm rounded-2xl w-80'>Shop Collection </button>
        </div>
      </div>
  
    </div >
  )
}

