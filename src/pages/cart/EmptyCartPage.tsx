import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EmptyCartPage = () => {
  let navigate = useNavigate();

useEffect(() => {
  setTimeout(() => {
    navigate('/funko', { replace: true })
  }, 3000);


}, [])


  return (
    <div >

      <h1 className="text-center mt-8 text-4xl font-bold">The cart is empty</h1>
      <h2 className="text-center mt-4 text-lg font-bold">You can buy something</h2>
    </div>
  )
}

 