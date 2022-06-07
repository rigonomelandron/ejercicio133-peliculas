import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

//Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


//Componentes propios
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { SeriesComponent } from './components/series/series.component';
import { ErrorComponent } from './components/error/error.component';
import { ActoresComponent } from './components/actores/actores.component';
import { FichaPeliComponent } from './components/ficha-peli/ficha-peli.component';


@NgModule({
  declarations: [AppComponent, MainComponent, FooterComponent, AyudaComponent, PelisComponent, SeriesComponent, ErrorComponent, ActoresComponent, FichaPeliComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
