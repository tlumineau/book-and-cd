import { Book } from "../models/Book";
import { CD } from "../models/CD";

export class BookCdService {

  // liste de livres en dur
  listBooks: Book[] = [
    {
      name: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      description: [
        "Le Petit Prince est une œuvre de langue française.Publié en 1943 à New York simultanément à sa traduction anglaise1, c'est une œuvre poétique et philosophique sous l'apparence d'un conte pour enfants.",
        "Le Petit Prince est le deuxième ouvrage le plus traduit au monde après la Bible"
      ],
      isLend: true
    },
    {
      name: 'Les Misérables',
      author: 'Victor Hugo',
      description: [
        "Ce roman emblématique de la littérature française décrit la vie de pauvres gens dans Paris et la France provinciale du xixe siècle",
        "Il a donné lieu à de nombreuses adaptations, au cinéma et sur de nombreux autres supports"
      ],
      isLend: false
    }
  ];

  // liste des CD en dur
  listCD: CD[] = [
    {
      name: 'Thriller',
      artist: "Michael Jackson",
      description: [
        "Thriller est le sixième album studio de l'artiste américain Michael Jackson",
        "Avec un budget de production de 750 000 dollars, les sessions d'enregistrement se déroulent entre avril et novembre 1982 aux studios Westlake Recording (en) à Los Angeles"
      ],
      isLend: true
    },
    {
      name: "Abbey Road",
      artist: "The Beatles",
      description: [
        "Abbey Road est le onzième album original publié par les Beatles, paru le 26 septembre 1969 au Royaume-Uni",
        "Cité comme un album particulièrement bien produit et remarquablement construit, un des plus influents aussi, à commencer par sa pochette"
      ],
      isLend: false
    }
  ];

  lendOrReturnElement(isBookElement: boolean, index: number){
    isBookElement === true ? (this.listBooks[index].isLend = !this.listBooks[index].isLend) : (this.listCD[index].isLend = !this.listCD[index].isLend);
  }

}
