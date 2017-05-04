const init = {
  list :[],
  color : 'red'
}


export function Index(state = init,action){
	switch (action.type){
		case 'VOICE_INFO':
			return {
        ...state,
        list:action.data
      }
    case 'COLOR_CHANGE':
      return {
        ...state,
        color:action.data
      }
		default:
		return state;
	}
}
