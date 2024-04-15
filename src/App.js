
import './App.css';

const App =()=> {
  
  return (
    <div className='App'>
      <h1>hi {"aish"}</h1> 
      <Person name={"rahul"} age={21}/>
      <Person name={"aman"} age={21}/>
      <Person name={"aman"} age={21}/>
      <Person name={"aman"} age={21}/>
      
      </div>
  );
}

const Person = (props)=>{
  return <div>
    <h1>Name :{props.name}</h1>
    <h2>Age :{props.age}</h2>
  </div>
}

export default App;
