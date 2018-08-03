class Person {
    private id: number;
    private image: string;
    private name: string;
    private surname: string;
    private gender: boolean;
    private age: number;

    constructor(id: number, image: string, name: string, surname: string, gender: boolean, age: number) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.age = age;
    }

    public getId() {
        return this.id;
    }
    public getImage() {
        return this.image;
    }
    public getName() {
        return this.name;
    }
    public getSurname() {
        return this.surname;
    }
    public getGender() {
        return this.gender;
    }
    public getAge() {
        return this.age;
    }
}

export default Person;
