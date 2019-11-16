import * as actionTypes from './actionTypes'

export const Reducer = (state={
    fetchedTodos:null
},action)=>{

switch(action.type){

 case actionTypes.GET_TODOS_FROM_FIREBASE:
     return{
         ...state,fetchedTodos:action.payload
     }

  default:
      return state;
}


}