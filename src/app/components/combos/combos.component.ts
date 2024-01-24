import { NgFor, NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characters } from '../../data/characters';
import { ICombo } from '../../models/combo.model';
import { FormatterService } from '../../services/formatter.service';

@Component({
  selector: 'T8-combos',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './combos.component.html',
  styleUrl: './combos.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CombosComponent {
  character: string | null = null;
  combos: Array<ICombo> | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formatter: FormatterService,
  ) {}

  ngOnInit(): void {
    this.character = this.activatedRoute.parent?.snapshot.paramMap.get(
      'name',
    ) as string;
    const data = characters.find((c) => c.name === this.character);
    if (data && data.combos) {
      this.combos = data.combos.map((c) => {
        c.input = this.formatter.parseCombo(c.input);
        return c;
      });
    }
  }
}
