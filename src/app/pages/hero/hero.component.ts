import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name = signal<string>("IronMan");
  age = signal<number>(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set("Spiderman");
    this.age.set(22);
  }

  resetForm() {
    this.name.set("");
    this.age.set(0);
  }
}
