import { Injectable } from '@angular/core';
import Config from '../model/config';
import { Http, RequestOptions } from '@angular/http';

const checkURL = '/image/check';
const getImage = '/image/getimage';
const ten = '/image/lasttenimages';
const addImage = '/image/add';

@Injectable()
export class ImageApiService {

  constructor(private http: Http) { }

  check(imageUpload: File) {
    const formData = new FormData();
    formData.append('image', imageUpload);
    return this.http.post(Config.getInstance().getServer() + checkURL, formData, Config.getInstance().getHeader());
  }

  image(url) {
    const formUrl = new FormData();
    formUrl.append('url', url);
    const opt = new RequestOptions( Config.getInstance().getHeader());
    opt.responseType = 3;

    return this.http.post(Config.getInstance().getServer() + getImage, formUrl, opt);
  }

  getLastTen() {
    return this.http.get(Config.getInstance().getServer() + ten, Config.getInstance().getHeader());
  }

  addImage(image: File, personId: number) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('personId', '' + personId);

    return this.http.post(Config.getInstance().getServer() + addImage, formData, Config.getInstance().getHeader());
  }

}
