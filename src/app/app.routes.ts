import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { MovelistComponent } from './components/movelist/movelist.component';
import { PunishersComponent } from './components/punishers/punishers.component';
import { CombosComponent } from './components/combos/combos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: ':name',
    component: CharacterComponent,
    children: [
      { path: '', component: MovelistComponent },
      { path: 'punishment', component: PunishersComponent },
      { path: 'combos', component: CombosComponent },
    ],
  },
];
