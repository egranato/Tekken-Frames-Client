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
      input: '1,2',
      frameAdvantage: '',
      properties: 'h,h',
      damage: '',
    },
    {
      startup: 12,
      input: 'f 2,2',
      frameAdvantage: 'KND (STB)',
      properties: 'h,m',
      damage: '',
    },
    {
      startup: 13,
      input: 'd 1+2',
      frameAdvantage: 'KND',
      properties: 'm',
      damage: '',
    },
    {
      startup: 14,
      input: 'df 3,1',
      frameAdvantage: 'KND',
      properties: 'm,m',
      damage: '',
    },
    {
      startup: 15,
      input: 'df 1,2',
      frameAdvantage: 'Launch',
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
      input: 'db 2,1',
      frameAdvantage: '',
      properties: 'sm, m',
      damage: '',
    },
    {
      startup: 11,
      input: 'ws 4',
      frameAdvantage: '',
      properties: 'm',
      damage: '',
    },
    {
      startup: 13,
      input: 'ws 1,1',
      frameAdvantage: '',
      properties: 'm,h',
      damage: '',
    },
    {
      startup: 14,
      input: 'FC df 2,1+2',
      frameAdvantage: 'KND (STB)',
      properties: 'm,m',
      damage: '',
    },
    {
      startup: 15,
      input: 'ws 2',
      frameAdvantage: 'Launch (STB)',
      properties: 'm',
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
};

const combos: Array<ICombo> = [
  {
    input: 'uf 4;f f 4;b 3;uf 3+4;db 1+2;f f f 2',
    damage: 69,
    notes: 'staple',
  },
  {
    input: 'uf 4;f f 4;b 3;uf 3+4;db 1+2;b 3;uf 3+4',
    damage: 0,
    notes: 'for wall carry',
  },
  {
    input: 'uf 4;f f 4;b 3;uf 3+4;db 1+2;1;f f f 2',
    damage: 0,
    notes: 'hard',
  },
  {
    input: 'uf 4;f f 4;b 3;uf 3+4;db 1+2;1 2;f f f 2',
    damage: 0,
    notes: 'very hard',
  },
];

export { movelist, punishers, combos };
