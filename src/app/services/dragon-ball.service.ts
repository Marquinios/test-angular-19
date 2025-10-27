import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem("characters");
  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  characters = signal<Character[]>(loadFromLocalStorage());

  // Se puede instanciar en el constructor en el algun hook. La forma moderna es la siguiente.
  // Se activan cuando una signal cambia de valor
  // Es ideal usar efect solo para una tarea en concreto. Es decir que no hagas muchas tareas
  // No usar en solicitudes http
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(character: Character) {
    this.characters.update(list => [...list, character]);
  }
}
