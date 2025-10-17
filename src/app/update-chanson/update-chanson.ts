import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import type { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';
import { Genre } from '../model/Genre.model';

@Component({
  selector: 'app-update-chanson',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-chanson.html',
  styles: []
})
export class UpdateChanson implements OnInit {
  currentChanson: Chanson = {
    idChanson: 0, titre: '', artiste: '', duree: 0, dateSortie: new Date(), Genre: { idGen: 0, nomGen: '' }
  };
  Genres!: Genre[];
  updatedGenId!: number;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chansonService: ChansonService
  ) { }

  ngOnInit(): void {
    this.Genres = this.chansonService.listeGenres();
    const id = +this.activatedRoute.snapshot.params['id']; 
    this.currentChanson = this.chansonService.consulterChanson(id)!;
    this.updatedGenId = this.currentChanson.Genre.idGen;
  }

  updateChanson() {
    this.currentChanson.Genre = this.chansonService.consulterGenre(this.updatedGenId);
    this.chansonService.updateChanson({ ...this.currentChanson });
    // alert('Chanson mise à jour avec succès !');
    this.router.navigate(['/chansons']);
  }

}
