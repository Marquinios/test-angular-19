import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from "../../components/dragon-ball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragon-ball/character-add/character-add.component";
import { DragonBallService } from '../../services/dragon-ball.service';

@Component({
  selector: 'app-dragon-ball-super',
  imports: [FormsModule, CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragon-ball-super.component.html',
  styleUrl: './dragon-ball-super.component.css'
})
export class DragonBallSuperComponent {

  // NUEVA FORMA
  public dragonBallService = inject(DragonBallService);

  // FORMA TRADICIONAL
  /*   constructor(
      public dragonBallService: DragonBallService
    ){}
      
   */
  /* characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001 }
  ]);

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  } */
}
