import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  static imageBaseUrl = '/assets/images/icons/';

  constructor() {}

  public parseProperties(properties: string): string {
    return properties
      .split(',')
      .map((x) => this.translateToEnglish(x))
      .join(', ');
  }

  public parseMove(input: string): string {
    return input
      .split(',')
      .map((x) => this.translateInput(x))
      .join('');
  }

  public parseCombo(input: string): string {
    const delimiter = document.createElement('img');
    delimiter.src = FormatterService.imageBaseUrl + 'combo-delimiter.png';
    delimiter.alt = 'Combo Delimiter';
    delimiter.title = 'Combo Spacer';

    return input
      .split(';')
      .map((i) => this.translateInput(i))
      .join(delimiter.outerHTML);
  }

  private translateInput(input: string): string {
    return input
      .split(' ')
      .map((x) => this.createImageTag(x))
      .join('');
  }

  private createImageTag(action: string): string {
    const image = document.createElement('img');
    image.classList.add('input-icon');
    image.alt = `${action} Icon`;

    switch (action) {
      case 'FC':
      case 'ws':
      case 'or':
      case 'SNK':
        const paragraph = document.createElement('p');
        paragraph.innerText = action;
        return paragraph.outerHTML;

      case 'n':
        image.src = FormatterService.imageBaseUrl + `${action}.webp`;
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
        image.src = FormatterService.imageBaseUrl + `tap_${action}.webp`;
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
        image.src = FormatterService.imageBaseUrl + `hold_${cleanAction}.webp`;
        image.title = `Hold ${this.translateToEnglish(cleanAction)}`;
        break;

      default:
        image.src =
          FormatterService.imageBaseUrl +
          `button_${action.replace('+', '')}.webp`;
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
          .replace(/m/g, 'Mid')
          .replace(/s/g, 'Special');
      })
      .join(' ');
  }
}
