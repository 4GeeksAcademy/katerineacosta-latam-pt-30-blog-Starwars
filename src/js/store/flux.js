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
				const elementInFavorites = store.favorites.find(f=> f.name == item.name && f.categoryName == item.categoryName);
				return elementInFavorites != undefined;
			},
			addToFavorites: (item, categoryName)=>{
				const store = getStore(), actions = getActions();
				const exists = actions.isFavorite(item);
				if(!exists){
					item.categoryName = categoryName;
					setStore({...store, favorites: store.favorites.concat([item])});
				}
			},
			removeFromFavorites: (item) => {
				const store = getStore();
				setStore({...store, favorites: store.favorites.filter(f=> !(f.name == item.name && f.categoryName == item.categoryName)) });
			}
		}
	};
};

export default getState;
