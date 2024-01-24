import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IMove } from '../../models/move.model';
import { NgIf } from '@angular/common';
import { FormatterService } from '../../services/formatter.service';

@Component({
  selector: 'T8-movelist-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movelist-item.component.html',
  styleUrl: './movelist-item.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MovelistItemComponent implements OnInit {
  @Input() move?: IMove;
  inputDisplay: string = '';
  propertiesDisplay: string = '';
  breakInputDisplay: string = '';

  constructor(private formatter: FormatterService) {}

  ngOnInit(): void {
    if (this.move) {
      this.inputDisplay = this.formatter.parseMove(this.move.input);
      this.propertiesDisplay = this.formatter.parseProperties(
        this.move.properties,
      );
      if (this.move.breakInput) {
        this.breakInputDisplay = this.formatter.parseMove(this.move.breakInput);
      }
    }
  }
}
