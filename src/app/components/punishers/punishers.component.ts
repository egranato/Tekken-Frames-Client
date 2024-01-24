import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characters } from '../../data/characters';
import { IPunisherList } from '../../models/punisherlist.model';
import { PunisherItemComponent } from '../punisher-item/punisher-item.component';

@Component({
  selector: 'T8-punishers',
  standalone: true,
  imports: [PunisherItemComponent, NgFor, NgIf],
  templateUrl: './punishers.component.html',
  styleUrl: './punishers.component.scss',
})
export class PunishersComponent {
  character: string | null = null;
  punishers: IPunisherList | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.character = this.activatedRoute.parent?.snapshot.paramMap.get(
      'name',
    ) as string;
    const data = characters.find((c) => c.name === this.character);
    if (data) {
      this.punishers = data.punishers;
    }
  }
}
