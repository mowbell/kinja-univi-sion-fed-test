import * as React from "react";
require("!style-loader!css-loader!sass-loader!./Slider.scss");
export interface SliderButtonProps {
    orientation:ORIENTATION
}
export const enum ORIENTATION {LEFT = 'left', RIGHT = 'right'}
export class SliderButton extends React.Component<SliderButtonProps, undefined> {
    render() {
        return <div className={"slider-button "+this.props.orientation}></div>;
    }
}
