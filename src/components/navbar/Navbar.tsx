import { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'animate.css';
import { UIContext } from '../../contexts';
import { Search } from './Search';

export const Navbar = () => {
  const { sideMenu, itemCart } = useContext(UIContext);
  const [isOpen, setisOpen] = useState(false);
  const { pathname } = useLocation();

  sideMenu(isOpen);

  const activatePath = (path: string): any => {
    if (path === pathname) {
      return ' text-xl text-slate-50 font-black hover:text-indigo-500 ';
    }
    return ' text-xl hover:text-indigo-500  text-slate-200 font-semi-bold';
  }

  return (
    < >
      <div className=' hidden lg:flex  bg-gradient-to-r from-indigo-400 to-indigo-500  
      shadow-2xl justify-between mx-auto py-5 px-5'>

        <div className='flex space-x-24'>
          <NavLink to="/" >
            <div >
              <img src="https://www.funko.com/static/media/funko-logo-white.445c4f62.svg" alt="logo" />
            </div>
          </NavLink>

          <nav className='flex space-x-8'>
            <li className={activatePath('/')}  >
              <NavLink to="/" >
                Home
              </NavLink>
            </li>
            <li className={activatePath('/anime')} >
              <NavLink to="/anime">
                Anime
              </NavLink >
            </li>

            <li className={activatePath('/heroes-villians')}  >
              <NavLink to="/heroes-villians">
                Heroes & Villains
              </NavLink>
            </li>

            <li className={activatePath('/nft')} >
              <NavLink to="/nft">
                NFT
              </NavLink>
            </li>
          </nav>
        </div>

        <div className='flex space-x-6'>
          <Search />

          <NavLink to="/user/profile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 
              text-indigo-50"> <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 
              0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 
              003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 
              0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 
              9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="w-6 h-6 text-indigo-50"> <path fillRule="evenodd" d="M7.5 
                6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 
                004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 
                00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 
                00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 
                0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
              </svg>
              <span
                className="top-0 left-7 absolute  w-3.5 h-3.5 text-white"> {itemCart}</span>
            </div>
          </NavLink>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-50">
              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
          </div>

        </div>
      </div>

      {/* mobile nav */}
      <div className=' flex lg:hidden bg-gradient-to-r from-indigo-400 to-indigo-500 shadow-2xl 
           justify-between mx-auto py-5 px-5'>
        <div>
          <img src="https://www.funko.com/static/media/funko-logo-white.445c4f62.svg" alt="logo" />
        </div>

        <div className='flex flex-col justify-center'>
          {isOpen
            ?
            (
              <button className='self-end mb-2' onClick={() => setisOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="w-6 h-6  text-indigo-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )
            :
            (
              <button className='self-end mb-2' onClick={() => setisOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="w-6 h-6   text-indigo-50">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            )
          }

          <div className={
            isOpen
              ? 'flex-col space-y-4 bg-indigo-400 px-4 rounded-xl py-4 animate__animated animate__backInRight'
              : 'hidden '}
          >
            <Search />

            <nav className=' flex flex-col space-y-2'>
              <li className='text-lg hover:text-indigo-300  text-slate-200 font-bold'  >
                <NavLink to="/">
                  Home
                </NavLink>
              </li>

              <li className='text-lg hover:text-indigo-300  text-slate-200 font-bold' >
                <NavLink to="/anime">
                  Anime
                </NavLink>
              </li>

              <li className='text-lg hover:text-indigo-300  text-slate-200 font-bold'  >
                <NavLink to="/heroes-villians">
                  Heroes & Villains
                </NavLink>
              </li>

              <li className='text-lg hover:text-indigo-300  text-slate-200 font-bold' >
                <NavLink to="/nft">
                  NFT
                </NavLink>
              </li>
            </nav>

            <div className="divide-y divide-blue-200">
              <div></div>
              <div></div>
            </div>

            <div className='flex '>
              <nav className='flex flex-col space-y-3'>

                <NavLink to="user/profile">
                  <p className='text-lg hover:text-indigo-300  text-slate-200 font-bold'>Profile</p>
                </NavLink>

                <NavLink to="/cart">
                  <p className='text-lg hover:text-indigo-300  text-slate-200 font-bold'>Cart</p>
                </NavLink>
              </nav>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
