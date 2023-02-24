import React from 'react';

import EmblemCard from './emblemCard';

const emblems = [
  {
    name: 'Marth',
    title: 'Beginnings',
    stats: 'STR, DEX, SPD',
    skills: [
      {
        name: 'Perceptive',
        bondRank: '1',
        description:
          'If unit initiates combat, grants Avo+15. Avo increases with high speed(+1Avo for every 4 Spd)',
        type: 'Sync Skill, inheritable',
        sp: '500',
      },
      { name: 'Avoid+', bondRank: '', description: '', type: '', sp: '' },
      { name: 'Divine Speed', bondRank: '', description: '', type: '', sp: '' },
      {
        name: 'LodeStar Rush',
        bondRank: '',
        description: '',
        type: '',
        sp: '',
      },
      { name: 'Rapier', bondRank: '', description: '', type: '', sp: '' },
      {
        name: 'Sword Agility',
        bondRank: '',
        description: '',
        type: '',
        sp: '',
      },
      {
        name: 'Break Defenses',
        bondRank: '',
        description: '',
        type: '',
        sp: '',
      },
      { name: 'Unyielding', bondRank: '', description: '', type: '', sp: '' },
      { name: 'Sword Prof', bondRank: '', description: '', type: '', sp: '' },
      { name: 'Mercurius', bondRank: '', description: '', type: '', sp: '' },
      { name: 'Falchion', bondRank: '', description: '', type: '', sp: '' },
    ],
  },
  {
    name: 'Celica',
    title: 'Echoes',
    stats: 'STR, MAG, SPD',
    skills: [{ name: '', bondRank: '', description: '', type: '', sp: '' }],
  },
  {
    name: 'Sigurd',
    title: 'the Holy War',
    stats: 'DEX, DEF, BLD, SPD',
    skills: [],
  },
  { name: 'Leif', title: 'Genealogy', stats: 'HP, DEF, BLD', skills: [] },
  { name: 'Roy', title: 'Binding', stats: 'HP, STR, RES', skills: [] },
  { name: 'Lyn', title: 'Blazing', stats: 'DEX, SPD, RES', skills: [] },
  { name: 'Eirika', title: 'the Sacred', stats: 'MAG, DEX, LCK', skills: [] },
  { name: 'Ike', title: 'Radiance', stats: 'HP, STR, DEF', skills: [] },
  { name: 'Mccaiah', title: 'Dawn', stats: 'MAG, RES, LCK', skills: [] },
  { name: 'Lucina', title: 'Awakening', stats: 'DEX, SPD, LCK', skills: [] },
  { name: 'Corrin', title: 'Fates', stats: 'HP, MAG, RES', skills: [] },
  { name: 'Byleth', title: 'the Academy', stats: 'MAG, SPD, LCK', skills: [] },
];
export default function EmblemInfo() {
  return (
    <div>
      <h1>Emblems</h1>
      <div className="emblem-page">
        {emblems.map(emblems => (
          <EmblemCard emblem={emblems} key={emblems.name} />
        ))}
      </div>
    </div>
  );
}
