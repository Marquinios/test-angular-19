import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragon-ball-character-add',
  imports: [FormsModule],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css'
})
export class CharacterAddComponent {

  name = signal("");
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    console.log({ newCharacter });
    this.newCharacter.emit(newCharacter);
    this.resetForm();
  }

  resetForm() {
    this.name.set("");
    this.power.set(0);
  }
}
