import * as React from "react";
import LoadingIndicator from "../../common/LoadingIndicator";
import FlickrPhoto from "../../../vo/FlickrPhoto";
import FlickrUtils from "../../../utils/FlickrUtils";
import {PHOTO_SIZE} from "../../../utils/FlickrUtils";
require("!style-loader!css-loader!sass-loader!./RelatedPhotos.scss");
export interface RelatedPhotoProps {
    photo: FlickrPhoto;
    onClick: Function;
    index: number;
}

export default class RelatedPhoto extends React.Component<RelatedPhotoProps, undefined> {
    click() {
        this.props.onClick(this.props.index);
    }
    render() {
        const photo: FlickrPhoto = this.props.photo;
        const photoUrl = FlickrUtils.buildPhotoURL(photo, PHOTO_SIZE.SMALL);
        return <div
            onClick={this.click.bind(this)}
            className="related-photo"
            style={{backgroundImage: `url(${photoUrl})`}}>
        </div>;
    }
}
