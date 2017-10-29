import * as React from "react";
import { configure, shallow } from "enzyme";
import SliderPhoto from "../src/components/slideshow/slider/SliderPhoto";
import FlickrPhoto from "../src/vo/FlickrPhoto";
let Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });

describe("Testing SliderPhoto component", () => {
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
    it("should to have .slider-photo class", () => {
        const wrapper = shallow(
        <SliderPhoto photo={photo} />
        );
        const div = wrapper.find("div");
        expect(div.hasClass("slider-photo")).toBe(true);
    });
});