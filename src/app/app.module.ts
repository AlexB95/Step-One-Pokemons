import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from './services/api.service';
import { UpperCasePipe } from './pipes/upper-case.pipe';

import { NotFoundComponent } from './shared/not-found/not-found.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        PokemonsListComponent,
        PokemonDetailsComponent,
        PokeCardComponent,
        UpperCasePipe,
        NotFoundComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        AppRoutingModule,
        MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
