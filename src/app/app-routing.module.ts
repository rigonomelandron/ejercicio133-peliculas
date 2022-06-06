import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AyudaComponent} from "./components/ayuda/ayuda.component";
import {PelisComponent} from "./components/pelis/pelis.component";
import {SeriesComponent} from "./components/series/series.component";
import {ActoresComponent} from "./components/actores/actores.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [

  {path: "", component:AyudaComponent, pathMatch:"full"},
  {path:"pelis", component:PelisComponent},
  {path:"series",component:SeriesComponent},
  {path:"actores", component: ActoresComponent},
  {path:"error", component:ErrorComponent},
  {path:"**", redirectTo:"/error"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
