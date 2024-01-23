import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characters } from '../../data/characters';
import { IMoveList } from '../../models/movelist.model';
import { MovelistItemComponent } from '../movelist-item/movelist-item.component';

@Component({
  selector: 'T8-character',
  standalone: true,
  imports: [MovelistItemComponent, NgFor, NgIf],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent implements OnInit {
  character: string | null = null;
  movelist: IMoveList | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    if (name) {
      const data = characters.find((c) => c.name === name);
      if (data) {
        this.character = data.name;
        this.movelist = data.movelist;
      }
    }
  }
}
