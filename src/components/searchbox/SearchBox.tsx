import * as React from "react";
require("!style-loader!css-loader!sass-loader!./SearchBox.scss");
import {debounce} from "lodash";
export interface SearchBoxProps {
    onTextChange: Function;
    query: string;
}
export interface SearchBoxState {
    query: string;
}

export default class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.notifyQueryChange =  debounce(this.notifyQueryChange, 250);
    }
    componentWillMount() {
        this.setState({
            query: this.props.query
        });
    }
    handleChange (e) {
        e.preventDefault();
        let {value} = e.currentTarget;
        this.setState({ query: value }, this.notifyQueryChange);
    }
    notifyQueryChange() {
        this.props.onTextChange(this.state.query);
    }
    render() {
        return <section className="search-box">
            <input
                type="text" className="search-box-input" placeholder="Escriba su busqueda..."
                onChange={this.handleChange}
                value={this.state.query}
            />
        </section>;
    }
}
