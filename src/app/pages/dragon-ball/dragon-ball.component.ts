import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball',
  imports: [FormsModule],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.css'
})
export class DragonBallComponent {

  name = signal("");
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001 }
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true
    }
  });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update(currrent => [...currrent, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set("");
    this.power.set(0);
  }
}
