import * as React from "react";
require("!style-loader!css-loader!sass-loader!./SearchBox.scss");
export interface SearchBoxProps {
}

export default class SearchBox extends React.Component<SearchBoxProps, undefined> {
    render() {
        return <section className="search-box">
            <input type="text" className="search-box-input" placeholder="Escriba su busqueda..."/>
        </section>;
    }
}
