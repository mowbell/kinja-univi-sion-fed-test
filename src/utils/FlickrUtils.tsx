import FlickrPhoto from "../vo/FlickrPhoto";
export const enum PHOTO_SIZE {SMALL = "q", NORMAL = "b"}
export default class FlickrUtils {
    static buildPhotoURL(photo: FlickrPhoto, size: PHOTO_SIZE =  PHOTO_SIZE.NORMAL) {
        const photoUrl = `http://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
        return photoUrl;
    }
}