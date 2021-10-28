import React from 'react';
import _ from 'underscore';

import SearchTextbox from "./SearchTextbox.component";
import ScrollableDivComponent from "./ScrollableDiv.component";

import './Typeahead.style.css';

class Typeahead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            value: '',
            filterData: [],
            toggleDropdown: false,
            loading: false,
            index: -1
        }

        //this.handleKeyPress = _.debounce( this.props.onSearchText, 1000  );
        this.handleSearchText = this.handleSearchText.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

        this.handleSelectItem = this.handleSelectItem.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.closeOnWindowClick = this.closeOnWindowClick.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener("click", this.closeOnWindowClick);
    }
    
    componentWillUnmount() {
        window.removeEventListener("click", this.closeOnWindowClick);
    }

    handleClick(e) {
        e.stopPropagation();
    }

    clearKeyIndex() {
        this.setState({index: -1});
    }

    handleSearchText(event) {
        this.setState({
            searchText: event.target.value, 
            toggle: true,
            loading: true
        });

        
        if (event.target.value === "") 
        {
            this.setState({
                filterData: []
            });
            return ;
        }
        
        _.debounce( () => {
            this.setState({
                filterData: this.props.data.filter((val, key) => 
                    val.name.indexOf(event.target.value) > -1
                ),
                loading: false
            });
            this.clearKeyIndex();
        }, 200)();
    }

    handleClear(e) {
        this.setState({
            searchText: '',
            value: '',
            filterData: [],
            toggle: false
        });
        this.clearKeyIndex();
    }

    handleToggle(e) {
        this.setState( (state, props) => {
            let bToggle = !state.toggle;

            if (state.filterData.length === 0) {
                bToggle = (state.searchText.length) ? bToggle = true : false;  
            }
            
            return { toggle: bToggle };
        });
        this.clearKeyIndex();
    }

    handleSelectItem(key) {
        const findItem = this.props.data.find( item => item.id === key);

        if (findItem) {
            const name = findItem.name;
            this.setState({
                searchText: name,
                value: name,
                toggle: false
            });
        }
        this.clearKeyIndex();
    }

    handleKeyUp(e) {
        switch (e.key) {
            case "ArrowUp":
                if (this.state.index > 0) {
                    this.setState((state, props) => {
                        return { index: state.index-1 }
                    })
                }
                break;
            case "ArrowDown":
                if (this.state.index < this.state.filterData.length-1) {
                    this.setState((state, props) => {
                        return {index: state.index+1}
                    })
                }
                break;
            case "Enter":
                this.handleEnter();
                break;
        }
    }

    handleEnter() {
        if (this.state.index > -1) {
            const item = this.state.filterData[this.state.index];
            
            if (item)
                this.handleSelectItem(item.id);
        }
    }

    closeOnWindowClick() { 
        this.setState({toggle: false});
    }

    render() {
        return (
            <div className='typeahead' onClick={this.handleClick}>
                <SearchTextbox 
                    onSearchText={this.handleSearchText} 
                    onClear={this.handleClear}
                    onToggle={this.handleToggle}
                    onKeyUp={this.handleKeyUp}
                    searchText={this.state.searchText}
                />
                {
                    this.state.toggle ? 
                    <ScrollableDivComponent 
                        loading={this.state.loading} 
                        data={this.state.filterData} 
                        onSelectItem={this.handleSelectItem} 
                        index={this.state.index}
                    />
                    : ''
                }
            </div>    
    )}
}

export default Typeahead;