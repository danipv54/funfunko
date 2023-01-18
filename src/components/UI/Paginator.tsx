
export const Paginator = ({ page, nextPage, prevPage, }) => {

  return (
    <>
      <div className='bg-slate-50  shadow-xl w-full flex py-8 px-2 space-x-8 justify-around'>
        <div>
          <span> Showing </span>
          <span> 10 to  </span>
          <span> of 54 results </span>
        </div>

        <div className='flex space-x-2'>
          <button onClick={prevPage}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 
              11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
          </button>

          <div className='flex space-x-3'>
            <button className='bg-slate-300 shadow-lg rounded-xl py-1 px-3'>{page}</button>
          </div>

          <button onClick={nextPage}>

            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75
               0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

    </>
  )
}

