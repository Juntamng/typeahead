import {useState, useEffect} from 'react';
import Typeahead from './components/Typeahead.component';
import TypeaheadAsync from './components/TypeaheadAsync.component';

function App() {
  // regular example 
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
  const [value, setValue] = useState({id:0, name:"nothing"});
  
  // Async example
  const data2 = [
    {val: 1, text: 'mike'},
    {val: 2, text: 'tony'},
    {val: 3, text: 'john'},
    {val: 4, text: 'mary'},
    {val: 5, text: 'tom'},
    {val: 6, text: 'henry'},
    {val: 7, text: 'alton'},
    {val: 8, text: 'ethan'},
    {val: 9, text: 'odelia'},
    {val: 10, text: 'michael'},
    {val: 11, text: 'hayden'},
    {val: 12, text: 'cam'}
  ]
  const [loadingUserAsync, setLoadingUserAsync] = useState(false);
  const [colUserAsync, setColUserAsync] = useState([]);
  const [valueAsync, setValueAsync] = useState({id:0, name:"nothing"});
  
  // Custome Render
  const [colUser, setColUser] = useState([]);
  const [valueUser, setValueUser] = useState({id:0, name:"nothing"});

  useEffect(()=> {
    fetch('https://randomuser.me/api/?page=3&results=10&seed=abc')
    .then(response => response.json())
    .then(data => {
      setColUser(data.results);
    })
  }, []);
  
  function filter(searchTxt) {
    setLoadingUserAsync(true);

    setTimeout(() => {
      setColUserAsync(data2.filter( (val, idx) => {
        return val.text.indexOf(searchTxt) > -1;
      }));
      setLoadingUserAsync(false);
    }, 3000);
  }

  const formatRecord = (record) => {
    return {id: record.id, name: record.name+"@" }
  }

  const formatRecord2 = (record) => {
    return {id: record.val, name: record.text+"=" }
  }
  const formatUserRecord = (record) => {
    return {
            id: record.login.uuid, 
            name: `${record.name.first} ${record.name.last}`,
            pic: record.picture.thumbnail
          }
  }

  const formatUserContent = (record) => {
    return <span><img src={record.pic} />{record.name}</span>
  }

  const formatContent2 = (record) => {
    return <span>### {record.name}</span>
  }

  return (
    <div className="App" style={ {margin: "10px", border: '0px green solid', width: "30%"} }>
      <h2> Regular Example </h2>
      <Typeahead
        collection={data}
        setValue={setValue}
        formatRecord={formatRecord}
        formatContent={formatContent2}
      />
      <br/>
      <div>Value is {JSON.stringify(value)}</div>
      
      <br/>
      <h2> Async Example </h2>
      <TypeaheadAsync 
        collectionFilter={colUserAsync}
        collectionLoading={loadingUserAsync}
        onFilter={filter}
        setLoading={setLoadingUserAsync}
        setValue={setValueAsync}
        formatRecord={formatRecord2}
        formatContent={formatContent2}
      />
      <br/>
      <div>valueAsync is {JSON.stringify(valueAsync)}</div>

      <br/>
      <h2> Custom Render Example </h2>
      <Typeahead
        collection={colUser}
        setValue={setValueUser}
        formatRecord={formatUserRecord}
        formatContent={formatUserContent}
      />
      <br/>
      <div>valueAsync is {JSON.stringify(valueUser)}</div>

    </div>
  );
}

export default App;
