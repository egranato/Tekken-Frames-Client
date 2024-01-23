import { IMoveList } from '../../models/movelist.model';

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

export { movelist };
