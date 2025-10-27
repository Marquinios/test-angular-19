import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonBallComponent } from './pages/dragon-ball/dragon-ball.component';
import { DragonBallSuperComponent } from './pages/dragon-ball-super/dragon-ball-super.component';

export const routes: Routes = [
    {
        path: "",
        component: CounterComponent
    },
    {
        path: "hero",
        component: HeroComponent
    },
    {
        path: "dragon-ball",
        component: DragonBallComponent
    },
    {
        path: "dragon-ball-super",
        component: DragonBallSuperComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];
