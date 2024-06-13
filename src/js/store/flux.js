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
			}
		}
	};
};

export default getState;
