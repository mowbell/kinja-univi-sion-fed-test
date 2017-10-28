import * as React from "react";
require("!style-loader!css-loader!sass-loader!./RelatedPhotos.scss");
import RelatedPhoto from "./RelatedPhoto";

export interface RelatedPhotosProps {
}

export class RelatedPhotos extends React.Component<RelatedPhotosProps, undefined> {
    render() {
        return <section className="related-photos">
            <RelatedPhoto/>
            <RelatedPhoto/>
            <RelatedPhoto/>
            <RelatedPhoto/>
        </section>;
    }
}
