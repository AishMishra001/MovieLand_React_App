
import { useEffect, useState } from 'react';
import './App.css';

const App =()=> {
   const [count , setCount ] = useState(0)

   useEffect(()=>{
    alert('you changed the counter to '+count)
   },[])
  return (
    <div className='App'>
      <button onClick={()=>{
        setCount(count-1)
      }}>-</button>
      <h1>Count : {count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
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
