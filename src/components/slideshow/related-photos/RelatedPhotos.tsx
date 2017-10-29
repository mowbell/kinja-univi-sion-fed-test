import * as React from "react";
require("!style-loader!css-loader!sass-loader!./RelatedPhotos.scss");
import RelatedPhoto from "./RelatedPhoto";
import FlickrPhoto from "../../../vo/FlickrPhoto";
import LoadingIndicator from "../../common/LoadingIndicator";

export interface RelatedPhotosProps {
    photos: Array<FlickrPhoto>;
    current: number;
    onPhotoClick?: Function;
}

export class RelatedPhotos extends React.Component<RelatedPhotosProps, undefined> {
    static MAX_ITEMS: number = 6;
    getPhotos(): RelatedPhoto[] {
        let photos = [];
        const {photos: allPhotos, current: currentIndex} = this.props;
        if (allPhotos.length > 0) {
            let photoCount = 0;
            let index = currentIndex;
            do {
                const nextIndex = (index < allPhotos.length - 1) ? index + 1 : 0;
                const nexPhoto = allPhotos[nextIndex];
                photos.push(<RelatedPhoto photo={nexPhoto} index={nextIndex} onClick={this.onPhotoClick.bind(this)}/>);
                photoCount++;
                index = nextIndex;
            }
            while (photoCount < RelatedPhotos.MAX_ITEMS);
        }
        return photos;
    }
    onPhotoClick(index: number) {
        console.log("Click on photo at index ", index);
        this.props.onPhotoClick(index);
    }
    render() {
        return <section className="related-photos">
            {this.getPhotos()}
            {
                (!this.props.photos.length) ?
                <LoadingIndicator small/>
                :
                null
            }
        </section>;
    }
}
