import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IMove } from '../../models/move.model';
import { NgIf } from '@angular/common';

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

  ngOnInit(): void {
    if (this.move) {
      this.inputDisplay = this.parseMove(this.move.input);
      this.propertiesDisplay = this.parseProperties(this.move.properties);
    }
  }

  private parseProperties(properties: string): string {
    return properties
      .split(',')
      .map((x) => this.translateToEnglish(x))
      .join(', ');
  }

  private parseMove(input: string): string {
    return input
      .split(',')
      .map((x) => this.translateInput(x))
      .join('');
  }

  private translateInput(input: string): string {
    return input
      .split(' ')
      .map((x) => this.createImageTag(x))
      .join('');
  }

  private createImageTag(action: string): string {
    const imageBaseUrl = '/assets/images/icons/';
    const image = document.createElement('img');
    image.classList.add('input-icon');
    image.alt = `${action} Icon`;

    switch (action) {
      case 'n':
        // case 'h':
        // case 'l':
        // case 'm':
        image.src = imageBaseUrl + `${action}.webp`;
        image.title = this.translateToEnglish(action);
        break;

      case 'df':
      case 'db':
      case 'uf':
      case 'ub':
      case 'f':
      case 'b':
      case 'd':
      case 'u':
        image.src = imageBaseUrl + `tap_${action}.webp`;
        image.title = this.translateToEnglish(action);
        break;

      case 'df~':
      case 'db~':
      case 'uf~':
      case 'ub~':
      case 'f~':
      case 'b~':
      case 'd~':
      case 'u~':
        const cleanAction = action.replace('~', '');
        image.src = imageBaseUrl + `hold_${cleanAction}.webp`;
        image.title = `Hold ${this.translateToEnglish(cleanAction)}`;
        break;

      default:
        image.src = imageBaseUrl + `button_${action.replace('+', '')}.webp`;
        image.title = action;
        break;
    }

    return image.outerHTML;
  }

  private translateToEnglish(action: string): string {
    return action
      .split('')
      .map((x) => {
        return x
          .replace(/d/g, 'Down')
          .replace(/f/g, 'Forward')
          .replace(/u/g, 'Up')
          .replace(/b/g, 'Back')
          .replace(/n/g, 'Neutral')
          .replace(/h/g, 'High')
          .replace(/l/g, 'Low')
          .replace(/m/g, 'Mid');
      })
      .join(' ');
  }
}
