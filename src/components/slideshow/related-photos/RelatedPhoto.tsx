import * as React from "react";
import LoadingIndicator from "../../common/LoadingIndicator";
require("!style-loader!css-loader!sass-loader!./RelatedPhotos.scss");
export interface RelatedPhotoProps {
}

export default class RelatedPhoto extends React.Component<RelatedPhotoProps, undefined> {
    render() {
        return <div className="related-photo"> 
            <LoadingIndicator small/>
        </div>;
    }
}
