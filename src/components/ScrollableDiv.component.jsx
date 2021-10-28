import React from 'react';

import './ScrollableDiv.style.css';

class ScrollableDiv extends React.Component {
    constructor(props) {
        super(props);

        this.divRef = React.createRef();
    }

    componentDidUpdate() {
        this.divRef.current && this.divRef.current.scrollIntoView();
    }

    notFound() {
        return <div className={"notfound"}>Not Found!</div>;
    }

    buildItems() {
        return (
        <div className='scrollabe_div'>
            <ul>
                {
                    this.props.data.map( (val, key) => 
                        <li key={val.id}
                            ref={ (this.props.index === key) ? this.divRef : ""} 
                            className={ (this.props.index === key) ? "selected" : ""} 
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