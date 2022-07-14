import React , {useState} from 'react';
import UserList from "./list" ;

function App() {
  const [ list, setlist] = useState("");
  const [items, setItems] = useState([]);

  const deleteItems = (id) => {
      setItems ((oldItems) => {
        return oldItems.filter( ( arrayEle , index ) => {
          return index != id ;
        });
      });
  } ;

  const itemEvent = (event) => { 
    setlist(event.target.value);
   } ;

   const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems , list] ;
    })
    setlist('');
   };

  return (
    <div className='main_div'>
      <div className='center_div'>
        <h1>ToDo List</h1>
        <input type= "text" placeholder='Add item' onChange={itemEvent} value= {list}/>
        <button onClick={addItem}>+</button>

        <ul>
          {/* <li> {listState} </li> */}
          {
            items.map( (val , index ) => {
              return (
                <UserList 
                  key={index} 
                  id={index}
                  text={val}
                  onSelect={deleteItems} 
                />);
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
