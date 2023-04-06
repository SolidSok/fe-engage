const classData = [
  {
    name: 'Dragon Child',
    skill: null,
    weapons: [{ name: 'Sword', rank: 'B' }],
    type: 'Dragon',
    unique: 'Alear',
    weakness: 'Dragon',
    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 10,
      spd: 15,
      def: 10,
      res: 10,
      lck: 5,
      bld: 5,
    },
    maxStats: {
      hp: 68,
      str: 41,
      mag: 25,
      dex: 36,
      spd: 43,
      def: 35,
      res: 25,
      lck: 35,
      bld: 13,
    },
  },
  {
    name: 'Divine Dragon',
    skill: {
      name: 'Divine Spirit',
      description: "Unit's engage meter is shortened one step.",
    },
    weapons: [
      { name: 'Sword', rank: 'A' },
      { name: 'Arts', rank: 'B' },
    ],
    type: 'Dragon',
    unique: 'Alear',

    weakness: 'Dragon',
    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 10,
      spd: 15,
      def: 15,
      res: 15,
      lck: 10,
      bld: 5,
    },
    maxStats: {
      hp: 68,
      str: 41,
      mag: 25,
      dex: 36,
      spd: 43,
      def: 35,
      res: 25,
      lck: 35,
      bld: 13,
    },
  },
  {
    name: 'Fell Child',
    skill: {
      name: 'Fell Spirit',
      description:
        "At the start of each turn, unit's engage meter is filled by 1.",
    },
    weapons: [
      { name: 'Knife', rank: 'B' },
      { name: 'Tome', rank: 'S' },
    ],
    type: 'Dragon',
    unique: 'Veyle',
    weakness: 'Dragon',
    growths: {
      hp: 10,
      str: 10,
      mag: 25,
      dex: 10,
      spd: 5,
      def: 10,
      res: 25,
      lck: 0,
      bld: 0,
    },
    maxStats: {
      hp: 48,
      str: 35,
      mag: 48,
      dex: 36,
      spd: 33,
      def: 25,
      res: 41,
      lck: 30,
      bld: 11,
    },
    spoiler: true,
  },

  {
    name: 'Noble (Alfred)',
    skill: null,
    weapons: [{ name: 'Lance', rank: 'B' }],
    type: 'Cavalry',
    unique: 'Alfred',

    weakness: 'Mounted',
    growths: {
      hp: 15,
      str: 15,
      mag: 0,
      dex: 5,
      spd: 5,
      def: 20,
      res: 5,
      lck: 15,
      bld: 0,
    },
    maxStats: {
      hp: 71,
      str: 45,
      mag: 20,
      dex: 33,
      spd: 35,
      def: 37,
      res: 21,
      lck: 45,
      bld: 16,
    },
  },
  {
    name: 'Avenir',
    skill: {
      name: 'Golden Lotus',
      description:
        'During combat, may prevent 50% of physical damage taken. Trigger %=Dex.',
    },
    weapons: [
      { name: 'Sword', rank: 'B' },
      { name: 'Lance', rank: 'A' },
    ],
    type: 'Cavalry',
    unique: 'Alfred',

    weakness: 'Mounted',
    growths: {
      hp: 15,
      str: 15,
      mag: 0,
      dex: 5,
      spd: 10,
      def: 25,
      res: 5,
      lck: 20,
      bld: 5,
    },
    maxStats: {
      hp: 71,
      str: 45,
      mag: 20,
      dex: 33,
      spd: 35,
      def: 37,
      res: 21,
      lck: 45,
      bld: 16,
    },
  },
  {
    name: 'Noble (Céline)',
    skill: null,
    weapons: [
      { name: 'Sword', rank: 'B' },
      { name: 'Tome', rank: 'B' },
    ],
    type: 'Mystical',
    unique: 'Céline',

    growths: {
      hp: 0,
      str: 5,
      mag: 10,
      dex: 5,
      spd: 5,
      def: 5,
      res: 10,
      lck: 20,
      bld: 0,
    },
    maxStats: {
      hp: 56,
      str: 38,
      mag: 37,
      dex: 29,
      spd: 41,
      def: 27,
      res: 35,
      lck: 50,
      bld: 11,
    },
  },
  {
    name: 'Vidame',
    skill: {
      name: 'Ignis',
      description:
        'During Combat, may add half of Str to magic damage or half of Mag to all other damage. Trigger 5=Dex.',
    },
    weapons: [
      { name: 'Sword', rank: 'B' },
      { name: 'Tome', rank: 'A' },
      { name: 'Staff', rank: 'B' },
    ],
    type: 'Mystical',
    unique: 'Céline',

    growths: {
      hp: 5,
      str: 10,
      mag: 15,
      dex: 5,
      spd: 5,
      def: 5,
      res: 15,
      lck: 20,
      bld: 0,
    },
    maxStats: {
      hp: 56,
      str: 38,
      mag: 37,
      dex: 29,
      spd: 41,
      def: 27,
      res: 35,
      lck: 50,
      bld: 11,
    },
  },
  {
    name: 'Lord (Diamant)',
    skill: null,
    weapons: [{ name: 'Sword', rank: 'B' }],
    type: 'Backup',
    unique: 'Diamant',

    growths: {
      hp: 15,
      str: 20,
      mag: 0,
      dex: 10,
      spd: 10,
      def: 10,
      res: 0,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 77,
      str: 43,
      mag: 23,
      dex: 23,
      spd: 38,
      def: 38,
      res: 20,
      lck: 25,
      bld: 20,
    },
  },
  {
    name: 'Successeur',
    skill: {
      name: 'Sol',
      description: 'Unit may recover HP=50% damage dealt. Trigger %=Dex.',
    },
    weapons: [
      { name: 'Sword', rank: 'S' },
      { name: 'Axe', rank: 'A' },
    ],
    type: 'Backup',
    unique: 'Diamant',

    growths: {
      hp: 15,
      str: 20,
      mag: 0,
      dex: 10,
      spd: 15,
      def: 15,
      res: 0,
      lck: 10,
      bld: 5,
    },
    maxStats: {
      hp: 77,
      str: 43,
      mag: 23,
      dex: 23,
      spd: 38,
      def: 38,
      res: 20,
      lck: 25,
      bld: 20,
    },
  },
  {
    name: 'Lord (Alcryst)',
    skill: null,
    weapons: [{ name: 'Bow', rank: 'B' }],
    type: 'Covert',
    unique: 'Alcryst',

    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 25,
      spd: 10,
      def: 10,
      res: 0,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 41,
      mag: 20,
      dex: 41,
      spd: 40,
      def: 29,
      res: 19,
      lck: 30,
      bld: 15,
    },
  },
  {
    name: "Tireur d'elite",
    skill: {
      name: 'Luna',
      description:
        "While making an attack, may ignore half of foe's Def/Res. Trigger %=Dex.",
    },
    weapons: [{ name: 'Bow', rank: 'S' }],
    type: 'Covert',
    unique: 'Alcryst',

    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 30,
      spd: 10,
      def: 15,
      res: 5,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 41,
      mag: 20,
      dex: 41,
      spd: 40,
      def: 29,
      res: 19,
      lck: 30,
      bld: 15,
    },
  },
  {
    name: 'Wing Tamer (Ivy)',
    skill: null,
    weapons: [
      { name: 'Tome', rank: 'B' },
      { name: 'Staff', rank: 'B' },
    ],
    type: 'Flying',
    unique: 'Ivy',

    weakness: 'Flier',
    growths: {
      hp: 5,
      str: 0,
      mag: 20,
      dex: 0,
      spd: 0,
      def: 10,
      res: 20,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 60,
      str: 31,
      mag: 40,
      dex: 25,
      spd: 34,
      def: 31,
      res: 40,
      lck: 20,
      bld: 15,
    },
  },
  {
    name: 'Lindwurm',
    skill: {
      name: 'Grasping Void',
      description:
        "When attacking with a Tome, unit may deal extra damage = half of foe's Mag. Trigger %=Dex.",
    },
    weapons: [
      { name: 'Tome', rank: 'S' },
      { name: 'Staff', rank: 'B' },
    ],
    type: 'Flying',
    unique: 'Ivy',

    weakness: 'Flier',
    growths: {
      hp: 5,
      str: 0,
      mag: 25,
      dex: 5,
      spd: 1,
      def: 15,
      res: 25,
      lck: 0,
      bld: 0,
    },
    maxStats: {
      hp: 60,
      str: 31,
      mag: 40,
      dex: 25,
      spd: 34,
      def: 31,
      res: 40,
      lck: 20,
      bld: 15,
    },
  },
  {
    name: 'Wing Tamer (Hortensia)',
    skill: null,
    weapons: [
      { name: 'Tome', rank: 'B' },
      { name: 'Staff', rank: 'B' },
    ],
    type: 'Flying',
    unique: 'Hortensia',

    weakness: 'Flier',
    growths: {
      hp: 0,
      str: 0,
      mag: 15,
      dex: 10,
      spd: 10,
      def: 0,
      res: 25,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 47,
      str: 26,
      mag: 39,
      dex: 36,
      spd: 45,
      def: 19,
      res: 51,
      lck: 53,
      bld: 11,
    },
  },
  {
    name: 'Sleipner Rider',
    skill: {
      name: 'World Tree',
      description:
        'When unit uses a Staff, may not consume a use. Trigger %=Dex.',
    },
    weapons: [
      { name: 'Tome', rank: 'B' },
      { name: 'Staff', rank: 'S' },
    ],
    type: 'Flying',
    unique: 'Hortensia',

    weakness: 'Flier',
    growths: {
      hp: 0,
      str: 0,
      mag: 20,
      dex: 15,
      spd: 15,
      def: 0,
      res: 30,
      lck: 15,
      bld: 0,
    },
    maxStats: {
      hp: 47,
      str: 26,
      mag: 39,
      dex: 36,
      spd: 45,
      def: 19,
      res: 51,
      lck: 53,
      bld: 11,
    },
  },
  {
    name: 'Sentinel (Timerra)',
    skill: null,
    weapons: [{ name: 'Lance', rank: 'B' }],
    type: 'Backup',
    unique: 'Timerra',

    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 10,
      spd: 5,
      def: 20,
      res: 0,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 63,
      str: 35,
      mag: 27,
      dex: 47,
      spd: 41,
      def: 33,
      res: 26,
      lck: 37,
      bld: 12,
    },
  },
  {
    name: 'Picket',
    skill: {
      name: 'Sandstorm',
      description:
        'While making a physical attack, may calculate damage with 150% of Def instead of Str. Trigger %=Dex.',
    },
    weapons: [{ name: 'Lance', rank: 'S' }],
    type: 'Backup',
    unique: 'Timerra',

    growths: {
      hp: 10,
      str: 15,
      mag: 0,
      dex: 10,
      spd: 10,
      def: 20,
      res: 5,
      lck: 5,
      bld: 5,
    },
    maxStats: {
      hp: 63,
      str: 35,
      mag: 27,
      dex: 47,
      spd: 41,
      def: 33,
      res: 26,
      lck: 37,
      bld: 12,
    },
  },
  {
    name: 'Sentinel (Fogado)',
    skill: null,
    weapons: [{ name: 'Bow', rank: 'B' }],
    type: 'Cavalry',
    unique: 'Fogado',

    weakness: 'Mounted',
    growths: {
      hp: 10,
      str: 5,
      mag: 0,
      dex: 15,
      spd: 15,
      def: 5,
      res: 15,
      lck: 0,
      bld: 0,
    },
    maxStats: {
      hp: 67,
      str: 35,
      mag: 28,
      dex: 33,
      spd: 49,
      def: 28,
      res: 31,
      lck: 33,
      bld: 16,
    },
  },
  {
    name: 'Cupido',
    skill: {
      name: 'Back at You',
      description:
        'When countering, unit may deal extra damage = half of damage taken. Trigger% = Dex.',
    },
    weapons: [
      { name: 'Sword', rank: 'B' },
      { name: 'Bow', rank: 'A' },
    ],
    type: 'Cavalry',
    unique: 'Fogado',

    weakness: 'Mounted',
    growths: {
      hp: 10,
      str: 5,
      mag: 5,
      dex: 20,
      spd: 20,
      def: 5,
      res: 20,
      lck: 0,
      bld: 0,
    },
    maxStats: {
      hp: 67,
      str: 35,
      mag: 28,
      dex: 33,
      spd: 49,
      def: 28,
      res: 31,
      lck: 33,
      bld: 16,
    },
  },
  {
    name: 'Sword Fighter',
    skill: null,
    weapons: [{ name: 'Sword', rank: 'B' }],
    type: 'Backup',
    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 15,
      spd: 20,
      def: 0,
      res: 15,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 67,
      str: 40,
      mag: 20,
      dex: 37,
      spd: 41,
      def: 27,
      res: 22,
      lck: 33,
      bld: 12,
    },
  },
  {
    name: 'Swordmaster',
    skill: {
      name: 'Run Through',
      description:
        'Use to attack an adjacent foe, then move to the space opposite that foe.',
    },
    weapons: [{ name: 'Sword', rank: 'S' }],
    type: 'Backup',
    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 15,
      spd: 20,
      def: 0,
      res: 15,
      lck: 15,
      bld: 0,
    },
    maxStats: {
      hp: 67,
      str: 40,
      mag: 25,
      dex: 44,
      spd: 49,
      def: 27,
      res: 26,
      lck: 37,
      bld: 12,
    },
  },
  {
    name: 'Hero',
    skill: {
      name: 'Brave Assist',
      description:
        "If unit's HP is at max while unit make a chain attack, unit attacks twice.",
    },
    weapons: [
      { name: 'Sword', rank: 'A' },
      { name: 'Lance or Axe', rank: 'C^' },
    ],
    type: 'Backup',
    growths: {
      hp: 15,
      str: 15,
      mag: 0,
      dex: 10,
      spd: 15,
      def: 0,
      res: 10,
      lck: 15,
      bld: 0,
    },
    maxStats: {
      hp: 75,
      str: 45,
      mag: 20,
      dex: 37,
      spd: 41,
      def: 34,
      res: 22,
      lck: 33,
      bld: 16,
    },
  },
  {
    name: 'Lance Fighter',
    skill: null,
    weapons: [{ name: 'Lance', rank: 'B' }],
    type: 'Backup',
    growths: {
      hp: 10,
      str: 10,
      mag: 5,
      dex: 20,
      spd: 5,
      def: 10,
      res: 5,
      lck: 0,
      bld: 0,
    },
    maxStats: {
      hp: 69,
      str: 43,
      mag: 29,
      dex: 47,
      spd: 36,
      def: 28,
      res: 25,
      lck: 25,
      bld: 12,
    },
  },
  {
    name: 'Halberdier',
    skill: {
      name: 'Pincer Attack',
      description:
        'If unit initiates combat while an ally is on the opposite side of the foe, always follow up (if weapon allows).',
    },
    weapons: [{ name: 'Lance', rank: 'S' }],
    type: 'Backup',
    growths: {
      hp: 10,
      str: 15,
      mag: 5,
      dex: 20,
      spd: 10,
      def: 15,
      res: 5,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 76,
      str: 46,
      mag: 29,
      dex: 47,
      spd: 36,
      def: 35,
      res: 25,
      lck: 25,
      bld: 15,
    },
  },
  {
    name: 'Royal Knight',
    skill: {
      name: 'Reforge',
      description:
        "If unit's HP is 11 or more and an adjacent ally is broken after combat, sacrifices 10 HP and removes the break status from that ally.",
    },
    weapons: [
      { name: 'Lance', rank: 'A' },
      { name: 'Staff', rank: 'C^' },
    ],
    type: 'Cavalry',
    weakness: 'Mounted',
    growths: {
      hp: 5,
      str: 10,
      mag: 15,
      dex: 15,
      spd: 15,
      def: 5,
      res: 20,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 69,
      str: 43,
      mag: 39,
      dex: 47,
      spd: 40,
      def: 28,
      res: 36,
      lck: 32,
      bld: 12,
    },
  },
  {
    name: 'Axe Fighter',
    skill: null,
    weapons: [{ name: 'Axe', rank: 'B' }],
    type: 'Backup',
    growths: {
      hp: 25,
      str: 20,
      mag: 0,
      dex: 5,
      spd: 10,
      def: 5,
      res: 0,
      lck: 0,
      bld: 5,
    },
    maxStats: {
      hp: 94,
      str: 46,
      mag: 17,
      dex: 23,
      spd: 29,
      def: 20,
      res: 11,
      lck: 23,
      bld: 20,
    },
  },
  {
    name: 'Berserker',
    skill: {
      name: 'Smash+',
      description:
        'When making a smash attack, push the target 2 spaces instead of 1.',
    },
    weapons: [{ name: 'Axe', rank: 'S' }],
    type: 'Backup',
    growths: {
      hp: 30,
      str: 30,
      mag: 0,
      dex: 5,
      spd: 10,
      def: 5,
      res: 0,
      lck: 0,
      bld: 10,
    },
    maxStats: {
      hp: 96,
      str: 49,
      mag: 17,
      dex: 23,
      spd: 29,
      def: 20,
      res: 11,
      lck: 23,
      bld: 24,
    },
  },
  {
    name: 'Warrior',
    skill: {
      name: 'Merciless',
      description: 'Unit deals +50% damage against broken foes.',
    },
    weapons: [
      { name: 'Axe', rank: 'A' },
      { name: 'Bow', rank: 'C^' },
    ],
    type: 'Backup',
    growths: {
      hp: 25,
      str: 20,
      mag: 0,
      dex: 10,
      spd: 15,
      def: 10,
      res: 5,
      lck: 0,
      bld: 5,
    },
    maxStats: {
      hp: 94,
      str: 46,
      mag: 20,
      dex: 30,
      spd: 33,
      def: 27,
      res: 18,
      lck: 23,
      bld: 20,
    },
  },
  {
    name: 'Archer',
    skill: null,
    weapons: [{ name: 'Bow', rank: 'B' }],
    type: 'Covert',
    growths: {
      hp: 10,
      str: 15,
      mag: 0,
      dex: 25,
      spd: 10,
      def: 5,
      res: 0,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 38,
      mag: 20,
      dex: 45,
      spd: 32,
      def: 23,
      res: 24,
      lck: 28,
      bld: 14,
    },
  },
  {
    name: 'Sniper',
    skill: {
      name: 'No Distractions',
      description:
        "Grants Crit+10 during combat with a foe that can't counter.",
    },
    weapons: [{ name: 'Bow', rank: 'S' }],
    type: 'Covert',
    growths: {
      hp: 15,
      str: 15,
      mag: 0,
      dex: 30,
      spd: 10,
      def: 10,
      res: 0,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 45,
      mag: 20,
      dex: 52,
      spd: 32,
      def: 29,
      res: 24,
      lck: 28,
      bld: 14,
    },
  },
  {
    name: 'Bow Knight',
    skill: {
      name: 'Careful Aim',
      description:
        'If unit initiates combat without moving first, grants Hit+40 during combat.',
    },
    weapons: [
      { name: 'Sword, Lance, or Axe', rank: 'C^' },
      { name: 'Bow', rank: 'A' },
    ],
    type: 'Cavalry',
    weakness: 'Mounted',
    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 20,
      spd: 20,
      def: 0,
      res: 15,
      lck: 15,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 38,
      mag: 23,
      dex: 45,
      spd: 37,
      def: 23,
      res: 29,
      lck: 30,
      bld: 14,
    },
  },
  {
    name: 'Sword Armor',
    skill: null,
    weapons: [{ name: 'Sword', rank: 'B' }],
    type: 'Armor',
    weakness: 'Armored',

    growths: {
      hp: 20,
      str: 15,
      mag: 0,
      dex: 10,
      spd: 0,
      def: 30,
      res: 0,
      lck: 0,
      bld: 5,
    },
    maxStats: {
      hp: 75,
      str: 42,
      mag: 16,
      dex: 39,
      spd: 17,
      def: 51,
      res: 16,
      lck: 25,
      bld: 20,
    },
  },
  {
    name: 'Lance Armor',
    skill: null,
    weapons: [{ name: 'Lance', rank: 'B' }],
    type: 'Armor',
    weakness: 'Armored',

    growths: {
      hp: 20,
      str: 15,
      mag: 0,
      dex: 10,
      spd: 0,
      def: 30,
      res: 0,
      lck: 0,
      bld: 5,
    },
    maxStats: {
      hp: 75,
      str: 42,
      mag: 16,
      dex: 39,
      spd: 17,
      def: 51,
      res: 16,
      lck: 25,
      bld: 20,
    },
  },
  {
    name: 'Axe Armor',
    skill: null,
    weapons: [{ name: 'Axe', rank: 'B' }],
    type: 'Armor',
    weakness: 'Armored',

    growths: {
      hp: 20,
      str: 15,
      mag: 0,
      dex: 10,
      spd: 0,
      def: 30,
      res: 0,
      lck: 0,
      bld: 5,
    },
    maxStats: {
      hp: 75,
      str: 42,
      mag: 16,
      dex: 39,
      spd: 17,
      def: 51,
      res: 16,
      lck: 25,
      bld: 20,
    },
  },
  {
    name: 'General',
    skill: {
      name: 'Swap',
      description: 'Use to switch places with an adjacent ally.',
    },
    weapons: [{ name: 'Sword, Lance, or Axe', rank: 'A^' }],
    type: 'Armor',
    weakness: 'Armored',
    growths: {
      hp: 25,
      str: 20,
      mag: 0,
      dex: 10,
      spd: 0,
      def: 30,
      res: 0,
      lck: 0,
      bld: 10,
    },
    maxStats: {
      hp: 86,
      str: 47,
      mag: 16,
      dex: 39,
      spd: 17,
      def: 55,
      res: 16,
      lck: 25,
      bld: 25,
    },
  },
  {
    name: 'Great Knight',
    skill: {
      name: 'Allied Defense',
      description:
        'If unit is between an ally and a foe, reduces damage to unit by 3 during combat with that foe.',
    },
    weapons: [
      { name: 'Sword, Lance or Axe', rank: 'B^' },
      { name: 'Remainder of Sword, Lance, or Axe', rank: 'B^' },
    ],
    type: 'Cavalry',
    weakness: 'Mounted, Armored',
    growths: {
      hp: 20,
      str: 15,
      mag: 0,
      dex: 15,
      spd: 0,
      def: 25,
      res: 10,
      lck: 5,
      bld: 5,
    },
    maxStats: {
      hp: 75,
      str: 42,
      mag: 19,
      dex: 43,
      spd: 25,
      def: 51,
      res: 22,
      lck: 30,
      bld: 20,
    },
  },
  {
    name: 'Sword Cavalier',
    skill: null,
    weapons: [{ name: 'Sword', rank: 'B' }],
    type: 'Cavalry',
    weakness: 'Mounted',
    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 10,
      spd: 10,
      def: 10,
      res: 10,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 69,
      str: 40,
      mag: 21,
      dex: 41,
      spd: 37,
      def: 27,
      res: 29,
      lck: 30,
      bld: 12,
    },
  },
  {
    name: 'Lance Cavalier',
    skill: null,
    weapons: [{ name: 'Lance', rank: 'B' }],
    type: 'Cavalry',
    weakness: 'Mounted',
    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 10,
      spd: 10,
      def: 10,
      res: 10,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 69,
      str: 40,
      mag: 21,
      dex: 41,
      spd: 37,
      def: 27,
      res: 29,
      lck: 30,
      bld: 12,
    },
  },
  {
    name: 'Axe Cavalier',
    skill: null,
    weapons: [{ name: 'Axe', rank: 'B' }],
    type: 'Cavalry',
    weakness: 'Mounted',
    growths: {
      hp: 10,
      str: 10,
      mag: 0,
      dex: 10,
      spd: 10,
      def: 10,
      res: 10,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 69,
      str: 40,
      mag: 21,
      dex: 41,
      spd: 37,
      def: 27,
      res: 29,
      lck: 30,
      bld: 12,
    },
  },
  {
    name: 'Paladin',
    skill: {
      name: 'Pivot',
      description: 'Use to move to the opposite side of an adjacent ally.',
    },
    weapons: [{ name: 'Sword, Lance, or Axe', rank: 'A^' }],
    type: 'Cavalry',
    weakness: 'Mounted',
    growths: {
      hp: 15,
      str: 15,
      mag: 0,
      dex: 10,
      spd: 15,
      def: 15,
      res: 15,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 77,
      str: 45,
      mag: 21,
      dex: 45,
      spd: 37,
      def: 35,
      res: 29,
      lck: 30,
      bld: 16,
    },
  },
  {
    name: 'Wolf Knight',
    skill: {
      name: 'Hobble',
      description:
        'If unit initiates combat with a Knife, inflicts Mov-2 on foe for 1 turn.',
    },
    weapons: [
      { name: 'Sword, Lance, or Axe', rank: 'B^' },
      { name: 'Knife', rank: 'A^' },
    ],
    type: 'Cavalry',
    weakness: 'Mounted',
    growths: {
      hp: 10,
      str: 5,
      mag: 0,
      dex: 10,
      spd: 15,
      def: 15,
      res: 15,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 69,
      str: 40,
      mag: 26,
      dex: 41,
      spd: 45,
      def: 27,
      res: 33,
      lck: 34,
      bld: 12,
    },
  },
  {
    name: 'Mage',
    skill: null,
    weapons: [{ name: 'Tome', rank: 'B' }],
    type: 'Mystical',
    growths: {
      hp: 0,
      str: 0,
      mag: 25,
      dex: 5,
      spd: 0,
      def: 0,
      res: 25,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 43,
      str: 26,
      mag: 40,
      dex: 28,
      spd: 30,
      def: 20,
      res: 40,
      lck: 24,
      bld: 11,
    },
  },
  {
    name: 'Sage',
    skill: {
      name: 'Spell Harmony',
      description:
        'If unit initiates combat with a Tome, grants Atk equal to the number of adjacent allies with Tomes.',
    },
    weapons: [
      { name: 'Tome', rank: 'S' },
      { name: 'Staff', rank: 'B^' },
    ],
    type: 'Mystical',
    growths: {
      hp: 0,
      str: 0,
      mag: 30,
      dex: 5,
      spd: 0,
      def: 0,
      res: 30,
      lck: 15,
      bld: 0,
    },
    maxStats: {
      hp: 43,
      str: 26,
      mag: 48,
      dex: 34,
      spd: 30,
      def: 20,
      res: 44,
      lck: 30,
      bld: 11,
    },
  },
  {
    name: 'Mage Knight',
    skill: {
      name: 'Chaos Style',
      description:
        'If unit initiates combat with a physical attack against a foe armed with magic or vice versa, grants Spd+3 during combat.',
    },
    weapons: [
      { name: 'Sword, Lance, or Axe', rank: 'B^' },
      { name: 'Tome', rank: 'A' },
    ],
    type: 'Cavalry',
    weakness: 'Mounted',
    growths: {
      hp: 5,
      str: 5,
      mag: 25,
      dex: 0,
      spd: 5,
      def: 10,
      res: 25,
      lck: 5,
      bld: 0,
    },
    maxStats: {
      hp: 47,
      str: 35,
      mag: 40,
      dex: 28,
      spd: 32,
      def: 26,
      res: 40,
      lck: 24,
      bld: 12,
    },
  },
  {
    name: 'Martial Monk',
    skill: null,
    weapons: [
      { name: 'Staff', rank: 'B' },
      { name: 'Arts', rank: 'C' },
    ],
    type: 'Qi Adept',
    growths: {
      hp: 0,
      str: 10,
      mag: 25,
      dex: 0,
      spd: 0,
      def: 10,
      res: 20,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 55,
      str: 28,
      mag: 41,
      dex: 26,
      spd: 28,
      def: 20,
      res: 39,
      lck: 29,
      bld: 13,
    },
  },
  {
    name: 'Martial Master',
    skill: {
      name: 'Diffuse Healer',
      description:
        'When unit is healed by a Staff, all adjacent allies also recover 50% of the HP that the unit recovered.',
    },
    weapons: [
      { name: 'Staff', rank: 'A' },
      { name: 'Arts', rank: 'S' },
    ],
    type: 'Qi Adept',
    growths: {
      hp: 5,
      str: 10,
      mag: 20,
      dex: 0,
      spd: 0,
      def: 15,
      res: 25,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 66,
      str: 38,
      mag: 41,
      dex: 26,
      spd: 28,
      def: 27,
      res: 39,
      lck: 29,
      bld: 15,
    },
  },
  {
    name: 'High Priest',
    skill: {
      name: 'Self-Healing',
      description: 'Unit can target itself with healing staves.',
    },
    weapons: [
      { name: 'Tome', rank: 'B' },
      { name: 'Staff', rank: 'S' },
      { name: 'Arts', rank: 'C^' },
    ],
    type: 'Mystical',
    growths: {
      hp: 0,
      str: 0,
      mag: 25,
      dex: 0,
      spd: 5,
      def: 0,
      res: 30,
      lck: 30,
      bld: 0,
    },
    maxStats: {
      hp: 55,
      str: 28,
      mag: 45,
      dex: 31,
      spd: 32,
      def: 20,
      res: 48,
      lck: 38,
      bld: 13,
    },
  },
  {
    name: 'Sword Flier',
    skill: null,
    weapons: [{ name: 'Sword', rank: 'B' }],
    type: 'Flying',
    weakness: 'Flier',
    growths: {
      hp: 5,
      str: 10,
      mag: 5,
      dex: 10,
      spd: 10,
      def: 0,
      res: 10,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 40,
      mag: 31,
      dex: 43,
      spd: 38,
      def: 27,
      res: 22,
      lck: 25,
      bld: 14,
    },
  },
  {
    name: 'Lance Flier',
    skill: null,
    weapons: [{ name: 'Lance', rank: 'B' }],
    type: 'Flying',
    weakness: 'Flier',
    growths: {
      hp: 5,
      str: 10,
      mag: 5,
      dex: 10,
      spd: 10,
      def: 0,
      res: 10,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 40,
      mag: 31,
      dex: 43,
      spd: 38,
      def: 27,
      res: 22,
      lck: 25,
      bld: 14,
    },
  },
  {
    name: 'Axe Flier',
    skill: null,
    weapons: [{ name: 'Axe', rank: 'B' }],
    type: 'Flying',
    weakness: 'Flier',
    growths: {
      hp: 5,
      str: 10,
      mag: 5,
      dex: 10,
      spd: 10,
      def: 0,
      res: 10,
      lck: 10,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 40,
      mag: 31,
      dex: 43,
      spd: 38,
      def: 27,
      res: 22,
      lck: 25,
      bld: 14,
    },
  },
  {
    name: 'Griffin Knight',
    skill: {
      name: 'Clear the Way',
      description:
        "Unit's space and adjacent spaces have a movement cost of 1 for allies.",
    },
    weapons: [
      { name: 'Sword, Lance, or Axe', rank: 'A^' },
      { name: 'Staff', rank: 'C^' },
    ],
    type: 'Flying',
    weakness: 'Flier',
    growths: {
      hp: 0,
      str: 10,
      mag: 15,
      dex: 15,
      spd: 20,
      def: 0,
      res: 15,
      lck: 15,
      bld: 0,
    },
    maxStats: {
      hp: 68,
      str: 40,
      mag: 37,
      dex: 48,
      spd: 49,
      def: 27,
      res: 35,
      lck: 35,
      bld: 14,
    },
  },
  {
    name: 'Wyvern Knight',
    skill: {
      name: 'Air Raid',
      description:
        'If unit initiates combat from a space a foe cannot enter, grants Spd+5 during combat',
    },
    weapons: [
      { name: 'Sword, Lance, or Axe', rank: 'B^' },
      { name: 'Remainder of Sword, Lance, or Axe', rank: 'B^' },
    ],
    type: 'Flying',
    weakness: 'Flier',
    growths: {
      hp: 20,
      str: 20,
      mag: 0,
      dex: 10,
      spd: 5,
      def: 20,
      res: 5,
      lck: 5,
      bld: 5,
    },
    maxStats: {
      hp: 83,
      str: 46,
      mag: 31,
      dex: 43,
      spd: 38,
      def: 35,
      res: 22,
      lck: 25,
      bld: 18,
    },
  },
  {
    name: 'Thief',
    skill: {
      name: 'Pass',
      description: "Foes do not block this unit's movement.",
    },
    weapons: [{ name: 'Knife', rank: 'S' }],
    type: 'Covert',
    growths: {
      hp: 5,
      str: 10,
      mag: 0,
      dex: 20,
      spd: 15,
      def: 15,
      res: 5,
      lck: 15,
      bld: 0,
    },
    maxStats: {
      hp: 60,
      str: 43,
      mag: 22,
      dex: 51,
      spd: 42,
      def: 33,
      res: 23,
      lck: 30,
      bld: 13,
    },
  },
  {
    name: 'Dancer',
    skill: {
      name: 'Special Dance',
      description:
        'If unit uses Dance, grants Dex/Spd/Lck+3 to target for 1 turn.',
    },
    weapons: [{ name: 'Arts', rank: 'A' }],
    type: 'Qi Adept',
    growths: {
      hp: 5,
      str: 10,
      mag: 0,
      dex: 5,
      spd: 15,
      def: 10,
      res: 20,
      lck: 20,
      bld: 0,
    },
    maxStats: {
      hp: 64,
      str: 36,
      mag: 31,
      dex: 29,
      spd: 43,
      def: 24,
      res: 26,
      lck: 39,
      bld: 15,
    },
  },
  {
    name: 'Enchanter',
    skill: {
      name: 'Convoy',
      description: 'Use to deposit or retrieve weapons and items.',
    },
    weapons: [
      { name: 'Knife', rank: 'B^' },
      { name: 'Arts', rank: 'B^' },
    ],
    type: 'Qi Adept',
    growths: {
      hp: 5,
      str: 15,
      mag: 15,
      dex: 15,
      spd: 10,
      def: 5,
      res: 5,
      lck: 15,
      bld: 5,
    },
    maxStats: {
      hp: 53,
      str: 25,
      mag: 25,
      dex: 43,
      spd: 39,
      def: 20,
      res: 22,
      lck: 42,
      bld: 11,
    },
    dlc: true,
  },
  {
    name: 'Mage Cannoneer',
    skill: {
      name: 'Let Fly',
      description:
        'Use to perform a guaranteed-hit, area-of-effect attack at the start of the next player phase. Unit loses equipped weapon.',
    },
    weapons: [{ name: 'Cannon', rank: 'S' }],
    type: 'Armor',
    weakness: 'Armored',
    growths: {
      hp: 15,
      str: 10,
      mag: 0,
      dex: 15,
      spd: 5,
      def: 20,
      res: 5,
      lck: 10,
      bld: 10,
    },
    maxStats: {
      hp: 73,
      str: 45,
      mag: 23,
      dex: 43,
      spd: 23,
      def: 49,
      res: 24,
      lck: 31,
      bld: 18,
    },
    dlc: true,
  },
  {
    name: 'Melusine (Zelestia)',
    skill: {
      name: 'Soulblade',
      description:
        "When atacking with a sword, damage is calculated using average of foe's Def and Res.",
    },
    weapons: [
      { name: 'Sword', rank: 'A' },
      { name: 'Tome', rank: 'S' },
    ],
    type: 'Flying',
    unique: 'Zelestia',
    weakness: 'Flier, Dragon',
    growths: {
      hp: 10,
      str: 10,
      mag: 10,
      dex: 10,
      spd: 15,
      def: 10,
      res: 10,
      lck: 0,
      bld: 5,
    },
    maxStats: {
      hp: 73,
      str: 45,
      mag: 23,
      dex: 43,
      spd: 23,
      def: 49,
      res: 24,
      lck: 31,
      bld: 18,
    },
  },
  {
    name: 'Fell Child (Nel)',
    skill: {
      name: 'Resist Emblems',
      description:
        'When attacked with an engage attack, prevents 20% of damage.',
    },
    weapons: [
      { name: 'Lance', rank: 'A' },
      { name: 'Dragon Stone', rank: 'S' },
    ],
    type: 'Dragon',
    unique: 'Nel',
    weakness: 'Fell Dragon',
    growths: {
      hp: 10,
      str: 10,
      mag: 10,
      dex: 10,
      spd: 15,
      def: 10,
      res: 10,
      lck: 0,
      bld: 5,
    },
    maxStats: {
      hp: 73,
      str: 45,
      mag: 23,
      dex: 43,
      spd: 23,
      def: 49,
      res: 24,
      lck: 31,
      bld: 18,
    },
  },
  {
    name: 'Fell Child (Rafal)',
    skill: {
      name: 'Spur Emblems',
      description:
        "At start of player phase, fills adjacent allies' engage meters by 1.",
    },
    weapons: [
      { name: 'Axe', rank: 'A' },
      { name: 'Dragon Stone', rank: 'S' },
    ],
    type: 'Dragon',
    unique: 'Rafal',
    weakness: 'Fell Dragon',
    growths: {
      hp: 10,
      str: 10,
      mag: 10,
      dex: 10,
      spd: 15,
      def: 10,
      res: 10,
      lck: 0,
      bld: 5,
    },
    maxStats: {
      hp: 73,
      str: 45,
      mag: 23,
      dex: 43,
      spd: 23,
      def: 49,
      res: 24,
      lck: 31,
      bld: 18,
    },
  },
];

export default classData;
