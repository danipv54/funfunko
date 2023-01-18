import { useNavigate } from 'react-router-dom';

export const  NoFound=() =>{
  let navigate = useNavigate();
  setTimeout(() => {
    navigate('/', { replace: true })

  }, 3000);

  return (
    <>
      <div className=' mt-8 '>
        <h1 className=' text-6xl font-bold text-center'> Page no Found :( </h1>
        <p className='text-center text-xl mt-4'>Redirecting you to home page 
        <span className='animate-ping duration-700 font-black'>  ... </span></p>
      </div>
    </>
  )
}
