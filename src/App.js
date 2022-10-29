import './App.css';
import React,{useState} from "react";

function App() {
  const [data,setData]=useState([]);
  const [inputvalue,setInputvalue]=useState('');
  
  function handleFormValueChange(event)
  {
  setInputvalue(event.target.value);
  }
  
  function getDdata(event)
  {
    if(event.key=== "Enter")
    {   
      setData(x=>[...x, event.target.value])
      setInputvalue('');  
    }
  }

  function clearData() 
  {
  setData([]);
  }

  return (

    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">myTest</a>
        </div>     
    </header>
    <main>
        <div className='App'>        
          <input className='input' type='text' placeholder='Enter value' value={inputvalue} onChange={handleFormValueChange} 
          onKeyDown={getDdata} />
          <h5>{data.map(x=> <li>{x}</li>)}</h5>
          <button onClick={clearData}>Reset</button>   
        </div>
    </main>
    <footer className="row center">All right reserved</footer>
</div>
);}

export default App;
