import { useState } from 'react';
import './App.css';
import List from './List';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';

function App() {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);

  const InputEvents = (event) =>{
    setVal(event.target.value);
  }

  const addElement = () =>{
    setItems((prevVal) =>{
      return [...prevVal,val]
    });
    setVal("");
  }

  const delItems = (id) =>{

    setItems((oldVal) =>{
     return oldVal.filter((arrEl, index) =>{
        return index !== id;
      })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>To do list</h1>
          <input placeholder="abcdjkan"></input>
          <input placeholder="abcdjkan"></input>
          <input placeholder="abcdjkan"></input>
          <input type="text" value = {val} onChange = {InputEvents}  placeholder="add an item" />
          <Button className="newbtn" onClick = {addElement}><AddCircleIcon/></Button>
          <ol>
            {
              items.map((itemVal, index) =>{
               return <List
                txt={itemVal}
                id={index} 
                key={index}
                onSelect={delItems} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
