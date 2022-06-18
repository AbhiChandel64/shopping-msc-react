import { createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducer";

const Cart = createContext();



const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        cart: []
    })

    return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}