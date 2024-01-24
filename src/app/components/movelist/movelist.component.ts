import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characters } from '../../data/characters';
import { IMoveList } from '../../models/movelist.model';
import { MovelistItemComponent } from '../movelist-item/movelist-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'T8-movelist',
  standalone: true,
  imports: [MovelistItemComponent, NgFor, NgIf],
  templateUrl: './movelist.component.html',
  styleUrl: './movelist.component.scss',
})
export class MovelistComponent implements OnInit {
  character: string | null = null;
  movelist: IMoveList | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.character = this.activatedRoute.snapshot.paramMap.get(
      'name',
    ) as string;
    const data = characters.find((c) => c.name === this.character);
    if (data) {
      this.movelist = data.movelist;
    }
  }
}
