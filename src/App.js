import {useState, useEffect} from 'react';
import Typeahead from './components/Typeahead.component';
import TypeaheadAsync from './components/TypeaheadAsync.component';

function App() {
  const [showCode1, setShowCode1] = useState(false);
  const [showCode2, setShowCode2] = useState(false);
  const [showCode3, setShowCode3] = useState(false);

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

  // Regular Typeahead 
  const [value, setValue] = useState();
  
  // Typeahead - API Response 
  const [loading, setLoading] = useState(false);
  const [colAsync, setColAsync] = useState([]);
  const [valueAsync, setValueAsync] = useState({id:0, name:"Somebody"});
  
  const filterAsync = (keyword) => {
    setLoading(true);
    setTimeout(() => {
      setColAsync(data.filter( (item) => item.name.includes(keyword) ) );
      setLoading(false);
    }
    , 500);
  };
  
  // Typeahead - formatRecord, formatContent
  const [colUser, setColUser] = useState([]);
  const [valueUser, setValueUser] = useState();

  useEffect(()=> {
    fetch('https://randomuser.me/api/?page=1&results=30&seed=abc')
    .then(response => response.json())
    .then(data => {
      setColUser(data.results);
    })
  }, []);
  
  const formatUserRecord = (record) => {
    return {
      id: record.login.uuid, 
      name: `${record.name.first} ${record.name.last}`,
      pic: record.picture.thumbnail
    }
  }

  const formatUserContent = (record) => {
    return <span><img src={record.pic} alt='profile' />{record.name}</span>
  }

  return (
    <>
    <div className='header'>      
      <h3>React Typeahead Component </h3>
    </div>

    <div className="container">

      {/* Regular Typeahead */}
      <div className="row">
        <a href='javascript:void(0)' className="u-pull-right" onClick={() => {setShowCode1(!showCode1)}}>{ showCode1 ? "Hide" : "Show" } Code</a>
        <div className="four columns offset-by-four"> 
          <h5> Regular Typeahead </h5>
          <div>
            <Typeahead
              collection={data}
              value={value}
              setValue={setValue}
            />
          </div>
          <br/>
          <div>Value is {JSON.stringify(value)}</div>
        </div>
      </div>
      <div className="row">
        { showCode1 ? 
        <div className="twelve columns">
          <pre>
        <code>
{`
const data = [
  {id: 1, name: 'mike'},
  {id: 2, name: 'tony'},
  ...
];

// Regular Typeahead 
const [value, setValue] = useState();

return (
  <Typeahead
    collection={data}
    value={value}
    setValue={setValue}
  />      
  <div>Value is {JSON.stringify(value)}</div>
);
`}
        </code>
        </pre>
        </div>
        : ""
        }
      </div>
      {/* Regular Typeahead */}

      {/* Typeahead - API Response */}
      <div className="row" style={{ marginTop: "50px"}}>
        <a href='javascript:void(0)' className="u-pull-right" onClick={() => {setShowCode2(!showCode2)}}>{ showCode2 ? "Hide" : "Show" } Code</a>
        <div className="four columns offset-by-four"> 
          <h5> Typeahead - API Response </h5>
          <div >
          <TypeaheadAsync 
            collectionFilter={colAsync}
            onCollectionFilter={filterAsync}

            loading={loading}
            setLoading={setLoading}
        
            value={valueAsync}
            setValue={setValueAsync}
          />
          </div>
          <br/>
          <div>Value is {JSON.stringify(value)}</div>
        </div>
      </div>
      <div className="row">
        { showCode2 ? 
        <div className="twelve columns">
          <pre>
        <code>
{`
const [loading, setLoading] = useState(false);
const [colAsync, setColAsync] = useState([]);
const [valueAsync, setValueAsync] = useState({id:0, name:"nothing"});

const filterAsync = (keyword) => {
  setLoading(true);
  setTimeout(() => {
    setColAsync(data.filter( (item) => item.name.includes(keyword) ) );
    setLoading(false);
  }
  , 500);
};

return (
  <TypeaheadAsync 
    collectionFilter={colAsync}
    onCollectionFilter={filterAsync}

    loading={loading}
    setLoading={setLoading}

    value={valueAsync}
    setValue={setValueAsync}
  />
  <div>Value is {JSON.stringify(valueAsync)}</div>
);
`}
        </code>
        </pre>
        </div>
        : ""}
      </div>
      {/* Typeahead - API Response */}

      {/* Typeahead - formatRecord and formatContent */}
      <div className="row" style={{ marginTop: "50px" }}>
      <a href='javascript:void(0)' className="u-pull-right" onClick={() => {setShowCode3(!showCode3)}}>{ showCode3 ? "Hide" : "Show" } Code</a>
        <div className="eight columns offset-by-two"> 
          <h5>Typeahead - formatRecord and formatContent</h5>
          <h6 style={{ textAlign: "left"}}>Record needs id and name properties. When data is coming form third party API, formatRecord is used to format the record.
            you can also use formatContent to overwrite the dropdown row format.
          </h6>
          <div>
            <Typeahead
              collection={colUser}
              value={valueUser}
              setValue={setValueUser}

              formatRecord={formatUserRecord}
              formatContent={formatUserContent}
            />
          </div>
          <br/>
          <div>Value is {JSON.stringify(valueUser)}</div>
        </div>
      </div>
      <div className="row">
        { showCode3 ? 
        <div className="twelve columns">
          <pre>
        <code>
{`
const formatUserRecord = (record) => {
  return {
    id: record.login.uuid, 
    name: \`$\{record.name.first} $\{record.name.last}\`,
    pic: record.picture.thumbnail
  }
}

const formatUserContent = (record) => {
  return <span><img src={record.pic} alt='profile'/>{record.name}</span>
}

return (
  <Typeahead
    collection={colUser}
    value={valueUser}
    setValue={setValueUser}

    formatRecord={formatUserRecord}
    formatContent={formatUserContent}
  />
  <div>Value is {JSON.stringify(valueUser)}</div>
);
`}
        </code>
        </pre>
        </div>
        : ""}
      </div>
      {/* Typeahead - formatRecord and formatContent */}

      {
      /*
      <br/>
      <h2> Async Example </h2>
      <TypeaheadAsync 
        collectionFilter={colUserAsync}
        collectionLoading={loadingUserAsync}
        setLoading={setLoadingUserAsync}
        
        onCollectionFilter={filter}
        
        value={valueAsync}
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
        value={valueUser}
        setValue={setValueUser}
        formatRecord={formatUserRecord}
        formatContent={formatUserContent}
      />
      <br/>
      <div>valueAsync is {JSON.stringify(valueUser)}</div>
      */ }
    </div>
    </>
  );
}

export default App;
