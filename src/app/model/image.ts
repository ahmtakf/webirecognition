import Person from './person';

class Image {

    id: number;
    url: string;
    uploadDate: Date;
    person: Person;

    constructor(id: number, url: string, uploadDate: Date, person: Person) {
        this.id = id;
        this.url = url;
        this.uploadDate = uploadDate;
        this.person = person;
    }
}

export default Image;

