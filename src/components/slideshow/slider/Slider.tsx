import * as React from "react";
import SliderPhoto from "./SliderPhoto";
import {SliderButton, ORIENTATION} from "./SliderButton";
import LoadingIndicator from "../../common/LoadingIndicator";
require("!style-loader!css-loader!sass-loader!./Slider.scss");
import FlickrPhoto from "../../../vo/FlickrPhoto";
import FlickrUtils from "../../../utils/FlickrUtils";

export interface SliderProps {
    photos: Array<FlickrPhoto>;
}
export interface SliderState {
    photos: Array<FlickrPhoto>;
    currentIndex: number;
    size:number;
}
export class Slider extends React.Component<SliderProps, SliderState> {
    constructor(){
        super();
        this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
    }
    componentWillMount() {
        this.setState({
            photos: [],
            currentIndex: 0,
            size: 0
        });
    }
    componentWillReceiveProps(nextProps: SliderProps) {
        this.setState({
            photos: nextProps.photos,
            size: nextProps.photos.length
        });
    }
    getCurrentPhoto(): FlickrPhoto{
        return this.state.photos[this.state.currentIndex];
    }
    goToPreviousSlide() {
        this.setState({
            currentIndex: this.getPreviousIndex()
        });
    }
    goToNextSlide() {
        this.setState({
            currentIndex: this.getNextIndex()
        });
    }
    getPreviousIndex(): number {
        const hasPrevious = (this.state.currentIndex > 0);
        return hasPrevious ? (this.state.currentIndex - 1) : (this.state.size - 1);
    }
    getNextIndex(): number {
        const hasNext = (this.state.currentIndex < this.state.size - 1);
        return hasNext ? (this.state.currentIndex + 1) : 0;
    }
    preloadPreviousPhoto() {
        return this.preloadPhoto(this.getPreviousIndex());
    }
    preloadNextPhoto() {
        return this.preloadPhoto(this.getNextIndex());
    }
    preloadPhoto(index: number) {
        if( !this.state.size)
            return;
        const photo = this.state.photos[index];
        const photoUrl = FlickrUtils.buildPhotoURL(photo);
        return (
            <div style={{display: "none", backgroundImage: `url(${photoUrl})`}}></div>
        );
    }
    render() {
        const ready = this.state.size > 0;
        console.log("ready", ready);
        // const isFirst: boolean = this.state.currentIndex === 0;
        return <section className="slider">
            <SliderButton
                orientation={ORIENTATION.PREVIOUS}
                show={ready}
                onClick={this.goToPreviousSlide}
            />
            {this.preloadPreviousPhoto()}
            {
            ready ?
            <SliderPhoto photo={this.getCurrentPhoto()}/>
            :
            <LoadingIndicator/>
            }
            <SliderButton
                orientation={ORIENTATION.NEXT}
                show={ready}
                onClick={this.goToNextSlide}
            />
            {this.preloadNextPhoto()}
        </section>;
    }
}
