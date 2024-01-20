import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'T8-home',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
