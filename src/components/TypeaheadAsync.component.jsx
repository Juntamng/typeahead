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
            toggle: false,
            loading: false,
            index: -1
        }

        this.showDropdown = this.showDropdown.bind(this);
        this.handleSearchText = this.handleSearchText.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleFocus = this.handleFocus.bind(this);

        this.handleSelectItem = this.handleSelectItem.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.closeOnWindowClick = this.closeOnWindowClick.bind(this);
    }
    
    resetState() {
        this.setState({
            searchText: '',
            value: '',
            toggle: false,
            loading: false,
            index: -1
        });
    }

    componentDidMount() {
        window.addEventListener("click", this.closeOnWindowClick);
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if (!prevProps.collectionLoading && !this.props.collectionLoading) {
            this.state.loading = false;
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
        const val = event.target.value
        this.setState({
            searchText: val, 
            toggle: true,
            loading: true
        });
        
        _.debounce( () => {
            this.props.onFilter(val)
            this.clearKeyIndex();
        }, 200)();
    }

    handleClear(e) {
        this.resetState();
    }

    handleToggle(e) {
        this.setState( (state, props) => {
            let bToggle = !state.toggle;

            if (this.props.collectionFilter.length === 0) {
                bToggle = (state.searchText.length) ? bToggle = true : false;  
            }
            
            return { toggle: bToggle };
        });
        this.clearKeyIndex();
    }

    handleSelectItem(key) {
        const findItem = this.props.collectionFilter.find( item => item.id === key);

        if (findItem) {
            const name = findItem.name;
            this.setState({
                searchText: name,
                value: name,
                toggle: false
            });

            this.props.setValue({...findItem});
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
                if (this.state.index < this.props.collectionFilter.length-1) {
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
        this.setState( { toggle: true } );
    }

    handleEnter() {
        if (this.state.index > -1) {
            const item = this.props.collectionFilter[this.state.index];
            
            if (item)
                this.handleSelectItem(item.id);
        }
    }

    closeOnWindowClick() { 
        this.setState({toggle: false});
    }

    notFound() {
        // todo: component
        return <div className={"notfound"}>Not Found!</div>;
    }

    showDropdown() {
        if (this.state.loading || this.props.collectionLoading) {
            return '';
        }

        if (this.state.toggle && this.state.searchText.length) {
            if (this.state.searchText === this.state.value) {
                return '';
            }
            else if (this.props.collectionFilter.length) {                
                return (
                    <ScrollableDivComponent 
                        loading={this.props.collectionLoading} 
                        data={this.props.collectionFilter} 
                        onSelectItem={this.handleSelectItem} 
                        index={this.state.index}
                    />
                );
            }
            else {
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
                    onToggle={this.handleToggle}
                    onKeyUp={this.handleKeyUp}
                    onFocus={this.handleFocus}
                    searchText={this.state.searchText}
                />
                { this.showDropdown() }
                
            </div>    
    )}
}

export default Typeahead;