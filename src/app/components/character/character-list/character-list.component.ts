import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

interface Pokemon {
  name: string;
  url: string;
  imageUrl: string;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private router: Router, private charactersService: CharactersService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.charactersService.getAllCharacters().subscribe(response => {
      const pokemonData = response.results;
      this.pokemons = pokemonData.map((pokemon: any) => ({
        name: pokemon.name,
        url: pokemon.url,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.extractPokemonId(pokemon.url)}.png`
      }));
    });
  }
  extractPokemonId(url: string): string {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  }

  extractPokemonName(url: string): string {
    const pokemonId = url.split('/').slice(-2, -1)[0];
    const pokemonData = this.pokemons.find(pokemon => this.extractPokemonId(pokemon.url) === pokemonId);
    return pokemonData ? pokemonData.name : '';
  }

  viewDetails(url: string) {
    const characterName = this.extractPokemonName(url);
    console.log(characterName)
    this.charactersService.getCharacterDetailsByName(characterName).subscribe((character: any) => {
      this.router.navigate(['characterDetail', character.name]);
    });
  }
  
  }
  




