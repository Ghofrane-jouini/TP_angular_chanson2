import { Routes } from '@angular/router';
import { Chansons } from './chansons/chansons';
import { AddChanson } from './add-chanson/add-chanson';
import { UpdateChanson } from './update-chanson/update-chanson';
import { RechercheParGenre } from './recherche-par-genre/recherche-par-genre';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
export const routes: Routes = [
    { path: "chansons", component : Chansons },
    {path: "update-chanson/:id", component: UpdateChanson},
    {path: "add-chanson", component : AddChanson},
    {path: "", redirectTo: "chansons", pathMatch: "full"},
    {path: "recherche-par-genre", component :RechercheParGenre },
    {path: "recherche-par-nom", component : RechercheParNom},

];
