import * as React from "react";
require("!style-loader!css-loader!normalize.css");
import {Slider, RelatedPhotos} from "./slideshow/SlideShow";
import SearchBox from "./searchbox/SearchBox";
import FlickrPhoto from "../vo/FlickrPhoto";
import FlickrAPIService from "../resources/FlickrApiService";

require("!style-loader!css-loader!sass-loader!./App.scss");

export interface AppProps {
}

export interface AppState {
    photos: Array<FlickrPhoto>;
}

export default class App extends React.Component<AppProps, AppState> {
    componentWillMount() {
        this.setState({ photos: [] });
        this.fetchPhotos();
    }

    fetchPhotos() {
        FlickrAPIService.searchText()
        .then((photos) => {
            this.setState({ photos });
        });
    }
    render() {
        return <main className="app">
            <SearchBox/>
            <Slider photos={this.state.photos}/>
            <RelatedPhotos/>
        </main>;
    }
}
