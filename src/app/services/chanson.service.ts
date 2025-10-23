import { Injectable } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { Genre } from '../model/Genre.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChansonService {
  chansons: Chanson[];
  chanson!: Chanson;
  Genres: Genre[];
  chansonsRecherche: Chanson[] = [];
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
      },
      {
        idChanson: 4,
        titre: "Bohemian Rhapsody",
        artiste: "Queen",
        duree: 5.9,
        dateSortie: new Date("1975-10-31"),
        Genre: { idGen: 2, nomGen: "Rock" }
      },
      {
        idChanson: 5,
        titre: "Lose Yourself",
        artiste: "Eminem",
        duree: 5.2,
        dateSortie: new Date("2002-10-28"),
        Genre: { idGen: 3, nomGen: "Hip-Hop" }
      },
      {
        idChanson: 6,
        titre: "What a Wonderful World",
        artiste: "Louis Armstrong",
        duree: 2.2,
        dateSortie: new Date("1967-10-18"),
        Genre: { idGen: 4, nomGen: "Jazz" }
      },
      {
        idChanson: 7,
        titre: "No Scrubs",
        artiste: "TLC",
        duree: 3.4,
        dateSortie: new Date("1999-03-24"),
        Genre: { idGen: 5, nomGen: "R&B" }
      },
      {
        idChanson: 8,
        titre: "Redemption Song",
        artiste: "Bob Marley",
        duree: 3.5,
        dateSortie: new Date("1980-10-10"),
        Genre: { idGen: 6, nomGen: "Reggae" }
      },
      {
        idChanson: 9,
        titre: "Enter Sandman",
        artiste: "Metallica",
        duree: 5.3,
        dateSortie: new Date("1991-07-29"),
        Genre: { idGen: 7, nomGen: "Metal" }
      },
      {
        idChanson: 10,
        titre: "Skinny Love",
        artiste: "Bon Iver",
        duree: 3.6,
        dateSortie: new Date("2007-06-01"),
        Genre: { idGen: 11, nomGen: "Folk" }
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
  rechercheParGenre(idGen: number): Chanson[] {
    this.chansonsRecherche = [];
    this.chansons.forEach((cur, index) => {
      if (idGen == cur.Genre.idGen) {
        console.log("cur" + cur);
        this.chansonsRecherche.push(cur);
      }
    });
    return this.chansonsRecherche;
  }
  rechercherParNom(nom: string): Observable<Chanson[]> {
    const chansonsFiltrees = this.chansons.filter(chan =>
      chan.titre?.toLowerCase().includes(nom.toLowerCase())
    );
    return of(chansonsFiltrees);
  }



}
export type { Chanson };


