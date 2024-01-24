import { IPunisher } from './punisher.model';

export interface IPunisherList {
  normal: Array<IPunisher>;
  whileStanding: Array<IPunisher>;
}
