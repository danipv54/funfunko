import { useForm } from "react-hook-form";

export const User = () => {
  const { register, handleSubmit } = useForm();

  const formData = (inputs: any) => {
  }
  
  return (
    <div className=' py-8'>
      <h1 className='text-center text-3xl font-semibold'>  Fulano's profile</h1>

      <div className=' flex pt-8 px-8 space-x-5 justify-center'>
        <div className='w-full  flex flex-col space-y-4 bg-slate-100 shadow-lg rounded-md items-center mt-4'>

          <div className='flex flex-col-reverse py-2'>
            <img className='avatar self-end' 
            src="https://images.unsplash.com/photo-1664293361176-b3dd16ee6590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="" />
            <button className='pencil hover:text-indigo-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth={1.5}
               stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                 d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>

            </button>
          </div>

          <form onSubmit={handleSubmit(formData)} className="flex flex-col bg-slate-100  p-4 space-y-4 w-full ">
            <div className='flex justify-between space-x-5'>

              <div className='flex w-full flex-col '>
                <label className='text-lg' htmlFor="firsname">Name:</label>
                <input
                  className='rounded-md bg-slate-200 shadow-sm p-2'
                  type="text"
                  placeholder=' Perencejo'
                  {...register("firsName",
                    { required: true })}
                />
              </div>

              <div className='flex flex-col  w-full'>
                <label className='text-lg' htmlFor="lastname">Last name:</label>

                <input
                  className='rounded-md bg-slate-200 shadow-sm p-2'
                  type="text"
                  placeholder=' Fulano'
                  {...register("lastname",
                    { required: true })}
                />
              </div>
            </div>

            <div className='flex justify-between  space-x-5'>

              <div className='flex  w-full flex-col '>
                <label className='text-lg' htmlFor="email">Email:</label>
                <input
                  className='rounded-md bg-slate-200 shadow-sm p-2'
                  type="email"
                  placeholder=' Perencejo'
                  {...register("email",
                    { required: true })}
                />
              </div>

              <div className='flex flex-col  w-full'>
                <label className='text-lg' htmlFor="lastname">Password:</label>
                <input
                  className='rounded-md bg-slate-200 shadow-sm p-2'
                  type="password"
                  placeholder=' ***Yourpassword***'
                  {...register("password",
                    { required: true })}
                />
              </div>
            </div>

            <button type='submit' className='w-full bg-indigo-400 shadow-md text-lg text-slate-200
             rounded-md py-2 hover:bg-indigo-500' >
              Save
            </button>

          </form>
        </div>

        <div className='bg-slate-100 w-full p-4 shadow-lg rounded-md'>
          <nav className='flex'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </nav>

          <div className='bg-slate-00 w-1/3'>
            <h1>recent</h1>
          </div>
        </div>

      </div>
    </div>
  )
}
