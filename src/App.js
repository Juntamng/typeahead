import Typeahead from './components/Typeahead.component';

function App() {
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
  return (
    <div className="App" style={ {margin: "10px", border: '0px green solid', width: "30%"} }>
      <Typeahead data={data}/>
    </div>
  );
}

export default App;
