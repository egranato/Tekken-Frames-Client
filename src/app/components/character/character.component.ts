import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'T8-character',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent implements OnInit {
  character: string | null = null;
  characterImage: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.character = this.activatedRoute.snapshot.paramMap.get(
      'name',
    ) as string;
    this.characterImage = `/assets/images/character-portraits/${this.character.toLowerCase().replace(' ', '-')}.webp`;
  }
}
