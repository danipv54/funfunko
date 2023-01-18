import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';

export const Search = () => {
  const navigate = useNavigate();

  const { searchTerm, onInputChange, onResetForm } = useForm({
    searchTerm: ''
  })
  
  const onSubmitSearch = (e) => {
    e.preventDefault();

    if (searchTerm.length == 0) return;

    navigate(`/search/${searchTerm.toLowerCase()}`, { replace: true })
    onResetForm();
  }

  return (
    <div className="relative  ">
      <div className="absolute pointer-events-auto mt-2 ml-2 ">
        <svg className="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817
           4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>

      <form onSubmit={onSubmitSearch}>
        <input
          type="search"
          placeholder="Search"
          className="outline-0 rounded-md py-1 text-center"
          name='searchTerm'
          value={searchTerm}
          onChange={onInputChange}
        />
      </form>
    </div>
  )
}

