import { ICombo } from '../../models/combo.model';
import { IMoveList } from '../../models/movelist.model';
import { IPunisherList } from '../../models/punisherlist.model';

const movelist: IMoveList = {
  rage: [
    {
      input: 'df 12',
      properties: 'm',
      damage: '55',
      startup: '20',
      blockFrames: '-15',
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
      input: '23',
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
    {
      input: '2,1,2',
      properties: 'h,m,m',
      damage: '10,13,25',
      startup: '12',
      blockFrames: '-13',
      hitFrames: '+17',
      counterFrames: '+17',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: '3,2',
      properties: 'm,h',
      damage: '14,22',
      startup: '14',
      blockFrames: '-6',
      hitFrames: '+17',
      counterFrames: '+17',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: 'b 4,2',
      properties: 'm,m',
      damage: '10,20',
      startup: '17',
      blockFrames: '-11',
      hitFrames: '+17',
      counterFrames: '+17',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: 'uf 2',
      properties: 'm',
      damage: '21',
      startup: '21',
      blockFrames: '-8',
      hitFrames: '+17',
      counterFrames: '+17',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: 'f f f~ 2',
      properties: 'h',
      damage: '40',
      startup: '13',
      blockFrames: '+6',
      hitFrames: '+17',
      counterFrames: '+17',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
  ],
  heatOnly: [
    {
      input: '23',
      properties: 'l,m',
      damage: '40',
      startup: '18',
      blockFrames: '-14',
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
      damage: '5',
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
    {
      input: '1,2',
      properties: 'h,h',
      damage: '5,12',
      startup: '10',
      blockFrames: '-3',
      hitFrames: '+8',
      counterFrames: '+8',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '1,3',
      properties: 'h,l',
      damage: '5,11',
      startup: '10',
      blockFrames: '-12',
      hitFrames: '-1',
      counterFrames: '-1',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '2',
      properties: 'h',
      damage: '10',
      startup: '12',
      blockFrames: '-3',
      hitFrames: '+3',
      counterFrames: '+3',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '2,1',
      properties: 'h,m',
      damage: '10,13',
      startup: '12',
      blockFrames: '-6',
      hitFrames: '+5',
      counterFrames: '+5',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '2,1,2',
      properties: 'h,m,m',
      damage: '10,13,25',
      startup: '12',
      blockFrames: '-13',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: '3',
      properties: 'm',
      damage: '14',
      startup: '14',
      blockFrames: '-10',
      hitFrames: '+1',
      counterFrames: '+1',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: '3,2',
      properties: 'm,h',
      damage: '14,22',
      startup: '14',
      blockFrames: '-6',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: '4',
      properties: 'h',
      damage: '13',
      startup: '12',
      blockFrames: '-11',
      hitFrames: '+5',
      counterFrames: '+9',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'STB,4,2',
      properties: 'h,sm',
      damage: '13,32',
      startup: '12',
      blockFrames: '-17',
      hitFrames: 'KDN',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '4,3',
      properties: 'h,h',
      damage: '13,14',
      startup: '12',
      blockFrames: '0',
      hitFrames: '+15',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: true,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '12',
      properties: 'm',
      damage: '20',
      startup: '17',
      blockFrames: '-14',
      hitFrames: '+2',
      counterFrames: '+2',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '12,12',
      properties: 'm,m',
      damage: '20,10',
      startup: '17',
      blockFrames: '-14',
      hitFrames: '0',
      counterFrames: '0',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '12,12,12',
      properties: 'm,m,m',
      damage: '20,10,18',
      startup: '17',
      blockFrames: '-14',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '12,12,b f 2',
      properties: 'm,m,m',
      damage: '20,10,25',
      startup: '17',
      blockFrames: '-14',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '34',
      properties: 'm',
      damage: '20',
      startup: '24',
      blockFrames: '-11',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '34',
      properties: 'm',
      damage: '20',
      startup: '24',
      blockFrames: '-11',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 2',
      properties: 'h',
      damage: '9',
      startup: '12',
      blockFrames: '0',
      hitFrames: '+6',
      counterFrames: '+6',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 2,1',
      properties: 'h,m',
      damage: '9,12',
      startup: '12',
      blockFrames: '-10',
      hitFrames: '+6',
      counterFrames: '+6',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 2,1,12',
      properties: 'h,m,m',
      damage: '9,12,25',
      startup: '12',
      blockFrames: '-18',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 2,2',
      properties: 'h,m',
      damage: '9,20',
      startup: '12',
      blockFrames: '-26',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 3',
      properties: 'h',
      damage: '18',
      startup: '18',
      blockFrames: '0',
      hitFrames: '+15',
      counterFrames: '+14',
      breakInput: '',
      tailSpin: false,
      homing: true,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 4',
      properties: 'm',
      damage: '23',
      startup: '22',
      blockFrames: '+4',
      hitFrames: '+4',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 12',
      properties: 'm',
      damage: '8',
      startup: '16',
      blockFrames: '-18',
      hitFrames: '-7',
      counterFrames: '-7',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 12,12',
      properties: 'm,m',
      damage: '8,16',
      startup: '16',
      blockFrames: '-14',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'STB,f 12,12',
      properties: 'm,m',
      damage: '8,16',
      startup: '16',
      blockFrames: '-9',
      hitFrames: 'launch',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f 34',
      properties: 'h',
      damage: '18',
      startup: '17',
      blockFrames: '-8',
      hitFrames: 'launch',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'df 1',
      properties: 'm',
      damage: '10',
      startup: '15',
      blockFrames: '-5',
      hitFrames: '+7',
      counterFrames: '+7',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'df 1,2',
      properties: 'm,m',
      damage: '10,15',
      startup: '15',
      blockFrames: '-15',
      hitFrames: 'launch',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'df 2',
      properties: 'm',
      damage: '19',
      startup: '14',
      blockFrames: '-13',
      hitFrames: '+5',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'df 3',
      properties: 'm',
      damage: '12',
      startup: '14',
      blockFrames: '-7',
      hitFrames: '+6',
      counterFrames: '+6',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'df 3,1',
      properties: 'm,m',
      damage: '12,18',
      startup: '14',
      blockFrames: '-12',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'df 3,2',
      properties: 'm,h',
      damage: '12,10',
      startup: '14',
      blockFrames: '-2',
      hitFrames: '+4',
      counterFrames: '+4',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'd 1',
      properties: 'm',
      damage: '14',
      startup: '17',
      blockFrames: '-8',
      hitFrames: '+2',
      counterFrames: '+2',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'd 1,2',
      properties: 'm,m',
      damage: '14,15',
      startup: '17',
      blockFrames: '-9',
      hitFrames: '+4',
      counterFrames: '+4',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'STB,d 1,2',
      properties: 'm,m',
      damage: '14,23',
      startup: '17',
      blockFrames: '+6',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'd 2',
      properties: 'l',
      damage: '6',
      startup: '20',
      blockFrames: '-11',
      hitFrames: '0',
      counterFrames: '0',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'd 2,2',
      properties: 'l,l',
      damage: '6,8',
      startup: '20',
      blockFrames: '-13',
      hitFrames: '-1',
      counterFrames: '-1',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'd 12',
      properties: 'm',
      damage: '28',
      startup: '13',
      blockFrames: '-18',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'db 2',
      properties: 'sl',
      damage: '8',
      startup: '11',
      blockFrames: '-4',
      hitFrames: '+7',
      counterFrames: '+7',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'db 2,1',
      properties: 'sl,m',
      damage: '8,12',
      startup: '11',
      blockFrames: '-9',
      hitFrames: '+3',
      counterFrames: '+3',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'db 3',
      properties: 'l',
      damage: '23',
      startup: '24',
      blockFrames: '-15',
      hitFrames: '+3',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'db 4',
      properties: 'l',
      damage: '7',
      startup: '15',
      blockFrames: '-13',
      hitFrames: '-2',
      counterFrames: '-2',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'db 4,3',
      properties: 'l,h',
      damage: '7,10',
      startup: '15',
      blockFrames: '-13',
      hitFrames: '0',
      counterFrames: '0',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'db 12',
      properties: 'm',
      damage: '20',
      startup: '17',
      blockFrames: '-12',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'STB,db 12',
      properties: 'm',
      damage: '25',
      startup: '17',
      blockFrames: '-2',
      hitFrames: 'launch',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 1',
      properties: 'm',
      damage: '25',
      startup: '18',
      blockFrames: '-5',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: true,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 2',
      properties: 'h',
      damage: '25',
      startup: '14',
      blockFrames: '-9',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 3',
      properties: 'm',
      damage: '14',
      startup: '13',
      blockFrames: '-4',
      hitFrames: '+7',
      counterFrames: '+7',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 3,n 3',
      properties: 'm,m',
      damage: '14,21',
      startup: '13',
      blockFrames: '-12',
      hitFrames: '+7',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 4',
      properties: 'm',
      damage: '10',
      startup: '17',
      blockFrames: '-14',
      hitFrames: '-3',
      counterFrames: '-3',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 4,1',
      properties: 'm,h',
      damage: '10,18',
      startup: '17',
      blockFrames: '+1',
      hitFrames: '+4',
      counterFrames: '+4',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 4,2',
      properties: 'm,m',
      damage: '10,20',
      startup: '17',
      blockFrames: '-11',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: 'b 4,3',
      properties: 'm,h',
      damage: '10,14',
      startup: '17',
      blockFrames: '-8',
      hitFrames: '-4',
      counterFrames: '-4',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 4,3,2',
      properties: 'm,h,m',
      damage: '10,14,20',
      startup: '17',
      blockFrames: '-13',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'STB,b 4,3,2',
      properties: 'm,h,m',
      damage: '10,14,38',
      startup: '17',
      blockFrames: '-1',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 4,4',
      properties: 'm,m',
      damage: '10,16',
      startup: '17',
      blockFrames: '-13',
      hitFrames: 'launch',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 12',
      properties: 'm',
      damage: '25',
      startup: '22',
      blockFrames: '-13',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: true,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 34',
      properties: 'm',
      damage: '24',
      startup: '29',
      blockFrames: '-15',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: true,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'b 23',
      properties: 'm',
      damage: '60',
      startup: '72',
      blockFrames: 'KDN',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: true,
    },
    {
      input: 'uf 2',
      properties: 'm',
      damage: '21',
      startup: '21',
      blockFrames: '-8',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: 'uf 3',
      properties: 'm',
      damage: '21',
      startup: '23',
      blockFrames: '+2',
      hitFrames: '+7',
      counterFrames: '+7',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'uf 4',
      properties: 'm',
      damage: '13',
      startup: '15',
      blockFrames: '-13',
      hitFrames: 'launch',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'uf 34',
      properties: 'm,m',
      damage: '10,14',
      startup: '20',
      blockFrames: '-11',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'uf n 4',
      properties: 'm',
      damage: '20',
      startup: '23',
      blockFrames: '-13',
      hitFrames: 'launch',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f f~ 2',
      properties: 'm',
      damage: '14',
      startup: '14',
      blockFrames: '-18',
      hitFrames: '-7',
      counterFrames: '-7',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f f~ 2,2',
      properties: 'm,h',
      damage: '14,20',
      startup: '14',
      blockFrames: '-2',
      hitFrames: '+6',
      counterFrames: '+6',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f f~ 2,12',
      properties: 'm,m',
      damage: '14,20',
      startup: '14',
      blockFrames: '-13',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f f~ 4',
      properties: 'm',
      damage: '20',
      startup: '15',
      blockFrames: '-1',
      hitFrames: '+6',
      counterFrames: '+13',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'f f f~ 2',
      properties: 'h',
      damage: '40',
      startup: '13',
      blockFrames: '+6',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: true,
      unblockable: false,
    },
    {
      input: 'STB,f f f~ 12',
      properties: 'h',
      damage: '45',
      startup: '13',
      blockFrames: '+8',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'ws 1',
      properties: 'm',
      damage: '12',
      startup: '12',
      blockFrames: '-4',
      hitFrames: '+7',
      counterFrames: '+7',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'ws 1,1',
      properties: 'm,h',
      damage: '12,15',
      startup: '12',
      blockFrames: '-12',
      hitFrames: '+9',
      counterFrames: '+9',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'ws 1,2',
      properties: 'm,m',
      damage: '12,12',
      startup: '12',
      blockFrames: '-9',
      hitFrames: '+4',
      counterFrames: '+4',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'STB,ws 1,2',
      properties: 'm,m',
      damage: '12,23',
      startup: '12',
      blockFrames: '+6',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: true,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'ws 2',
      properties: 'm',
      damage: '20',
      startup: '15',
      blockFrames: '-14',
      hitFrames: 'launch',
      counterFrames: 'launch',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'ws 3',
      properties: 'm',
      damage: '20',
      startup: '16',
      blockFrames: '-8',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'ws 4',
      properties: 'm',
      damage: '18',
      startup: '11',
      blockFrames: '-6',
      hitFrames: '+5',
      counterFrames: '+5',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'FC df 2',
      properties: 'm',
      damage: '14',
      startup: '14',
      blockFrames: '-18',
      hitFrames: '-7',
      counterFrames: '-7',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'FC df 2,2',
      properties: 'm,h',
      damage: '14,20',
      startup: '14',
      blockFrames: '-2',
      hitFrames: '+6',
      counterFrames: '+6',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'FC df 2,12',
      properties: 'm,m',
      damage: '14,20',
      startup: '14',
      blockFrames: '-13',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'ss 4',
      properties: 'l',
      damage: '20',
      startup: '20',
      blockFrames: '-12',
      hitFrames: '+6',
      counterFrames: 'KDN',
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
      input: '13',
      properties: 'h',
      damage: '35',
      startup: '12',
      blockFrames: '-3',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '1 or 2',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '24',
      properties: 'h',
      damage: '35',
      startup: '12',
      blockFrames: '-6',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '1 or 2',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '13 or 24 from left',
      properties: 'h',
      damage: '40',
      startup: '12',
      blockFrames: '-3',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '1',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '13 or 24 from right',
      properties: 'h',
      damage: '40',
      startup: '12',
      blockFrames: '-3',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '2',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: '13 or 24 from back',
      properties: 'h',
      damage: '50',
      startup: '12',
      blockFrames: 'N/A',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: 'unbreakable',
      tailSpin: false,
      homing: false,
      powerCrush: false,
      heatEngager: false,
      unblockable: false,
    },
    {
      input: 'uf 12',
      properties: 'h',
      damage: '40',
      startup: '12',
      blockFrames: '-6',
      hitFrames: 'KDN',
      counterFrames: 'KDN',
      breakInput: '12',
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
      frameAdvantage: '+8',
      properties: 'h,h',
      damage: '17',
    },
    {
      startup: 12,
      input: 'f 2,2',
      frameAdvantage: 'KND (STB)',
      properties: 'h,m',
      damage: '29',
    },
    {
      startup: 12,
      input: '4,3',
      frameAdvantage: '+15',
      properties: 'h,h',
      damage: '27',
    },
    {
      startup: 13,
      input: 'd 12',
      frameAdvantage: 'KND',
      properties: 'm',
      damage: '28',
    },
    {
      startup: 14,
      input: 'df 3,1',
      frameAdvantage: 'KND',
      properties: 'm,m',
      damage: '30',
    },
    {
      startup: 14,
      input: '3,2',
      frameAdvantage: 'KND',
      properties: 'm,h',
      damage: '36',
    },
    {
      startup: 15,
      input: 'df 1,2',
      frameAdvantage: 'Launch',
      properties: 'm,m',
      damage: '25',
    },
    {
      startup: 15,
      input: 'uf 4',
      frameAdvantage: 'Launch',
      properties: 'm',
      damage: '13',
    },
  ],
  whileStanding: [
    {
      startup: 10,
      input: 'db 1',
      frameAdvantage: '+6',
      properties: 'sl',
      damage: '5',
    },
    {
      startup: 11,
      input: 'ws 4',
      frameAdvantage: '+5',
      properties: 'm',
      damage: '18',
    },
    {
      startup: 12,
      input: 'ws 1,1',
      frameAdvantage: '+9',
      properties: 'm,h',
      damage: '27',
    },
    {
      startup: 12,
      input: 'STB,ws 1,2',
      frameAdvantage: 'KDN',
      properties: 'm,m',
      damage: '35',
    },
    {
      startup: 14,
      input: 'FC df 2,12',
      frameAdvantage: 'KND (STB)',
      properties: 'm,m',
      damage: '34',
    },
    {
      startup: 15,
      input: 'ws 2',
      frameAdvantage: 'Launch (STB)',
      properties: 'm',
      damage: '20',
    },
    {
      startup: 15,
      input: 'uf 4',
      frameAdvantage: 'Launch',
      properties: 'm',
      damage: '13',
    },
  ],
};

const combos: Array<ICombo> = [
  {
    input: 'uf 4;f f 4;b 3;uf 34;db 12;f f f~ 2',
    damage: 64,
    notes: 'staple',
  },
  {
    input: 'uf 4;f f 4;b 3;uf 34;db 12;b 3;uf 3+4',
    damage: 59,
    notes: 'for wall carry',
  },
  {
    input: 'uf 4;f f 4;b 3;uf 34;db 12;1;f f f~ 2',
    damage: 65,
    notes: 'hard',
  },
  {
    input: 'ws 2;b 3;b 3;f 2;dash;b 3;d 1 2;f f f~ 2',
    damage: 65,
    notes: 'staple',
  },
  {
    input: 'f 34;db 12;f f~ 4;b 3;f 2;b 4 2',
    damage: 65,
    notes: 'staple',
  },
];

export { movelist, punishers, combos };
