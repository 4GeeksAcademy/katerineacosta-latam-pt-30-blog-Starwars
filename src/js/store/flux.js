const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			categories: [
				{categoryName: "vehicles",},
				{categoryName: "planets"},
				{categoryName: "people"},
			],
			vehicles:[],
			planets:[],
			people:[],
			selected: null,
			favorites: []
		},
		actions: {
			getData: async (categoryName)=>{
				const res = await fetch(`https://www.swapi.tech/api/${categoryName}`);
				const data = await res.json();
				const store  = getStore();
				setStore({...store, [categoryName]:data.results})
			},
			getDetails: async (categoryName, uid) =>{
				const res = await fetch(`https://www.swapi.tech/api/${categoryName}/${uid}`);
				const data = await res.json();
				const store  = getStore();
				setStore({...store, selected:data.result})
			},
			isFavorite: (item)=>{
				const store = getStore();
				const elementInFavorites = store.favorites.find(f=> f.uid == item.uid && f.name == item.name);
				
				return elementInFavorites != undefined;
			},
			addToFavorites: (item)=>{
				const store = getStore();
				store.favorites.push(item);
				setStore({...store });
			},
			removeFromFavorites: (item) => {
				const store = getStore();
				setStore({...store, favorites: store.favorites.filter(f=> f.uid != item.uid && f.name != item.name) });
			}
		}
	};
};

export default getState;
