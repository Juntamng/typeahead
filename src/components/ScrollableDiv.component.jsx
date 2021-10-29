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

    notFound() {
        // todo: component
        return <div className={"notfound"}>Not Found!</div>;
    }

    buildItems() {
        return (
        <div className='scrollabe_div'>
            <ul>
                {
                    this.props.data.map( (val, idx) => 
                        <li key={val.id}
                            ref={ (this.props.index === idx) ? this.divRef : ""} 
                            className={ (this.props.index === idx) ? "selected" : ""} 
                            onClick={ () => this.props.onSelectItem(val.id) }
                        >{val.name}</li> 
                    )
                }
            </ul>
        </div>
        )
    }

    render()
    {
        if (this.props.loading) {
            return '';
        }
        else {
            return this.props.data.length ? this.buildItems() : this.notFound();
        }
    }
}

export default ScrollableDiv;