import FlickPhoto from "../vo/FlickrPhoto";
export default class FlickrAPIService {
    static searchText(text: string= "vodka"): Promise<FlickPhoto[]> {
        const url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=31a4d7ae8168481e5dfea891810fe9cc&text={$text}&format=json&nojsoncallback=1";
        return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data.photos.photo;
        });
    }
}