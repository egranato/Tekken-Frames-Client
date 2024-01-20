import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Character } from '../../models/response.models';
import { NgFor, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'T8-character-list',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent implements OnInit {
  characters: Array<Character> = [];

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.http.get<Array<Character>>('characters').subscribe((result) => {
      this.characters = result;
    });
  }

  navigateToCharacter(id: number): void {
    this.router.navigateByUrl(id.toString());
  }

  getCharacterImage(name: string): string {
    const image = '/assets/images/' + name.toLowerCase().replace(' ', '-') + '.webp';
    const background = `linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 54.62%), url("${image}") center top / 102% no-repeat;`
    return background;
  }
}
