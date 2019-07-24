export class Book {

  name: string;
  author: string;
  description: string[];
  isLend: boolean;

  constructor(name: string, author: string){
    this.name = name;
    this.author = author;
    this.isLend = false;
  }

}
