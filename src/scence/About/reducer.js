const init = {
  list :[]
}


export function About(state = init,action){
	switch (action.type){
		case 'ABOUT_LIST':
      if (action.data && action.data.items) {
  			return {
          ...state,
          list:action.data.items
        }
      } else {
        return state;
      }
    case 'ABOUT_LIST_ERROR':
      return state;
		default:
		return state;
	}
}
