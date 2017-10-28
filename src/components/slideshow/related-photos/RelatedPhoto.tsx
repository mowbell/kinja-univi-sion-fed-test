import * as React from "react";
require("!style-loader!css-loader!sass-loader!./RelatedPhotos.scss");
export interface RelatedPhotoProps {
}

export default class RelatedPhoto extends React.Component<RelatedPhotoProps, undefined> {
    render() {
        return <figure className="related-photo">
          <img src="http://farm5.static.flickr.com/4496/24092350328_de532e9394_q.jpg" alt=""/>  
        </figure>;
    }
}
