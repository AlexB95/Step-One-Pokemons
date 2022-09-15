import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from '../Models/pokemon-details.model';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-poke-card',
    templateUrl: './poke-card.component.html',
    styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

    pokemonDetails!: PokemonDetails;
    @Input('pokemon') pokemonName: string = '';
    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.GetPokemonByName(this.pokemonName).subscribe((result) => {
            this.pokemonDetails = result;
        });
    }
}
