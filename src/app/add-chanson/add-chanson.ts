import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre.model';
@Component({
  selector: 'app-add-chanson',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-chanson.html',
  styleUrl: './add-chanson.css'
})
export class AddChanson implements OnInit {
  newChanson: Chanson = {idChanson: 0,titre: '',artiste: '',duree: 0,dateSortie: new Date(),Genre: { idGen: 0, nomGen: '' }};

  Genres!: Genre[];
  newIdGen!: number;
  newGenre!: Genre;


  constructor(private chansonService: ChansonService, private router: Router) { }

  ngOnInit(): void {
    this.Genres = this.chansonService.listeGenres();
  }

  addChanson() {
    this.newGenre =
    this.chansonService.consulterGenre(this.newIdGen);
    this.newChanson.Genre = this.newGenre;
    this.chansonService.ajouterChanson(this.newChanson);
    this.router.navigate(['/chansons']);
    this.newChanson.idChanson = this.chansonService.listeChansons().length;


  }
}