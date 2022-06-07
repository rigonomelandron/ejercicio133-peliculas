import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/interfaces/pelicula.interfaces';
import { PeliculasServicesService } from 'src/app/services/peliculas-services.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css']
})
export class PelisComponent implements OnInit {
   public form;
   public pelicula?:Pelicula;

  constructor(private fb: FormBuilder, private _peliculaService?: PeliculasServicesService) {
    this.form = fb.group({
      titulo: ['', Validators.required],
      year: ['']
    });

  }

  ngOnInit(): void {
  }
  public getPelicula(): void {
    if (this.form.valid) {
     let titulo = this.form.value.titulo;
      let year = this.form.value.year;
      if(this._peliculaService?.getPeliculas(titulo, year)){
         let pelicula = this._peliculaService.getPeliculas(titulo, year);
         pelicula.subscribe({
            next: (pelicula) => {
              this.pelicula = pelicula;
              console.log(pelicula);
            },
            error: (err) => {
              console.log(err);
            }

         });
       

      }


  }
  }
}
