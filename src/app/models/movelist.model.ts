import { IMove } from './move.model';

export interface IMoveList {
  rage: Array<IMove>;
  heatEngager: Array<IMove>;
  heatOnly: Array<IMove>;
  normal: Array<IMove>;
  throws: Array<IMove>;
}
