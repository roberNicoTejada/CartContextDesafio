import { createContext, useState, useContext } from "react";

// Se crea el contexto
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

	const [cartList, setCartList] = useState([]);
	const [count, setCount] = useState(1);
	const [idDelete, setIdDelete] = useState(1);

	const agregarProducto = (item) => {

		console.log("agregarProducto");
		console.log(item);
		let index = isInCart(item.item.id);

		// Si existe el item no lo agrega de nuevo
		if (index < 0) {
			setCartList([...cartList, item]);
		}

	};

	const isInCart = (id) => {

		let auxCarrito = cartList;
		const index = auxCarrito.findIndex((lista) => lista.item.id === id);

		return index;
	};

	const vaciarCarrito = () => {
		setCartList([]);
	};

	const eliminarItem = (id) => {

		console.log("eliminarItem");
		let auxCarrito = cartList;
		let index = isInCart(id);

		if (index >= 0) {
			auxCarrito.splice(index, 1);
			setIdDelete(id);
		}

		setCartList(auxCarrito);
	};

	return (

		<CartContext.Provider value={{  cartList,
                                        agregarProducto,
                                        setCartList,
                                        vaciarCarrito,
                                        eliminarItem,
                                        count,
                                        setCount,
                                        idDelete,
                                        setIdDelete}}>
			{children}
		</CartContext.Provider>

	);

}

export default CartContextProvider