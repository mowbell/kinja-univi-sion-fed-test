import * as React from "react";
import SliderPhoto from "./SliderPhoto";
import {SliderButton, ORIENTATION} from "./SliderButton";
import LoadingIndicator from "../../common/LoadingIndicator";
require("!style-loader!css-loader!sass-loader!./Slider.scss");

export interface SliderProps {
}

export class Slider extends React.Component<SliderProps, undefined> {
    render() {
        return <section className="slider">
            <SliderButton orientation={ORIENTATION.PREVIOUS}/>
            <SliderPhoto/>
            <SliderPhoto/>
            <SliderPhoto/>
            <SliderButton orientation={ORIENTATION.NEXT}/>
            <LoadingIndicator/>
        </section>;
    }
}
