import { ICombo } from '../../models/combo.model';
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
      damage: '',
      startup: '',
      blockFrames: '',
      hitFrames: '',
      counterFrames: '',
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
      properties: 'l',
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
      input: '1,1,2',
      frameAdvantage: 'KND',
      properties: 'h,h,m',
      damage: '',
    },
    {
      startup: 11,
      input: 'b 1,2',
      frameAdvantage: 'KND',
      properties: 'h,m',
      damage: '',
    },
    {
      startup: 13,
      input: 'df 4,4',
      frameAdvantage: '',
      properties: 'm,m',
      damage: '',
    },
    {
      startup: 13,
      input: 'f n d df 2',
      frameAdvantage: 'Launch',
      properties: 'h',
      damage: '',
    },
  ],
  whileStanding: [
    {
      startup: 10,
      input: 'FC d 1',
      frameAdvantage: '6',
      properties: 'sm',
      damage: '5',
    },
    {
      startup: 11,
      input: 'ws 4,4',
      frameAdvantage: '',
      properties: 'm,m',
      damage: '',
    },
    {
      startup: 13,
      input: 'ws 1,2',
      frameAdvantage: 'Launch',
      properties: 'm,m',
      damage: '',
    },
  ],
};

const combos: Array<ICombo> = [
  {
    input: 'f n d df 2;f n d df 2;df~ 1 2;df 3 1 df~;3',
    damage: 0,
    notes: 'staple',
  },
];

export { movelist, punishers, combos };
