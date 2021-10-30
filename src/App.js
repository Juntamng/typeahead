import {useState, useEffect} from 'react';
import Typeahead from './components/Typeahead.component';
import TypeaheadAsync from './components/TypeaheadAsync.component';

function App() {
  const [col, setCol] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({id:0, name:"nothing"});
  const [valueAsync, setValueAsync] = useState({id:0, name:"nothing"});

  const data = [
    {id: 1, name: 'mike'},
    {id: 2, name: 'tony'},
    {id: 3, name: 'john'},
    {id: 4, name: 'mary'},
    {id: 5, name: 'tom'},
    {id: 6, name: 'henry'},
    {id: 7, name: 'alton'},
    {id: 8, name: 'ethan'},
    {id: 9, name: 'odelia'},
    {id: 10, name: 'michael'},
    {id: 11, name: 'hayden'},
    {id: 12, name: 'cam'}
  ]

  function filter(searchTxt) {
    setLoading(true);

    setTimeout(() => {
      setCol(data.filter( (val, idx) => {
        return val.name.indexOf(searchTxt) > -1;
      }));
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="App" style={ {margin: "10px", border: '0px green solid', width: "30%"} }>
      <h2> Regular Example </h2>
      <Typeahead
        data={data}
        setValue={setValue}/>
      <br/>
      <div>Value is {JSON.stringify(value)}</div>
      
      <br/>
      <h2> Async Example </h2>
      <TypeaheadAsync 
        collectionFilter={col}
        collectionLoading={loading}
        onFilter={filter}
        setValue={setValueAsync}/>
      <br/>
      <div>valueAsync is {JSON.stringify(valueAsync)}</div>
    </div>
  );
}

export default App;
