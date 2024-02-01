import { IMoveList } from '../../models/movelist.model';
import { IPunisherList } from '../../models/punisherlist.model';

const movelist: IMoveList = {
  rage: [
    {
      input: 'df 1+2',
      properties: 'm',
      damage: '55',
      startup: '20',
      blockFrames: '',
      hitFrames: 'KND',
      counterFrames: 'KND',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: true,
      heatEngager: false,
      unblockable: false,
    },
  ],
  heatEngager: [
    {
      input: '2+3',
      properties: 'm',
      damage: '14',
      startup: '16',
      blockFrames: '1',
      hitFrames: '2',
      counterFrames: '2',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: true,
      heatEngager: true,
      unblockable: false,
    },
  ],
  heatOnly: [
    {
      input: '2+3',
      properties: 'm',
      damage: '50',
      startup: '20',
      blockFrames: '',
      hitFrames: 'KND',
      counterFrames: 'KND',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
  ],
  normal: [
    {
      input: '1',
      properties: 'h',
      damage: '',
      startup: '10',
      blockFrames: '+1',
      hitFrames: '+8',
      counterFrames: '+8',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
  ],
  throws: [
    {
      input: '1+3',
      properties: 'h',
      damage: '',
      startup: '',
      blockFrames: '',
      hitFrames: '',
      counterFrames: '',
      breakInput: '1 or 2',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
  ],
};

const punishers: IPunisherList = {
  normal: [
    {
      startup: 10,
      input: '2,1',
      frameAdvantage: '',
      properties: 'h,m',
      damage: '',
    },
    {
      startup: 12,
      input: 'b1,2',
      frameAdvantage: '',
      properties: 'h,h',
      damage: '',
    },
    {
      startup: 14,
      input: '1+2,2',
      frameAdvantage: 'KND',
      properties: 'm,m',
      damage: '',
    },
    {
      startup: 15,
      input: 'uf 4',
      frameAdvantage: 'Launch',
      properties: 'm',
      damage: '',
    },
  ],
  whileStanding: [
    {
      startup: 10,
      input: 'FC d 1,2',
      frameAdvantage: '',
      properties: 'sm,m',
      damage: '',
    },
    {
      startup: 11,
      input: 'ws 4',
      frameAdvantage: '6',
      properties: 'm',
      damage: '15',
    },
    {
      startup: 15,
      input: 'ws 1+2',
      frameAdvantage: 'Launch',
      properties: 'm',
      damage: '',
    },
  ],
};

export { movelist, punishers };
