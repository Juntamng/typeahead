(this.webpackJsonptypeahead=this.webpackJsonptypeahead||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),s=n(13),c=n.n(s),o=(n(18),n(19),n(20),n(4)),r=n(10),l=n(5),d=n(6),h=n(3),u=n(8),f=n(7),j=n(9),p=(n(22),n(0)),m=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).textInput=i.a.createRef(),a.focusTextInput=a.focusTextInput.bind(Object(h.a)(a)),a.handleClear=a.handleClear.bind(Object(h.a)(a)),a.addClearIcon=a.addClearIcon.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"focusTextInput",value:function(){this.textInput.current.focus()}},{key:"handleClear",value:function(e){this.props.onClear(e),this.focusTextInput()}},{key:"addClearIcon",value:function(){return this.props.searchText.length?Object(p.jsx)("div",{className:"clear",onClick:this.handleClear,children:"\xd7"}):""}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"search_textbox",children:[Object(p.jsx)("input",{type:"text",placeholder:"Search",ref:this.textInput,value:this.props.searchText,onChange:this.props.onSearchText,onKeyUp:this.props.onKeyUp,onFocus:this.props.onFocus}),this.addClearIcon()]})}}]),n}(i.a.Component),b=(n(24),function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).divRef=i.a.createRef(),a}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){this.divRef.current&&this.divRef.current.scrollIntoView(!1)}},{key:"renderContent",value:function(e){return this.props.formatContent?this.props.formatContent(e):e.name}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"scrollabe_div",children:Object(p.jsx)("ul",{children:this.props.collection.map((function(t,n){return Object(p.jsx)("li",{ref:e.props.index===n?e.divRef:null,className:e.props.index===n?"selected":"",onClick:function(){return e.props.onSelectItem(t.id)},children:e.renderContent(t)},t.id)}))})})}}]),n}(i.a.Component));function v(e,t){var n=e;return t&&(n=t(e)),function(e){if(!e.id)throw new Error("id is missing in record!");if(!e.name)throw new Error("name is missing in record!")}(n),n}n(12);var x=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={searchText:"",name:"",filterData:[],open:!1,loading:!1,index:-1},e.value&&(a.state.searchText=a.state.name=e.value.name),a.showDropdown=a.showDropdown.bind(Object(h.a)(a)),a.handleSearchText=a.handleSearchText.bind(Object(h.a)(a)),a.handleClear=a.handleClear.bind(Object(h.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(h.a)(a)),a.handleFocus=a.handleFocus.bind(Object(h.a)(a)),a.handleSelectItem=a.handleSelectItem.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.closeOnWindowClick=a.closeOnWindowClick.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"resetState",value:function(){this.setState({searchText:"",name:"",filterData:[],open:!1,loading:!1,index:-1})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.closeOnWindowClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.closeOnWindowClick)}},{key:"handleClick",value:function(e){e.stopPropagation()}},{key:"clearKeyIndex",value:function(){this.setState({index:-1})}},{key:"handleSearchText",value:function(e){var t=this;this.setState({searchText:e.target.value,loading:!0}),""!==e.target.value?j.a.debounce((function(){t.setState({filterData:t.props.collection.map((function(e){return v(e,t.props.formatRecord)})).filter((function(t,n){return t.name.search(new RegExp(e.target.value,"i"))>-1})),loading:!1,open:!0}),t.clearKeyIndex()}),200)():this.setState({filterData:[],loading:!1})}},{key:"handleClear",value:function(e){this.resetState()}},{key:"handleSelectItem",value:function(e){var t=this.state.filterData.find((function(t){return t.id===e}));t&&(this.setState({searchText:t.name,name:t.name,open:!1}),this.props.setValue&&this.props.setValue(Object(r.a)({},t))),this.clearKeyIndex()}},{key:"handleKeyUp",value:function(e){switch(e.key){case"ArrowUp":this.state.index>0&&this.setState((function(e,t){return{index:e.index-1}}));break;case"ArrowDown":this.state.index<this.state.filterData.length-1&&this.setState((function(e,t){return{index:e.index+1}}));break;case"Enter":this.handleEnter()}}},{key:"handleFocus",value:function(){this.setState({open:!0})}},{key:"handleEnter",value:function(){if(this.state.index>-1){var e=this.state.filterData[this.state.index];e&&this.handleSelectItem(e.id)}}},{key:"closeOnWindowClick",value:function(){this.setState({open:!1})}},{key:"notFound",value:function(){return Object(p.jsx)("div",{className:"notfound",children:"Not Found!"})}},{key:"showDropdown",value:function(){return this.state.open&&this.state.searchText.length?this.state.searchText===this.state.name?"":this.state.filterData.length?Object(p.jsx)(b,{loading:this.state.loading,collection:this.state.filterData,onSelectItem:this.handleSelectItem,index:this.state.index,formatContent:this.props.formatContent}):this.state.loading?void 0:this.notFound():""}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"typeahead",onClick:this.handleClick,children:[Object(p.jsx)(m,{onSearchText:this.handleSearchText,onClear:this.handleClear,onKeyUp:this.handleKeyUp,onFocus:this.handleFocus,searchText:this.state.searchText}),this.showDropdown()]})}}]),n}(i.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={searchText:"",name:"",filterData:[],open:!1,index:-1},e.value&&(a.state.searchText=a.state.name=e.value.name),a.showDropdown=a.showDropdown.bind(Object(h.a)(a)),a.handleSearchText=a.handleSearchText.bind(Object(h.a)(a)),a.handleClear=a.handleClear.bind(Object(h.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(h.a)(a)),a.handleFocus=a.handleFocus.bind(Object(h.a)(a)),a.handleSelectItem=a.handleSelectItem.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.closeOnWindowClick=a.closeOnWindowClick.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"resetState",value:function(){this.setState({searchText:"",name:"",open:!1,index:-1})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.closeOnWindowClick)}},{key:"componentDidUpdate",value:function(e,t,n){var a=this;JSON.stringify(e.collectionFilter)!==JSON.stringify(this.props.collectionFilter)&&this.setState({filterData:this.props.collectionFilter.map((function(e){return v(e,a.props.formatRecord)}))})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.closeOnWindowClick)}},{key:"handleClick",value:function(e){e.stopPropagation()}},{key:"clearKeyIndex",value:function(){this.setState({index:-1})}},{key:"handleSearchText",value:function(e){var t=this,n=e.target.value;this.setState({searchText:n,open:!0}),this.props.setLoading(!0),j.a.debounce((function(){t.props.onCollectionFilter(n),t.clearKeyIndex()}),200)()}},{key:"handleClear",value:function(e){this.resetState()}},{key:"handleSelectItem",value:function(e){var t=this.state.filterData.find((function(t){return t.id===e}));t&&(this.setState({searchText:t.name,name:t.name,open:!1}),this.props.setValue&&this.props.setValue(Object(r.a)({},t))),this.clearKeyIndex()}},{key:"handleKeyUp",value:function(e){switch(e.key){case"ArrowUp":this.state.index>0&&this.setState((function(e,t){return{index:e.index-1}}));break;case"ArrowDown":this.state.index<this.state.filterData.length-1&&this.setState((function(e,t){return{index:e.index+1}}));break;case"Enter":this.handleEnter()}}},{key:"handleFocus",value:function(){this.setState({open:!0})}},{key:"handleEnter",value:function(){if(this.state.index>-1){var e=this.state.filterData[this.state.index];e&&this.handleSelectItem(e.id)}}},{key:"closeOnWindowClick",value:function(){this.setState({open:!1})}},{key:"notFound",value:function(){return Object(p.jsx)("div",{className:"notfound",children:"Not Found!"})}},{key:"showDropdown",value:function(){return this.state.open&&this.state.searchText.length?this.state.searchText===this.state.name?"":this.state.filterData.length?Object(p.jsx)(b,{loading:this.props.loading,collection:this.state.filterData,onSelectItem:this.handleSelectItem,index:this.state.index,formatContent:this.props.formatContent}):this.props.loading?void 0:this.notFound():""}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"typeahead",onClick:this.handleClick,children:[Object(p.jsx)(m,{onSearchText:this.handleSearchText,onClear:this.handleClear,onKeyUp:this.handleKeyUp,onFocus:this.handleFocus,searchText:this.state.searchText}),this.showDropdown()]})}}]),n}(i.a.Component);var y=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!1),c=Object(o.a)(s,2),r=c[0],l=c[1],d=Object(a.useState)(!1),h=Object(o.a)(d,2),u=h[0],f=h[1],j=[{id:1,name:"mike"},{id:2,name:"tony"},{id:3,name:"john"},{id:4,name:"mary"},{id:5,name:"tom"},{id:6,name:"henry"},{id:7,name:"alton"},{id:8,name:"ethan"},{id:9,name:"odelia"},{id:10,name:"michael"},{id:11,name:"hayden"},{id:12,name:"cam"}],m=Object(a.useState)(),b=Object(o.a)(m,2),v=b[0],y=b[1],k=Object(a.useState)(!1),C=Object(o.a)(k,2),S=C[0],g=C[1],w=Object(a.useState)([]),T=Object(o.a)(w,2),I=T[0],N=T[1],D=Object(a.useState)({id:0,name:"Somebody"}),F=Object(o.a)(D,2),U=F[0],V=F[1],R=Object(a.useState)([]),A=Object(o.a)(R,2),K=A[0],E=A[1],L=Object(a.useState)(),W=Object(o.a)(L,2),J=W[0],P=W[1];return Object(a.useEffect)((function(){fetch("https://randomuser.me/api/?page=1&results=30&seed=abc").then((function(e){return e.json()})).then((function(e){E(e.results)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("h3",{children:"React Typeahead Component "})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("a",{href:"javascript:void(0)",className:"u-pull-right",onClick:function(){i(!n)},children:[n?"Hide":"Show"," Code"]}),Object(p.jsxs)("div",{className:"four columns offset-by-four",children:[Object(p.jsx)("h5",{children:" Regular Typeahead "}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{collection:j,value:v,setValue:y})}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:["Value is ",JSON.stringify(v)]})]})]}),Object(p.jsx)("div",{className:"row",children:n?Object(p.jsx)("div",{className:"twelve columns",children:Object(p.jsx)("pre",{children:Object(p.jsx)("code",{children:"\nconst data = [\n  {id: 1, name: 'mike'},\n  {id: 2, name: 'tony'},\n  ...\n];\n\n// Regular Typeahead \nconst [value, setValue] = useState();\n\nreturn (\n  <Typeahead\n    collection={data}\n    value={value}\n    setValue={setValue}\n  />      \n  <div>Value is {JSON.stringify(value)}</div>\n);\n"})})}):""}),Object(p.jsxs)("div",{className:"row",style:{marginTop:"50px"},children:[Object(p.jsxs)("a",{href:"javascript:void(0)",className:"u-pull-right",onClick:function(){l(!r)},children:[r?"Hide":"Show"," Code"]}),Object(p.jsxs)("div",{className:"four columns offset-by-four",children:[Object(p.jsx)("h5",{children:" Typeahead - API Response "}),Object(p.jsx)("div",{children:Object(p.jsx)(O,{collectionFilter:I,onCollectionFilter:function(e){g(!0),setTimeout((function(){N(j.filter((function(t){return t.name.includes(e)}))),g(!1)}),500)},loading:S,setLoading:g,value:U,setValue:V})}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:["Value is ",JSON.stringify(v)]})]})]}),Object(p.jsx)("div",{className:"row",children:r?Object(p.jsx)("div",{className:"twelve columns",children:Object(p.jsx)("pre",{children:Object(p.jsx)("code",{children:'\nconst [loading, setLoading] = useState(false);\nconst [colAsync, setColAsync] = useState([]);\nconst [valueAsync, setValueAsync] = useState({id:0, name:"nothing"});\n\nconst filterAsync = (keyword) => {\n  setLoading(true);\n  setTimeout(() => {\n    setColAsync(data.filter( (item) => item.name.includes(keyword) ) );\n    setLoading(false);\n  }\n  , 500);\n};\n\nreturn (\n  <TypeaheadAsync \n    collectionFilter={colAsync}\n    onCollectionFilter={filterAsync}\n\n    loading={loading}\n    setLoading={setLoading}\n\n    value={valueAsync}\n    setValue={setValueAsync}\n  />\n  <div>Value is {JSON.stringify(valueAsync)}</div>\n);\n'})})}):""}),Object(p.jsxs)("div",{className:"row",style:{marginTop:"50px"},children:[Object(p.jsxs)("a",{href:"javascript:void(0)",className:"u-pull-right",onClick:function(){f(!u)},children:[u?"Hide":"Show"," Code"]}),Object(p.jsxs)("div",{className:"eight columns offset-by-two",children:[Object(p.jsx)("h5",{children:"Typeahead - formatRecord and formatContent"}),Object(p.jsx)("h6",{style:{textAlign:"left"},children:"Record needs id and name properties. When data is coming form third party API, formatRecord is used to format the record. you can also use formatContent to overwrite the dropdown row format."}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{collection:K,value:J,setValue:P,formatRecord:function(e){return{id:e.login.uuid,name:"".concat(e.name.first," ").concat(e.name.last),pic:e.picture.thumbnail}},formatContent:function(e){return Object(p.jsxs)("span",{children:[Object(p.jsx)("img",{src:e.pic,alt:"profile"}),e.name]})}})}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:["Value is ",JSON.stringify(J)]})]})]}),Object(p.jsx)("div",{className:"row",children:u?Object(p.jsx)("div",{className:"twelve columns",children:Object(p.jsx)("pre",{children:Object(p.jsx)("code",{children:"\nconst formatUserRecord = (record) => {\n  return {\n    id: record.login.uuid, \n    name: `${record.name.first} ${record.name.last}`,\n    pic: record.picture.thumbnail\n  }\n}\n\nconst formatUserContent = (record) => {\n  return <span><img src={record.pic} alt='profile'/>{record.name}</span>\n}\n\nreturn (\n  <Typeahead\n    collection={colUser}\n    value={valueUser}\n    setValue={setValueUser}\n\n    formatRecord={formatUserRecord}\n    formatContent={formatUserContent}\n  />\n  <div>Value is {JSON.stringify(valueUser)}</div>\n);\n"})})}):""})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),k()}],[[25,1,2]]]);
//# sourceMappingURL=main.7b456dbc.chunk.js.map