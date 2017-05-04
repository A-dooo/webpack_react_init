

export function changeColor (color){
  return dispatch=>{
    dispatch({
      type:'COLOR_CHANGE',
      data:color
    })
  }
}
