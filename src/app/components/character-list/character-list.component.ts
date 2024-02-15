import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { characters } from '../../data/characters';

const ORIGINAL_TITLE = 'Tekken 8 Frame Data';

@Component({
  selector: 'T8-character-list',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit {
  characters: Array<string> = [];

  constructor(private router: Router) {
    this.characters = characters.map((c) => c.name);
  }

  ngOnInit(): void {
    document.title = ORIGINAL_TITLE;
  }

  navigateToCharacter(name: string): void {
    this.router.navigateByUrl(name);
  }

  getCharacterImage(name: string): string {
    const image =
      '/assets/images/character-portraits/' +
      name.toLowerCase().replace(' ', '-') +
      '.webp';
    const background = `linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 54.62%), url("${image}") center top / 102% no-repeat;`;
    return background;
  }
}
