import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

interface Ability {
  name: string;
  url: string;
}

interface Form {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}

interface CharacterDetails {
  abilities: {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[]; // Cambiar any por el tipo de datos correcto si corresponde
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
}

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character!: CharacterDetails;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const characterId = params.get('id');
      if (characterId) {
        this.loadCharacterDetails(characterId);
      }
    });
  }

  loadCharacterDetails(id: string) {
    this.charactersService.getCharacterDetailsByName(id).subscribe((character: CharacterDetails) => {
      this.character = character;
    });
  }
}
