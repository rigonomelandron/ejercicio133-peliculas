import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";

//Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

//Componentes propios
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { PelisComponent } from './components/pelis/pelis.component';
import { SeriesComponent } from './components/series/series.component';
import { ErrorComponent } from './components/error/error.component';
import { ActoresComponent } from './components/actores/actores.component';


@NgModule({
  declarations: [AppComponent, MainComponent, FooterComponent, AyudaComponent, PelisComponent, SeriesComponent, ErrorComponent, ActoresComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
