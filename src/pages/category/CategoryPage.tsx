import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';
import 'animate.css';

export const CategoryPage = () => {
  return (
    <div className=' animate__animated animate__fadeIn'>
      <Navbar />
      <Outlet />
    </div>
  )
}
