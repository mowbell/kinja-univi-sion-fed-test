import * as React from "react";
import FlickrPhoto from "../../../vo/FlickrPhoto";
import FlickrUtils from "../../../utils/FlickrUtils";
require("!style-loader!css-loader!sass-loader!./Slider.scss");
export interface SliderPhotoProps {
    photo: FlickrPhoto;
}

export default class SliderPhoto extends React.Component<SliderPhotoProps, undefined> {
    render() {
        const photo: FlickrPhoto = this.props.photo;
        const photoUrl = FlickrUtils.buildPhotoURL(photo);
        return <div className="slider-photo" style={{backgroundImage: `url(${photoUrl})`}}/>;
    }
}
