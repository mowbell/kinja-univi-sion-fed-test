import * as React from "react";
require("!style-loader!css-loader!sass-loader!./Slider.scss");
export interface SliderPhotoProps {
}

export default class SliderPhoto extends React.Component<SliderPhotoProps, undefined> {
    render() {
        return <div className="slider-photo"/>;
    }
}
