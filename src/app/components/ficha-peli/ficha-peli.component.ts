import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula.interfaces';

@Component({
  selector: 'app-ficha-peli',
  templateUrl: './ficha-peli.component.html',
  styleUrls: ['./ficha-peli.component.css']
})
export class FichaPeliComponent implements OnInit {
   @Input()
   public pelicula?:Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

}
