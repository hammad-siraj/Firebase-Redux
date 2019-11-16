import React, { Component } from 'react'
import './App.css';
import { saveTodoToFirebase, getTodosFromFirebase, deleteTodoFromFirebase } from './REDUX/actionCreatre';
import {connect} from 'react-redux'

 class App extends React.Component {
 constructor(){
   super();

   this.state={
     text:""
   }

 }

componentDidMount(){

  this.props.getData();

}

inputHandler=(e)=>{
this.setState({
  [e.target.name]:e.target.value
})

}

addTodo =()=>{
const {text} =this.state;
const {saveTodo} = this.props; 
const myTodo={
   todo:text,
 } 

 saveTodo(myTodo);
this.setState({
  text:""
})
}

  render() {
    const {fetchedTodos,deleteTodo} = this.props;
    console.log(this.props.fetchedTodos)
    return (
      <>
          <div className="App-header">
               <h2>REDUX+FIREBASE</h2>
                <input name="text" value={this.state.text}  onChange={this.inputHandler} />
               <br/>
                <button onClick={this.addTodo}>ADD </button>
                {fetchedTodos ?
<ul>
{Object.keys(fetchedTodos).map((idx)=>(
<li key={idx}>{fetchedTodos[idx].todo} {" "}
<button  onClick={()=>deleteTodo(idx)}>Remove</button>
</li>
))}
</ul>:
<h3>NO TODOS :(</h3>
  }
          </div>


      </>
    )
  }
}

const mapStateToProps =(state)=>({

  fetchedTodos:state.FetchedTodos.fetchedTodos

})

const mapDispatchToProps=(dispatch)=>({
  saveTodo:(data)=>dispatch(saveTodoToFirebase(data)),
  getData:()=>dispatch(getTodosFromFirebase()),
  deleteTodo:(id)=>dispatch(deleteTodoFromFirebase(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
