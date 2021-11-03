import React from 'react';
import _ from 'underscore';

import SearchTextbox from "./SearchTextbox.component";
import ScrollableDivComponent from "./ScrollableDiv.component";

import {getRecord} from './util.js';

import './Typeahead.style.css';

class Typeahead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            name: '',
            filterData: [],
            open: false,
            index: -1
        }

        if (props.value) {
            this.state.searchText = this.state.name = props.value.name;
        }

        this.showDropdown = this.showDropdown.bind(this);

        this.handleSearchText = this.handleSearchText.bind(this);
        this.handleClear = this.handleClear.bind(this);
        //this.handleToggle = this.handleToggle.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleFocus = this.handleFocus.bind(this);

        this.handleSelectItem = this.handleSelectItem.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.closeOnWindowClick = this.closeOnWindowClick.bind(this);
    }
    
    resetState() {
        this.setState({
            searchText: '',
            name: '',
            open: false,
            index: -1
        });

        this.props.setValue && this.props.setValue();
    }

    componentDidMount() {
        window.addEventListener("click", this.closeOnWindowClick);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps.collectionFilter) !== JSON.stringify(this.props.collectionFilter)) {
            this.setState({ 
                filterData: this.props.collectionFilter
                                .map((val) => getRecord(val, this.props.formatRecord))
            });
        }
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
        const val = event.target.value;

        this.setState({
            searchText: val, 
            open: true
        });
        
        this.props.setLoading(true);

        _.debounce( () => {
            this.props.onCollectionFilter(val)
            this.clearKeyIndex();
        }, 200)();
    }

    handleClear(e) {
        this.resetState();
    }

    // handleToggle(e) {
    //     this.setState( (state, props) => {
    //         let bToggle = !state.toggle;

    //         if (this.props.collectionFilter.length === 0) {
    //             bToggle = (state.searchText.length) ? bToggle = true : false;  
    //         }
            
    //         return { toggle: bToggle };
    //     });
    //     this.clearKeyIndex();
    // }

    handleSelectItem(id) {
        const findItem = this.state.filterData.find(val => val.id === id);

        if (findItem) {
            this.setState({
                searchText: findItem.name,
                name: findItem.name,
                open: false
            });

            this.props.setValue && this.props.setValue({...findItem});
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
            default:
                break;
        }
    }

    handleFocus() {
        this.setState( { open: true } );
    }

    handleEnter() {
        if (this.state.index > -1) {
            const item = this.state.filterData[this.state.index];
            
            if (item)
                this.handleSelectItem(item.id);
        }
    }

    closeOnWindowClick() { 
        this.setState({open: false});
    }

    notFound() {
        // todo: component
        return <div className={"notfound"}>Not Found!</div>;
    }

    showDropdown() {
        if (this.state.open && this.state.searchText.length) {
            if (this.state.searchText === this.state.name) {
                return '';
            }
            else if (this.state.filterData.length) {                
                return (
                    <ScrollableDivComponent 
                        loading={this.props.loading} 
                        collection={this.state.filterData} 
                        onSelectItem={this.handleSelectItem} 
                        index={this.state.index}
                        formatContent={this.props.formatContent}
                    />
                );
            }
            else {
                if (!this.props.loading) 
                    return this.notFound();
            }
        }
        else {
            return ""
        }
    }

    render() {
        return (
            <div className='typeahead' onClick={this.handleClick}>
                <SearchTextbox 
                    onSearchText={this.handleSearchText} 
                    onClear={this.handleClear}
                    //onToggle={this.handleToggle}
                    onKeyUp={this.handleKeyUp}
                    onFocus={this.handleFocus}
                    searchText={this.state.searchText}
                />
                { this.showDropdown() }
                
            </div>    
    )}
}

export default Typeahead;