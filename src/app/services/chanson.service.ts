import { Injectable } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { Genre } from '../model/Genre.model';

@Injectable({
  providedIn: 'root'
})

export class ChansonService {
  chansons: Chanson[];
  chanson!: Chanson;
  Genres: Genre[];
  constructor() {
    this.Genres = [
      { idGen: 1, nomGen: "Pop" },
      { idGen: 2, nomGen: "Rock" },
      { idGen: 3, nomGen: "Rap" },
      { idGen: 4, nomGen: "R&B" },
      { idGen: 5, nomGen: "Classique" },
      { idGen: 6, nomGen: "Jazz" },
      { idGen: 7, nomGen: "Reggae" },
      { idGen: 8, nomGen: "Électro" },
      { idGen: 9, nomGen: "Folk" },
      { idGen: 10, nomGen: "Romantique" }
    ];

    this.chansons = [
      {
        idChanson: 1,
        titre: "Shape of You",
        artiste: "Ed Sheeran",
        duree: 4.2,
        dateSortie: new Date("2017-01-06"),
        Genre: { idGen: 1, nomGen: "Pop" }
      },
      {
        idChanson: 2,
        titre: "Blinding Lights",
        artiste: "The Weeknd",
        duree: 3.5,
        dateSortie: new Date("2019-11-29"),
        Genre: { idGen: 8, nomGen: "Électro" }
      },
      {
        idChanson: 3,
        titre: "Someone Like You",
        artiste: "Adele",
        duree: 4.4,
        dateSortie: new Date("2011-01-24"),
        Genre: { idGen: 10, nomGen: "Romantique" }
      }
    ];
  }

  listeChansons(): Chanson[] {
    return this.chansons;
  }
  listeGenres(): Genre[] {
    return this.Genres;
  }


  ajouterChanson(chanson: Chanson) {
    this.chansons.push(chanson);
  }

  supprimerChanson(chanson: Chanson) {
    const index = this.chansons.indexOf(chanson, 0);
    if (index > -1) this.chansons.splice(index, 1);
    for (let i = 0; i < this.chansons.length; i++) {
      this.chansons[i].idChanson = i + 1;
    }
  }
  consulterChanson(id: number): Chanson | undefined {
    return this.chansons.find(ch => ch.idChanson === id);
  }
  consulterGenre(id: number): Genre {
    return this.Genres.find(Gen => Gen.idGen == id)!;
  }

  updateChanson(chanson: Chanson) {
    const index = this.chansons.findIndex(c => c.idChanson === chanson.idChanson);
    if (index !== -1) {
      this.chansons.splice(index, 1, { ...chanson });
    }
  }


}
export type { Chanson };


