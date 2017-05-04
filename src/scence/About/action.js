
import {url} from '../../static/conf.js';
import axios from 'axios';
//http://capi.fishsaying.com/capi/article/v2/scenics/voices?scenics_id=5559aeda9a0b8a11497f323a&page=1&limit=20
export function qryAboutList(id=''){
	return async (dispatch, getState) => {
		try {
			const {data} = await axios.get(`${url}capi/article/v2/scenics/voices?scenics_id=5559aeda9a0b8a11497f323a&page=1&limit=20`,{
				withCredentials : true
			});
			if (data.result){
				dispatch({
					type: 'ABOUT_LIST',
					data:data.result
				});
			}
		} catch (e) {
			dispatch({
				type: 'ABOUT_LIST_ERROR',
				data:[]
			});
		}
	};
}
