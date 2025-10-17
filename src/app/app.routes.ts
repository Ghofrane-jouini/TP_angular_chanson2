import { Routes } from '@angular/router';
import { Chansons } from './chansons/chansons';
import { AddChanson } from './add-chanson/add-chanson';
import { UpdateChanson } from './update-chanson/update-chanson';
export const routes: Routes = [
    { path: "chansons", component : Chansons },
    {path: "update-chanson/:id", component: UpdateChanson},
    {path: "add-chanson", component : AddChanson},
    {path: "", redirectTo: "chansons", pathMatch: "full"}

];
