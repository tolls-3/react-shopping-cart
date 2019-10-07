import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../contexts/CartContext'

const Navigation = props => {
	const context = useContext(CartContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{context.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
