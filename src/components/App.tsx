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
    current: number;
    currentSearch: string;
}

export default class App extends React.Component<AppProps, AppState> {
    constructor() {
        super();
        this.updateCurrentIndex = this.updateCurrentIndex.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }
    componentWillMount() {
        this.setState({ photos: [], current: 0, currentSearch: "React Js" }, this.fetchPhotos);
    }

    fetchPhotos() {
        const query = this.state.currentSearch;
        FlickrAPIService.searchText(query)
        .then((photos) => {
            this.setState({ photos });
        })
        .catch(() => {

        });
    }

    updateCurrentIndex(index: number) {
        this.setState({current: index});
    }

    onSearch(query: string) {
        this.setState({currentSearch: query, photos: [], current: 0}, this.fetchPhotos);
    }
    render() {
        return <main className="app">
            <SearchBox onTextChange={this.onSearch} query={this.state.currentSearch}/>
            <Slider photos={this.state.photos} current={this.state.current} onSlideChange={this.updateCurrentIndex}/>
            <RelatedPhotos photos={this.state.photos} current={this.state.current} onPhotoClick={this.updateCurrentIndex}/>
        </main>;
    }
}
