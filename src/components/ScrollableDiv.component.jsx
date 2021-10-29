import React from 'react';

import './ScrollableDiv.style.css';

class ScrollableDiv extends React.Component {
    constructor(props) {
        super(props);

        this.divRef = React.createRef();
    }

    componentDidUpdate() {
        this.divRef.current && this.divRef.current.scrollIntoView(false);
    }

    render() {
        return (
        <div className='scrollabe_div'>
            <ul>
                {
                    this.props.data.map( (val, idx) => 
                        <li key={val.id}
                            ref={ (this.props.index === idx) ? this.divRef : null } 
                            className={ (this.props.index === idx) ? "selected" : ""} 
                            onClick={ () => this.props.onSelectItem(val.id) } 
                        >
                            {val.name}
                        </li> 
                    )
                }
            </ul>
        </div>
        )
    }
}

export default ScrollableDiv;