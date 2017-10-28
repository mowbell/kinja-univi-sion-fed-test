import * as React from "react";
require("!style-loader!css-loader!sass-loader!./common.scss");
export interface LoadingProps {
    small?:boolean
}

export default class LoadingIndicator extends React.Component<LoadingProps, undefined> {
    render() {
        return <div className={"loading " + (this.props.small?'small':'')}/>;
    }
}
