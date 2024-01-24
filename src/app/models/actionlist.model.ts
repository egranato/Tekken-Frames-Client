import { IMove } from './move.model';

export interface IActionList {
  normalPunishers: Array<IMove>;
  whileStandingPunishers: Array<IMove>;
}
