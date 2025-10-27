import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragon-ball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  listName = input.required<string>();
  characters = input.required<Character[]>();

}
