import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
import FlickrPhoto from "../src/vo/FlickrPhoto";
import FlickrUtils from "../src/utils/FlickrUtils";
import {PHOTO_SIZE} from "../src/utils/FlickrUtils";

describe("build photo urls", () => {
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

    it("should to build url for normal sizes", () => {
        const photoUrl = `http://farm5.static.flickr.com/4498/24117199828_31c436dd1a_b.jpg`;
        expect(FlickrUtils.buildPhotoURL(photo)).toBe(photoUrl);
    });

    it("should to build url for small sizes", () => {
        const photoUrl = `http://farm5.static.flickr.com/4498/24117199828_31c436dd1a_b.jpg`;
        expect(FlickrUtils.buildPhotoURL(photo)).toBe(photoUrl);
    });
});