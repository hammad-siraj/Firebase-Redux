import { Db } from "../firebase"
import * as actionTypes from './actionTypes'

export const saveTodoToFirebase =(data)=>(dispatch)=>{

    Db.push(data).then(()=>{
    dispatch({
        type:actionTypes.SAVE_TODO_TO_FIREBASE
    })
})


}


export const getTodosFromFirebase =()=>(dispatch)=>{

Db.on('value',(snapshot)=>{
  dispatch({
      type:actionTypes.GET_TODOS_FROM_FIREBASE,
      payload:snapshot.val()
  })
})

}



export const deleteTodoFromFirebase =(id)=>(dispatch)=>{
Db.child(id).remove().then(()=>{
    dispatch({
        type:actionTypes.DELETE_TODO_FROM_FIREBASE
    })
})

}