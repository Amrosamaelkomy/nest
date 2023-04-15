/* eslint-disable prettier/prettier */
export class CatCreateDto {
  name: string;
  age: number;
  breed: string;

  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}


export class ListAllEntities {
  limit: number;
  offset: number;
}
