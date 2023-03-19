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
    spoiler: true,
  },

  {
    name: 'Noble(Alfred)',
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
  },
  {
    name: 'Noble(Céline)',
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
  },
  {
    name: 'Sword Armor',
    skill: null,
    weapons: [{ name: 'Sword', rank: 'B' }],
    type: 'Armor',
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
  },
  {
    name: 'Lance Armor',
    skill: null,
    weapons: [{ name: 'Lance', rank: 'B' }],
    type: 'Armor',
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
  },
  {
    name: 'Axe Armor',
    skill: null,
    weapons: [{ name: 'Axe', rank: 'B' }],
    type: 'Armor',
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
  },
  {
    name: 'General',
    skill: {
      name: 'Swap',
      description: 'Use to switch places with an adjacent ally.',
    },
    weapons: [{ name: 'Sword, Lance, or Axe', rank: 'A^' }],
    type: 'Armor',
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
    weakness: ['Mounted', 'Armored'],
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
  },
];

export default classData;
