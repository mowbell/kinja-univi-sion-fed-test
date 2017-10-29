import * as React from "react";
import { configure, shallow } from "enzyme";
import RelatedPhoto from "../src/components/slideshow/related-photos/RelatedPhoto";
import FlickrPhoto from "../src/vo/FlickrPhoto";
let Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

describe("Testing RelatedPhoto component", () => {
    const photo: FlickrPhoto = {
        "id": "24117199828",
        "owner": "150836035@N04",
        "secret": "31c436dd1a",
        "server": "4498",
        "farm": 5,
        "title": "Shopping Friday drinking very good \ud83d\ude0a",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    };
    it("should to call onClick", () => {
        const onClickPhoto = jest.fn();
        const wrapper = shallow(
        <RelatedPhoto photo={photo} index={1} onClick={onClickPhoto} />
        );
        const p = wrapper.find(".related-photo");
        p.simulate("click");
        expect(onClickPhoto).toBeCalledWith(1);
    });
});