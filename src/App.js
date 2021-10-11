
import './App.css';
// import React, {Component} from 'react';
import { useState } from 'react';


// class App extends Component{
 
//   constructor(props){
//     super(props);

//     this.state = {value: 'yo'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // handleOnChange = (e) => {
//   //   this.setState({input: e.target.value})
//   // }

//   // handleOnSubmit = () => {
//   // this.setState(prevState => 
//   //   ({tasks: [...prevState.tasks, {todo: 'bye', id:1}]
//   //   }))
//   // }

//   // newInputValue = (event) => {
//   //   this.setState({
//   //     tasks: event.target.value
//   //   })
//   // }

//   handleChange(event){
//       this.setState({value: event.target.value});
//   }

//   handleSubmit(event){
//     console.log(this.state.value);
//     event.preventDefault();
//   }

//   render(){ 
    
//       return (
//         <div className="App">
//           <form onSubmit={this.handleSubmit}>  
//               <label>Enter Task: </label>
//               <input type="text" value={this.state.value} onChange={this.handleChange}/>
//               <button type="submit">Add Task</button> 
//           </form>
//           <div>
//             {/* {this.state.tasks.map((task)=>(
//               <li key={task.id}>{task.todo}</li>
//             ))} */}
             
//               <li>{this.state.value}</li>
            
//           </div>
//         </div>
//       );
//    }
// }

// const App = () => {

//     const [tasks, setTask] = useState('hello')

//     const handleSubmit = (event) => {
//       event.preventDefault(); 
//       const todo = {tasks}
//       console.log(todo)

//     }

//   return (
//       <div className="App">
//         <form onSubmit={handleSubmit}>  
//             <label>Enter Task: </label>
//             <input type="text" value={tasks} onChange={(e)=>{setTask(e.target.value)}}/>
//             <button type="submit">Submit</button> 
//         </form>
//         <div>
//            {/* {tasks.map(task=>(<li>{task.item}</li>))} */}
//            {/* {tasks.map((task)=>(
//               <li key={task.id}>{task.todo}</li>
//             ))} */}
//             <li>{tasks}</li>
//         </div>
//       </div>
//     );
// }

function App(){ 
  
  const [input, setInput] = React.useState('')
  const [tasks, setTasks] = React.useState([])

  // You want to get the input value 
  // make an object from the input value 
  // Place object into the the object into the task array
  
  const handleSubmit = (e) => { 
          e.preventDefault()
          let todo = {input, id:new Date().getTime().toString()}
         
          setTasks((tasks)=> {
            return [...tasks, todo]
          })
          
          
          setInput('')
         
          
  } 
  
   const handleChange = (e) =>{
     setInput(e.target.value)   
  } 
  
  
  return (
    <React.Fragment>
    <form onSubmit={handleSubmit}>
              <label >Name :</label> 
              <input type="text" onChange={handleChange} value={input}/>
              <input type="submit"/>
              </form>
              <div>
                 {
                  tasks.map((task)=>(
                    <div> 
                       <li key={task.id}>{task.input}</li>
                    </div>   
                       ))                
                }  
              </div> 
      </React.Fragment>
         )
}




export default App;
