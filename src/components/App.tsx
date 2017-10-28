import * as React from "react";
require("!style-loader!css-loader!normalize.css");
import {Slider, RelatedPhotos} from "./slideshow/SlideShow";
import SearchBox from "./searchbox/SearchBox";

require("!style-loader!css-loader!sass-loader!./App.scss");

const reactLogo = require("./react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return <main className="app">
            <SearchBox/>
            <Slider/>
            <RelatedPhotos/>
        </main>;
    }
}
