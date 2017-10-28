import FlickrPhoto from "../vo/FlickrPhoto";

export default class FlickrUtils {
    static buildPhotoURL(photo: FlickrPhoto) {
        const photoUrl = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
        return photoUrl;
    }
}