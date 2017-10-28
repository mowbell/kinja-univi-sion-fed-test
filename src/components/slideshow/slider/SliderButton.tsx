import * as React from "react";
require("!style-loader!css-loader!sass-loader!./Slider.scss");
export interface SliderButtonProps {
    orientation: ORIENTATION;
    show: boolean;
    onClick?: Function;
}
export const enum ORIENTATION {NEXT = "next", PREVIOUS = "right"}
export class SliderButton extends React.Component<SliderButtonProps, undefined> {
    constructor() {
        super();
        this.onSliderBtnClick = this.onSliderBtnClick.bind(this);
    }
    onSliderBtnClick() {
        this.props.onClick();
    }
    render() {
        return <div
            onClick={this.onSliderBtnClick}
            className={"slider-button " + this.props.orientation + (!this.props.show ? " hidden" : "")}>
        </div>;
    }
}
