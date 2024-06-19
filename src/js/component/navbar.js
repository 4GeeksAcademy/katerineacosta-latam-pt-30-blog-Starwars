import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FavoriteItem } from "./favoriteItem";
import starWars from "../../img/star-wars-logo.png"

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="navbar__logo" src={starWars} />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn  btn-primary  dropdown-toggle" type="button" 
						id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
						data-bs-auto-close="false"
						>
						Notifications <span className="badge bg-secondary">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{ store.favorites.length > 0 && store.favorites.map(x => <FavoriteItem key={`${x.name}_${x.uid}`} item={x} /> ) }
						{ store.favorites.length == 0 && <li ><span className="dropdown-item">No Favorites</span></li>}
					</ul>
				</div>
			</div>
		</nav>
	);
};
