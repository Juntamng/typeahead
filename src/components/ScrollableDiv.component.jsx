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

    renderContent(record) {
        if (this.props.formatContent) {
            return this.props.formatContent(record);
        }
        else {
            return record.name;
        }
    }

    render() {
        return (
        <div className='scrollabe_div'>
            <ul>
                {
                    this.props.collection.map( (val, idx) => {
                        return (<li key={val.id}
                            ref={ (this.props.index === idx) ? this.divRef : null } 
                            className={ (this.props.index === idx) ? "selected" : ""} 
                            onClick={ () => this.props.onSelectItem(val.id) } 
                        >
                            {this.renderContent(val)}
                        </li>);
                    })
                }
            </ul>
        </div>
        )
    }
}

export default ScrollableDiv;