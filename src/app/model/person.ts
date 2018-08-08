class Person {

    id: number;
    personId: string;
    name: string;
    surname: string;
    gender: boolean | string;
    age: number;

    constructor(id: number, personId: string, name: string, surname: string, gender: boolean | string, age: number) {
        this.id = id;
        this.personId = personId;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.age = age;
    }

}

export default Person;

