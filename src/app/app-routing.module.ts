import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
    { path: 'Home', component: PokemonsListComponent },
    { path: 'Pokemon/:name', component: PokemonDetailsComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
