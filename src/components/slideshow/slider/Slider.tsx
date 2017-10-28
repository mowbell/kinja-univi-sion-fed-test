import * as React from "react";
import SliderPhoto from "./SliderPhoto";
import {SliderButton, ORIENTATION} from "./SliderButton";
require("!style-loader!css-loader!sass-loader!./Slider.scss");

export interface SliderProps {
}

export class Slider extends React.Component<SliderProps, undefined> {
    render() {
        return <section className="slider">
            <h1>Slider</h1>
            <SliderButton orientation={ORIENTATION.LEFT}/>
            <SliderPhoto/>
            <SliderPhoto/>
            <SliderPhoto/>
            <SliderButton orientation={ORIENTATION.RIGHT}/>
        </section>;
    }
}
