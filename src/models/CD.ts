export class CD {

  name: string;
  artist: string;
  description: string[];
  isLend: boolean;

  constructor(name: string, artist: string){
    this.name = name;
    this.artist = artist;
    this.isLend = false;
  }

}
