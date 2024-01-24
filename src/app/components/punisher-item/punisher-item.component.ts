import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IPunisher } from '../../models/punisher.model';
import { FormatterService } from '../../services/formatter.service';

@Component({
  selector: 'T8-punisher-item',
  standalone: true,
  imports: [],
  templateUrl: './punisher-item.component.html',
  styleUrl: './punisher-item.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PunisherItemComponent implements OnInit {
  @Input() move?: IPunisher;
  inputDisplay: string = '';
  propertiesDisplay: string = '';

  constructor(private formatter: FormatterService) {}

  ngOnInit(): void {
    if (this.move) {
      this.inputDisplay = this.formatter.parseMove(this.move.input);
      this.propertiesDisplay = this.formatter.parseProperties(
        this.move.properties,
      );
    }
  }
}
