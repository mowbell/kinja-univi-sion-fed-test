import * as React from "react";
require("!style-loader!css-loader!sass-loader!./Slider.scss");
export interface SliderPhotoProps {
}

export default class SliderPhoto extends React.Component<SliderPhotoProps, undefined> {
    render() {
        return <figure className="slider-photo">
          <img src="http://farm5.static.flickr.com/4456/26180125519_0a84cf89d5_h.jpg" alt=""/>  
        </figure>;
    }
}
