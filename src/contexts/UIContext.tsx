import { createContext, useState } from "react";


interface Props {
  children: JSX.Element
}



export const UIContext = createContext<any[] | any>(false);

export const UIProvider = ({ children }: Props) => {

  let setCart=[]
  
  let setItemCart =setCart.length

  const sideMenu = (state: boolean) => {

    return !state;
  }


  return (

    <UIContext.Provider value={{
      sideMenu,
      setCart,
      setItemCart

    }}>
      {children},
    </UIContext.Provider>
  )
};

