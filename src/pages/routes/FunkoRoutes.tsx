import { Route, Routes } from 'react-router-dom';
import { FooterLayout, Navbar } from '../../components';
import { CartPage, EmptyCartPage } from '../cart';
import { AnimePage, HeroesVillainsPage, NFTPage } from '../category';
import { HomePage } from '../home/Home';
import { NoFound } from '../noFoundPage/NoFound';
import { ProductPage } from '../products';
import { SearchPage } from '../search';
import { OrderHistoryPage, User, UserPage } from '../user';

function FunkoRoutes() {
    return (
        <div className=' animate__animated animate__fadeIn'>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/anime" element={<AnimePage />} />
                <Route path="/heroes-villians" element={<HeroesVillainsPage />} />
                <Route path="/nft" element={<NFTPage />} />
                <Route path="products/:item" element={<ProductPage />} />
                <Route path="search/:item" element={<SearchPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/empty" element={<EmptyCartPage />} />
                <Route path="*" element={<NoFound />} />
                
                <Route path="user" element={<UserPage />} >
                    <Route path="profile" element={<User />} />
                    <Route path="order-history" element={<OrderHistoryPage />} />
                </Route>
            </Routes>
            <div className='md:py-4 '></div>
            <FooterLayout />

        </div>
    )
}

export default FunkoRoutes