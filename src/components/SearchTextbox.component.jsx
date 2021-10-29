import React from 'react';

import './SearchTextbox.style.css';

class SearchTextbox extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    handleClear(e) {
        this.props.onClear(e);
        this.focusTextInput();
    }

    handleToggle(e) {
        this.props.onToggle(e);
        this.focusTextInput();
    }

    render() {
        return (
            <div className='search_textbox'>
                <input type='text' 
                    placeholder='Search' 
                    ref={this.textInput}
                    value={this.props.searchText}
                    onChange={this.props.onSearchText} 
                    onKeyUp={this.props.onKeyUp}
                />
                { this.props.searchText.length ? 
                    <div className='clear' onClick={this.handleClear}>×</div>
                    : ""
                } 
            <div className='expand' onClick={this.handleToggle}>ᐯ</div>
            </div>
        )
    }
}

export default SearchTextbox;