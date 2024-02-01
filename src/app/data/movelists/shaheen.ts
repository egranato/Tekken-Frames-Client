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
      input: '2,3',
      frameAdvantage: '',
      properties: 'h,h',
      damage: '',
    },
    {
      startup: 10,
      input: '2,3,df',
      frameAdvantage: '',
      properties: 'h,h',
      damage: '',
    },
    {
      startup: 12,
      input: 'f 2,3',
      frameAdvantage: '',
      properties: 'h,h',
      damage: '',
    },
    {
      startup: 14,
      input: 'db 2,1',
      frameAdvantage: 'KND',
      properties: 'm,h',
      damage: '',
    },
    {
      startup: 15,
      input: 'df 2',
      frameAdvantage: 'Launch',
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
      input: 'ws 4',
      frameAdvantage: '',
      properties: 'm',
      damage: '',
    },
    {
      startup: 13,
      input: 'ws 3,3',
      frameAdvantage: 'KND',
      properties: 'm,m',
      damage: '',
    },
    {
      startup: 15,
      input: 'ws 2',
      frameAdvantage: 'Launch',
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
    input: 'uf 4;3 df~;SNK 2;df 4 1 df~;db;n;ws 3 3;db 2 df~;SNK 3',
    damage: 0,
    notes: 'staple',
  },
];

export { movelist, punishers, combos };
