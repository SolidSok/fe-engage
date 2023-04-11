// creating data here instead of pulling from a database for more efficiency
const emblemData = [
  {
    name: 'Marth',
    image: '/assets/emblems/emblem_marth.png',
    title: 'Beginnings',
    stats: 'STR, DEX, SPD',
    maxStats: {
      hp: 0,
      str: 3,
      mag: 0,
      dex: 4,
      spd: 4,
      def: 0,
      res: 0,
      lck: 0,
      bld: 0,
    },
    skills: [
      {
        name: 'Perceptive',
        bondRank: 1,
        description:
          'If unit initiates combat, grants Avo+15. Avo increases with high speed(+1 Avo for every 4 Spd)',
        sync: true,
        sp: 250,
      },
      {
        name: 'Avoid+ 10',
        bondRank: 1,
        description: 'Grants Avo+10.',
        sp: 500,
      },
      {
        name: 'Divine Speed',
        bondRank: 1,
        description:
          'Unit performs an extra attack at 50% damage in combat. [Covert] If extra attack hits, poisons foe. [Dragon] Unit recovers HP equal to damage dealt by extra attack.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'LodeStar Rush',
        bondRank: 1,
        description:
          '	Use to launch 7 consecutive sword attacks at 30% damage. Adjacent foe only. [Dragon] +2 attacks.[Backup] +1 attack. [Mystical] Damage based on Mag.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Rapier',
        bondRank: 1,
        description:
          'Sword wielded by Emblem Marth. Effective: Cavalry, Armored.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Sword Agility 1',
        bondRank: 2,
        description: 'Grants Avo+10 at a cost of Crit-10 when using a sword.',
        sp: 500,
      },
      {
        name: 'Break Defenses',
        bondRank: 3,
        description:
          "If Unit's attack breaks foe, unit makes an extra attack at 50% damage.",
        sync: true,

        sp: 2000,
      },
      {
        name: 'Avoid+ 15',
        bondRank: 4,
        description: 'Grants Avo+15.',

        sp: 1500,
      },
      {
        name: 'Sword Agility 2',
        bondRank: 6,
        description: 'Grants Avo+15 at a cost of Crit-10 when using a sword.',

        sp: 1000,
      },
      {
        name: 'Unyielding',
        bondRank: 7,
        description:
          "At start of player phase, if HP is 20% or less, restores 20% of unit's max HP.",
        sync: true,

        sp: 100,
      },
      {
        name: 'Sword Agility 3',
        bondRank: 8,
        description: 'Grants Avo+20 at a cost of Crit-10 when using a sword.',

        sp: 2000,
      },
      {
        name: 'Sword Prof.',
        bondRank: 8,
        description:
          'proficiency with swords. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Avoid+ 20',
        bondRank: 9,
        description: 'Grants Avo+20.',

        sp: 2500,
      },
      {
        name: 'Mercurius',
        bondRank: 10,
        description:
          "Sacred sword wielded by Emblem Marth. Double's user's earned experience.",
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Unyielding+',
        bondRank: 12,
        description:
          "At start of player phase, if HP is 30% or less, restores 30% of unit's max HP.",
        sync: true,

        sp: 200,
      },
      {
        name: 'Sword Agility 4',
        bondRank: 13,
        description: 'Grants Avo+25 at a cost of Crit-10 when using a sword.',

        sp: 2000,
      },
      {
        name: 'Avoid+ 25',
        bondRank: 14,
        description: 'Grants Avo+25.',

        sp: 3500,
      },
      {
        name: 'Falchion',
        bondRank: 15,
        description: 'Sacred sword wielded by Emblem Marth. Effective: Dragon',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Perceptive+',
        bondRank: 16,
        description:
          'If unit initiates combat, grants Avo+30. Avo increases with high speed(+1 Avo for every 4 Spd)',
        sync: true,
        inherit: true,
        sp: 500,
      },
      {
        name: 'Sword Agility 5',
        bondRank: 17,
        description: 'Grants Avo+30 at a cost of Crit-10 when using a sword.',

        sp: 4000,
      },
      {
        name: 'Unyielding++',
        bondRank: 18,
        description:
          "At start of player phase, if HP is 40% or less, restores 40% of unit's max HP.",
        sync: true,

        sp: 300,
      },
      {
        name: 'Avoid+ 30',
        bondRank: 19,
        description: 'Grants Avo+30.',

        sp: 4500,
      },
    ],
  },
  {
    name: 'Celica',
    image: '/assets/emblems/emblem_celica.png',
    title: 'Echoes',
    stats: 'STR, MAG, RES',
    maxStats: {
      hp: 0,
      str: 3,
      mag: 5,
      dex: 0,
      spd: 0,
      def: 0,
      res: 4,
      lck: 0,
      bld: 0,
    },
    skills: [
      {
        name: 'Magic +2',
        bondRank: 1,
        description: 'Grants Mag+2.',

        sp: 1000,
      },
      {
        name: 'Magic +3',
        bondRank: 2,
        description: 'Grants Mag+3.',

        sp: 2000,
      },
      {
        name: 'Magic +4',
        bondRank: 13,
        description: 'Grants Mag+4.',

        sp: 4000,
      },
      {
        name: 'Magic +5',
        bondRank: 19,
        description: 'Grants Mag+5.',

        sp: 5000,
      },

      {
        name: 'Holy Stance',
        bondRank: 1,
        description:
          'If a corrupted attacks unit, deals 10% of damage taken back to foe.',

        sync: true,
        sp: 100,
      },
      {
        name: 'Holy Stance+',
        bondRank: 12,
        description:
          'If a corrupted attacks unit, deals 30% of damage taken back to foe.',

        sync: true,
        sp: 500,
      },
      {
        name: 'Holy Stance++',
        bondRank: 18,
        description:
          'If a corrupted attacks unit, deals 50% of damage taken back to foe.',

        sync: true,
        sp: 1000,
      },
      {
        name: 'Echo',
        bondRank: 1,
        description:
          'Use to attack with magic at 50% damage. Use a second time to launch another 50% attack. [Dragon] Range +1. [Mystical] +10% damage.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Warp Ragnarok',
        bondRank: 1,
        description:
          'Use to warp up to 10 spaces and make a powerful magic attack. [Dragon] Attack range +1. [Cavalry] Warp distance +2. [Flying] Warp distance +5. [Mystical] +20% damage.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Seraphim',
        bondRank: 1,
        description:
          'Holy tome wielded by Emblem Celica. Effective: Corrupted.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Resonance',
        bondRank: '3',
        description:
          'When equipped with a tome, if unit’s HP is 2 or more, unit loses 1 HP at start of combat and deals +2 damage during combat.',

        sync: true,
        sp: 2000,
      },
      {
        name: 'Tome Precision 1',
        bondRank: 4,
        description: 'Grants Hit/Avo+3 when using a tome.',

        sp: 100,
      },
      {
        name: 'Tome Precision 2',
        bondRank: [4, 7, 9, 14, 17],
        description: 'Grants Hit/Avo+5 when using a tome.',

        sp: 300,
      },
      {
        name: 'Tome Precision 3',
        bondRank: 9,
        description: 'Grants Hit/Avo+7 when using a tome.',

        sp: 700,
      },
      {
        name: 'Tome Precision 4',
        bondRank: 14,
        description: 'Grants Hit/Avo+10 when using a tome.',

        sp: 1000,
      },
      {
        name: 'Tome Precision 5',
        bondRank: [4, 7, 9, 14, 17],
        description: 'Grants Hit/Avo+15 (3, 5, 7, 10, 15) when using a tome.',

        sp: [100, 300, 700, 1000, 2000],
      },
      {
        name: 'Tome Prof.',
        bondRank: 6,
        description:
          '	Proficiency with tomes. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Favorite Food',
        bondRank: 8,
        description:
          'When unit eats a packed lunch, its engage meter is maxed out.',

        sync: true,
        sp: '200',
      },
      {
        name: 'Sword Prof.',
        bondRank: 8,
        description:
          'proficiency with swords. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Recover',
        bondRank: 10,
        description:
          'A staff imbued with healing magic. Recovers vast amounts of an ally’s HP.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Ragnarok',
        bondRank: 15,
        description: '	Mighty fire tome wielded by Emblem Celica.',
        engage: 'weapon',
        sp: null,
      },
    ],
  },
  {
    name: 'Sigurd',
    image: '/assets/emblems/emblem_sigurd.png',

    title: 'the Holy War',
    stats: 'DEX, DEF, BLD, MOV',
    maxStats: {
      hp: 0,
      str: 4,
      mag: 0,
      dex: 0,
      spd: 0,
      def: 4,
      res: 0,
      lck: 0,
      bld: 3,
      mov: 1,
    },
    skills: [
      {
        name: 'Canter',
        bondRank: 1,
        description: 'Unit can move 2 spaces after acting.',

        sync: true,
        sp: 1000,
      },
      {
        name: 'Canter+',
        bondRank: 13,
        description: 'Unit can move 3 spaces after acting.',

        sync: true,
        sp: 2000,
      },
      {
        name: 'Hit +10',
        bondRank: 1,
        description: 'Grants Hit+10.',

        sp: 500,
      },
      {
        name: 'Hit +15',
        bondRank: 4,
        description: 'Grants Hit+15.',

        sp: 1000,
      },
      {
        name: 'Hit +20',
        bondRank: 12,
        description: 'Grants Hit+20.',

        sp: 1500,
      },
      {
        name: 'Hit +25',
        bondRank: 16,
        description: 'Grants Hit+25.',

        sp: 2000,
      },
      {
        name: 'Hit +30',
        bondRank: 19,
        description: 'Grants Hit+30.',

        sp: 2500,
      },
      {
        name: 'Gallop',
        bondRank: 1,
        description:
          'Grants Mov+5. [Dragon] Grants another Mov+1. [Cavalry] Grants another Mov+2. [Covert] Unit does not pay extra movement cost on any terrain.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Override',
        bondRank: 1,
        description:
          'Use to attack and move through a line of adjacent foes. Sword/lance only. [Dragon] +20% damage. [Armored] 10% chance of breaking target. [Mystical] Deals extra damage=25% of Mag. [Qi Adept] 20% chance of breaking target.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Ridersbane',
        bondRank: 1,
        description: 'Lance wielded by Emblem Sigurd. Effective: Cavalry.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Lance Power 1',
        bondRank: 1,
        description: 'Grants Atk+2 at a cost of Avo-10 when using a lance.',

        sp: 1000,
      },
      {
        name: 'Lance Power 2',
        bondRank: 6,
        description: 'Grants Atk+4 at a cost of Avo-10 when using a lance.',

        sp: 2000,
      },
      {
        name: 'Lance Power 3',
        bondRank: 8,
        description: 'Grants Atk+6 at a cost of Avo-10 when using a lance.',

        sp: 3000,
      },
      {
        name: 'Lance Power 4',
        bondRank: 14,
        description: 'Grants Atk+8 at a cost of Avo-10 when using a lance.',

        sp: 4000,
      },
      {
        name: 'Lance Power 5',
        bondRank: 18,
        description: 'Grants Atk+10 at a cost of Avo-10 when using a lance.',

        sp: 5000,
      },
      {
        name: 'Momentum',
        bondRank: 3,
        description:
          'Grants Atk+1 to first attack during combat for each space unit moved before attacking. (Max +10)',

        sync: true,
        sp: 1000,
      },
      {
        name: 'Momentum+',
        bondRank: 17,
        description:
          'Grants Atk+1 to first attack during combat for each space unit moved before attacking.',

        sync: true,
        sp: 2000,
      },
      {
        name: 'Lance Prof.',
        bondRank: 6,
        description:
          'Proficiency with lances. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Headlong Rush',
        bondRank: 7,
        description: 'Grants immunity to freeze.',

        sync: true,
        sp: 200,
      },
      {
        name: 'Brave Lance',
        bondRank: 10,
        description:
          'Lance wielded by Emblem Sigurd. If user initiates combat, attacks twice.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Tyrfing',
        bondRank: 15,
        description: 'Sword wielded by Emblem Sigurd. Grants Res+5.',
        engage: 'weapon',
        sp: null,
      },
    ],
  },
  {
    name: 'Leif',
    image: '/assets/emblems/emblem_leif.png',
    title: 'Genealogy',
    stats: 'HP, DEF, BLD',
    maxStats: {
      hp: 7,
      str: 0,
      mag: 0,
      dex: 0,
      spd: 0,
      def: 3,
      res: 0,
      lck: 0,
      bld: 5,
      mov: 0,
    },
    skills: [
      {
        name: 'Build +3',
        bondRank: 1,
        description: 'Grants Bld+3.',

        sp: 500,
      },
      {
        name: 'Arms Shield',
        bondRank: 1,
        description:
          'When unit has weapon advantage, unit takes 3 less damage.',

        sp: 100,
      },
      {
        name: 'Adaptable',
        bondRank: 1,
        description:
          'If foe initiates combat, unit counters with the best weapon available (in terms of range, weapon advantage, effective bonus, etc.). [Dragon] Hit+30 during combat. [Backup] Crit+10 during combat. [Covert] Avo+20 during combat. [Armored] Def+5 during combat. [Flying] Res+5 during combat.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Quadruple Hit',
        bondRank: 1,
        description:
          'Use to attack once each with sword, lance, axe, and bow. [Dragon] +20% damage. [Covert] Foes may drop 1,000G. Trigger %=Lck. [Qi Adept] Breaks foe.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Killer Axe',
        bondRank: 1,
        description:
          'Axe wielded by Emblem Leif. Easily inflicts fatal wounds.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Axe Prof.',
        bondRank: 2,
        description:
          'Proficiency with axes. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Vantage',
        bondRank: 3,
        description:
          'If unit’s HP is 25% or less and foe initiates combat, unit can counter before foe’s first attack.',

        sync: true,
        sp: 500,
      },
      {
        name: 'Bow Prof.',
        bondRank: 3,
        description:
          'Proficiency with bows. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Knife Precision 1',
        bondRank: 4,
        description: 'Grants Hit/Avo+3 when using a knife.',

        sp: 100,
      },
      {
        name: 'Knife Prof.',
        bondRank: 4,
        description:
          'Proficiency with knives. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Build +4',
        bondRank: 6,
        description: 'Grants Bld+4.',
        sp: 1000,
      },
      {
        name: 'Staff Prof.',
        bondRank: 6,
        description:
          'Proficiency with staves. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Arms Shield+',
        bondRank: 7,
        description:
          'When unit has weapon advantage, unit takes 5 less damage.',

        sync: true,
        sp: 400,
      },
      {
        name: 'Lance Prof.',
        bondRank: 7,
        description:
          'Proficiency with lances. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Sword Prof.',
        bondRank: 8,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        proficiency: true,
        sp: null,
      },
      {
        name: 'Knife Precision 2',
        bondRank: 9,
        description: 'Grants Hit/Avo+5 when using a knife.',

        sp: 300,
      },
      {
        name: 'Master Lance',
        bondRank: 10,
        description:
          'Lance wielded by Emblem Leif. If user initiates combat, attacks twice. Can strike close or at range.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Vantage+',
        bondRank: 12,
        description:
          'If unit’s HP is 50% or less and foe initiates combat, unit can counter before foe’s first attack.',

        sync: true,
        sp: 1000,
      },
      {
        name: 'Knife Precision 3',
        bondRank: 13,
        description: 'Grants Hit/Avo+7 when using a knife.',

        sp: 700,
      },
      {
        name: 'Build +5',
        bondRank: 14,
        description: 'Grants Bld+5.',

        sp: 2000,
      },
      {
        name: 'Light Brand',
        bondRank: 15,
        description:
          'Magical sword wielded by Emblem Leif. Grants Lck+10. Can strike close or at range.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Arms Shield++',
        bondRank: 16,
        description:
          'When unit has weapon advantage, unit takes 7 less damage.',

        sync: true,
        sp: 600,
      },
      {
        name: 'Knife Precision 4',
        bondRank: 17,
        description: 'Grants Hit/Avo+10 when using a knife.',

        sp: 1000,
      },
      {
        name: 'Vantage++',
        bondRank: 18,
        description:
          "If unit's HP is 75% or less and foe initiates combat, unit can counter before foe’s first attack.",

        sync: true,
        sp: 2000,
      },
      {
        name: 'Knife Precision 5',
        bondRank: 19,
        description: 'Grants Hit/Avo+15 when using a knife.',

        sp: 2000,
      },
    ],
  },
  {
    name: 'Roy',
    image: '/assets/emblems/emblem_roy.png',
    title: 'Binding',
    stats: 'HP, STR, RES',
    maxStats: {
      hp: 10,
      str: 6,
      mag: 0,
      dex: 0,
      spd: 0,
      def: 0,
      res: 3,
      lck: 0,
      bld: 0,
      mov: 0,
    },
    skills: [
      {
        name: 'Strength +1',
        bondRank: 1,
        description: 'Grants Str+1.',

        sp: 500,
      },
      {
        name: 'Hold Out',
        bondRank: 1,
        description:
          'If unit had 30% HP or more at start of combat, unit always survives combat with at least 1 HP.',

        sp: 2000,
      },
      {
        name: 'Rise Above',
        bondRank: 1,
        description:
          'Grants Lvl+5. [Dragon] Additional Lvl+1. [Cavalry] Mov+1. [Armored] Max HP+5.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Blazing Lion',
        bondRank: 1,
        description:
          'Use to attack adjacent foe and an area 3 spaces wide. Target area and the 2 rows beyond it are set on fire. Sword only. [Dragon] Expands attack area. [Mystical] Expands flame area.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Lancereaver',
        bondRank: 1,
        description:
          'Unusual sword wielded by Emblem Roy. Grants advantage vs. lances but disadvantage vs. axes.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Strength +2',
        bondRank: 2,
        description: 'Grants Str+2.',

        sp: 1000,
      },
      {
        name: 'Advance',
        bondRank: 3,
        description:
          'Use to move 1 space toward a foe that is 2 spaces away and attack.',
        sync: true,
        sp: 500,
      },
      {
        name: 'Sword Power 1',
        bondRank: 4,
        description: 'Grants Atk+2 at a cost of Avo-10 when using a sword.',

        sp: 1000,
      },
      {
        name: 'Sword Prof.',
        bondRank: 6,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Sword Power 2',
        bondRank: 7,
        description: 'Grants Atk+4 at a cost of Avo-10 when using a sword.',

        sp: 2000,
      },
      {
        name: 'Hold Out+',
        bondRank: 8,
        description:
          'If unit had 20% HP or more at start of combat, unit always survives combat with at least 1 HP.',

        sp: 3000,
      },
      {
        name: 'Strength +3',
        bondRank: 9,
        description: 'Grants Str+3.',

        sp: 3000,
      },
      {
        name: 'Sword Power 3',
        bondRank: 9,
        description: 'Grants Atk+6 at a cost of Avo-10 when using a sword.',

        sp: 3000,
      },
      {
        name: 'Wyrmslayer',
        bondRank: 10,
        description: 'Sword wielded by Emblem Roy. Effective: Dragon.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Sword Power 4',
        bondRank: 12,
        description: 'Grants Atk+8 at a cost of Avo-10 when using a sword.',

        sp: 4000,
      },
      {
        name: 'Hold Out++',
        bondRank: 13,
        description:
          'If unit had 10% HP or more at start of combat, unit always survives combat with at least 1 HP.',
        sp: 4000,
      },
      {
        name: 'Strength +4',
        bondRank: 14,
        description: 'Grants Str+4.',

        sp: 4000,
      },
      {
        name: 'Binding Blade',
        bondRank: 15,
        description:
          'Famous sword wielded by Emblem Roy. Grants Def/Res+5. Can strike close or at range.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Sword Power 5',
        bondRank: 16,
        description: 'Grants Atk+10 at a cost of Avo-10 when using a sword.',

        sp: 5000,
      },
      {
        name: 'Strength +5',
        bondRank: 17,
        description: 'Grants Str+5.',

        sp: 5000,
      },
      {
        name: 'Hold Out+++',
        bondRank: 18,
        description:
          'If unit had 2 HP or more at start of combat, unit always survives combat with at least 1 HP.',

        sp: 5000,
      },
      {
        name: 'Strength +6',
        bondRank: 19,
        description: 'Grants Str+6.',

        sp: 6000,
      },
    ],
  },
  {
    name: 'Lyn',
    image: '/assets/emblems/emblem_lyn.png',
    title: 'Blazing',
    stats: 'DEX, SPD, RES',
    maxStats: {
      hp: 0,
      str: 0,
      mag: 0,
      dex: 4,
      spd: 5,
      def: 0,
      res: 3,
      lck: 0,
      bld: 0,
      mov: 0,
    },
    skills: [
      { name: 'Speed +1', bondRank: 1, description: 'Grants Spd+1.', sp: 100 },
      {
        name: 'Alacrity',
        bondRank: 1,
        description:
          'If unit initiates combat with a Spd advantage of 9 or more, unit’s follow-up (if possible) occurs before foe can counterattack.',
        sync: true,
        sp: 1000,
      },
      {
        name: 'Call Doubles',
        bondRank: 1,
        description:
          'Creates four illusory doubles that can make chain attacks with unit. [Dragon] +1 double created. [Flying] Doubles have +10 Avo',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Astra Storm',
        bondRank: 1,
        description:
          'Use to launch 5 bow attacks at 30% damage, up to range 10. [Dragon] Range +5. [Covert] Range +10. [Qi Adept] Breaks the target.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Killer Bow',
        bondRank: 1,
        description:
          'Bow wielded by Emblem Lyn. Easily inflicts fatal wounds. Effective: Flying.',
        engage: 'weapon',
        sp: null,
      },
      { name: 'Speed +2', bondRank: 2, description: 'Grants Spd+2.', sp: 300 },
      {
        name: 'Speedtaker',
        bondRank: 3,
        description:
          'Grants a stacking Spd+2 each time unit initiates combat and defeats a foe. Bonus lasts for the rest of the battle. (Max +10)',
        sp: 2000,
      },
      {
        name: 'Bow Focus 1',
        bondRank: 4,
        description: 'Grants Hit+10 at a cost of Ddg-10 when using a bow.',
        sp: 100,
      },
      {
        name: 'Bow Prof.',
        bondRank: 6,
        description:
          'Proficiency with bows. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Bow Focus 2',
        bondRank: 7,
        description: 'Grants Hit+15 at a cost of Ddg-10 when using a bow.',
        sp: 300,
      },
      {
        name: 'Sword Prof.',
        bondRank: 8,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        sp: null,
      },
      { name: 'Speed +3', bondRank: 9, description: 'Grants Spd+3.', sp: 500 },
      {
        name: 'Mani Katti',
        bondRank: 10,
        description:
          'Divine sword wielded by Emblem Lyn. Effective: Cavalry, Armored.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Bow Focus 3',
        bondRank: 12,
        description: 'Grants Hit+20 at a cost of Ddg-10 when using a bow.',
        sp: 500,
      },
      {
        name: 'Alacrity+',
        bondRank: 13,
        description:
          'If unit initiates combat with a Spd advantage of 7 or more, unit’s follow-up (if possible) occurs before foe can counterattack.',
        sp: 2000,
      },
      {
        name: 'Bow Focus 4',
        bondRank: 14,
        description: 'Grants Hit+25 at a cost of Ddg-10 when using a bow.',
        sp: 700,
      },
      {
        name: 'Mulagir',
        bondRank: 15,
        description:
          'Mighty bow wielded by Emblem Lyn. Grants Spd+5. Effective: Flying, Dragon.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Speed +4',
        bondRank: 16,
        description: 'Grants Spd+4.',
        sp: 1000,
      },
      {
        name: 'Bow Focus 5',
        bondRank: 17,
        description: 'Grants Hit+30 at a cost of Ddg-10 when using a bow.',
        sp: 1000,
      },
      {
        name: 'Alacrity++',
        bondRank: 18,
        description:
          'If unit initiates combat with a Spd advantage of 5 or more, unit’s follow-up (if possible) occurs before foe can counterattack.',
        sp: 3000,
      },
      {
        name: 'Speed +5',
        bondRank: 19,
        description: 'Grants Spd+5.',
        sp: 2000,
      },
    ],
  },
  {
    name: 'Eirika',
    image: '/assets/emblems/emblem_eirika.png',
    title: 'the Sacred',
    stats: 'MAG, DEX, LCK',
    maxStats: {
      hp: 0,
      str: 0,
      mag: 3,
      dex: 4,
      spd: 0,
      def: 0,
      res: 0,
      lck: 10,
      bld: 0,
      mov: 0,
    },
    skills: [
      {
        name: 'Lunar Brace',
        bondRank: 1,
        description:
          'If unit initiates combat with a physical attack, deals extra damage=20% of foe’s Def.',
        sync: true,
        sp: 3000,
      },
      {
        name: 'Solar Brace',
        bondRank: 1,
        description:
          'If unit initiates combat, unit recovers HP=30% of damage dealt.',
        sync: true,
        sp: null,
      },
      {
        name: 'Eclipse Brace',
        bondRank: 1,
        description:
          'If unit initiates combat, unit deals extra damage=20% of foe’s Def with physical attacks and recovers HP=30% of damage dealt.',
        sync: true,
        sp: null,
      },
      {
        name: 'Dodge +10',
        bondRank: 1,
        description: 'Grants Ddg+10.',
        sp: 500,
      },
      {
        name: 'Night and Day',
        bondRank: 1,
        description:
          'Use to switch Emblems and swap between Lunar Brace/Gentility and Solar Brace/Bravery for all allies.',
        sync: true,
        sp: null,
      },
      {
        name: 'Sacred Twins',
        bondRank: 1,
        description:
          'While engaged with Eirika, changes Lunar Brace to Eclipse Brace and Gentility to Blue Skies for all allies.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Twin Strike',
        bondRank: 1,
        description:
          'Use to make a sword attack followed by a lance attack from Ephraim on adjacent foe. Effective: Corrupted. [Dragon] +20% damage. [Cavalry] Ephraim deals +50% damage.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Rapier',
        bondRank: 1,
        description:
          'Sword wielded by Emblem Eirika. Effective: Cavalry, Armored.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Lance Agility 1',
        bondRank: 2,
        description: 'Grants Avo+10 at a cost of Crit-10 when using a lance.',
        sp: 500,
      },
      {
        name: 'Gentility',
        bondRank: 3,
        description: 'Unit takes 3 less damage.',
        sync: true,
        sp: 2000,
      },
      {
        name: 'Bravery',
        bondRank: 3,
        description: 'Unit deals +3 damage.',
        sync: true,
        sp: null,
      },
      {
        name: 'Blue Skies',
        bondRank: 3,
        description: 'Unit takes 3 less damage and deals +3 damage.',
        sync: true,
        sp: null,
      },
      {
        name: 'Dodge +15',
        bondRank: 4,
        description: 'Grants Ddg+15.',
        sp: 1000,
      },
      {
        name: 'Lance Prof.',
        bondRank: 6,
        description:
          'Proficiency with lances. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Lance Agility 2',
        bondRank: 7,
        description: 'Grants Avo+15 at a cost of Crit-10 when using a lance.',
        sp: 1000,
      },
      {
        name: 'Dodge +20',
        bondRank: 8,
        description: 'Grants Ddg+20.',
        sp: 1500,
      },
      {
        name: 'Sword Prof.',
        bondRank: 9,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Wind Sword',
        bondRank: 10,
        description:
          'Magical sword wielded by Emblem Eirika. Can strike close or at range. Effective: Flying.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Lance Agility 3',
        bondRank: 12,
        description: 'Grants Avo+20 at a cost of Crit-10 when using a lance.',
        sp: 2000,
      },
      {
        name: 'Lunar Brace+',
        bondRank: 13,
        description:
          'If unit initiates combat with a physical attack, deals extra damage=30% of foe’s Def.',
        sp: 5000,
      },
      {
        name: 'Solar Brace+',
        bondRank: 13,
        description:
          'If unit initiates combat, unit recovers HP=50% of damage dealt.',
        sync: true,
        sp: null,
      },
      {
        name: 'Eclipse Brace+',
        bondRank: 14,
        description:
          'If unit initiates combat, unit deals extra damage=30% of foe’s Def with physical attacks and recovers HP=50% of damage dealt.',
        sync: true,
        sp: null,
      },
      {
        name: 'Dodge +25',
        bondRank: 15,
        description: 'Grants Ddg+25.',
        sp: 2000,
      },
      {
        name: 'Sieglinde',
        bondRank: 15,
        description:
          'Paired sword wielded by Emblem Eirika. Effective: Corrupted',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Lance Agility 4',
        bondRank: 16,
        description: 'Grants Avo+25 at a cost of Crit-10 when using a lance.',
        sp: 3000,
      },
      {
        name: 'Lance Agility 5',
        bondRank: 17,
        description: 'Grants Avo+30 at a cost of Crit-10 when using a lance.',
        sp: 4000,
      },
      {
        name: 'Gentility+',
        bondRank: 18,
        description: 'Unit takes 5 less damage.',
        sync: true,
        sp: 3000,
      },
      {
        name: 'Bravery+',
        bondRank: 18,
        description: 'Unit deals +5 damage.',
        sync: true,
        sp: null,
      },
      {
        name: 'Blue Skies+',
        bondRank: 18,
        description: 'Unit takes 5 less damage and deals +5 damage.',
        sync: true,
        sp: null,
      },
      {
        name: 'Dodge +30',
        bondRank: 19,
        description: 'Grants Ddg+30.',
        sp: 2500,
      },
    ],
  },
  {
    name: 'Ike',
    image: '/assets/emblems/emblem_ike.png',
    title: 'Radiance',
    stats: 'HP, STR, DEF',
    maxStats: {
      hp: 7,
      str: 4,
      mag: 0,
      dex: 0,
      spd: 0,
      def: 5,
      res: 0,
      lck: 0,
      bld: 0,
      mov: 0,
    },
    skills: [
      {
        name: 'Defense +1',
        bondRank: 1,
        description: 'Grants Def+1.',
        sp: 100,
      },
      {
        name: 'Demolish',
        bondRank: 1,
        description:
          'Break destructible terrain in a single blow when using Destroy.',
        sync: true,
        sp: 200,
      },
      {
        name: 'Resolve',
        bondRank: 1,
        description:
          'If unit’s HP is 75% or less after combat, grants Def/Res+5 as long as unit’s HP stays below 75%.',
        sync: true,
        sp: 1000,
      },
      {
        name: 'Laguz Friend',
        bondRank: 1,
        description:
          'Unit takes 50% less damage, but sets unit’s Avo to 0. [Dragon] Extra -10% to damage.',
        engage: 'skill',
        sync: true,
        sp: null,
      },
      {
        name: 'Great Aether',
        bondRank: 1,
        description:
          'Use to grant Def/Res+5, but unit can’t counter for 1 turn. Next turn, attack a 2-space area, heal HP=30% of damage dealt. Sword/axe only. [Dragon] +1 damage per hit taken. [Armored] Grants an extra Def+5. [Flying] Grants an extra Res+5.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Hammer',
        bondRank: 1,
        description:
          'Hammer of Emblem Ike. Smashes foes. Cannot follow up, or strike first if initiating combat. Eff: Armored.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Defense +2	',
        bondRank: 2,
        description: 'Grants Def+2.',
        sp: 300,
      },
      {
        name: 'Reposition',
        bondRank: 3,
        description:
          'Use to move an adjacent ally to the opposite side of unit.',
        sync: true,
        sp: 200,
      },
      {
        name: 'Axe Power 1',
        bondRank: 4,
        description: 'Grants Atk+2 at a cost of Avo-10 when using an axe.',
        sp: 1000,
      },
      {
        name: 'Axe Prof.',
        bondRank: 6,
        description:
          'Proficiency with axes. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Axe Power 2',
        bondRank: 7,
        description: 'Grants Atk+4 at a cost of Avo-10 when using an axe.',
        sp: 2000,
      },
      {
        name: 'Defense +3',
        bondRank: 8,
        description: 'Grants Def+3.',
        sp: 500,
      },
      {
        name: 'Sword Prof.',
        bondRank: 9,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Urvan',
        bondRank: 10,
        description: 'Heirloom axe wielded by Emblem Ike. Grants Res+3.',
        sp: null,
      },
      {
        name: 'Axe Power 3',
        bondRank: 12,
        description: 'Grants Atk+6 at a cost of Avo-10 when using an axe.',
        engage: 'weapon',
        sp: 3000,
      },
      {
        name: 'Wrath',
        bondRank: 13,
        description:
          'At start of combat, for each HP the unit has lost, grants Crit+1 during combat. (Max +30)',
        sync: true,
        sp: 2000,
      },
      {
        name: 'Axe Power 4',
        bondRank: 14,
        description: 'Grants Atk+8 at a cost of Avo-10 when using an axe.',
        sync: true,
        sp: 4000,
      },
      {
        name: 'Ragnell',
        bondRank: 15,
        description:
          'Sacred sword wielded by Emblem Ike. Grants Def+5. Can strike close or at range.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Defense +4',
        bondRank: 16,
        description: 'Grants Def+4.',
        sp: 1000,
      },
      {
        name: 'Axe Power 5',
        bondRank: 17,
        description: 'Grants Atk+10 at a cost of Avo-10 when using an axe.',
        sp: 5000,
      },
      {
        name: 'Resolve+',
        bondRank: 18,
        description:
          'If unit’s HP is 75% or less after combat, grants Def/Res+7 as long as unit’s HP stays below 75%.',
        sync: true,
        sp: 2000,
      },
      {
        name: 'Defense +5',
        bondRank: 19,
        description: 'Grants Def+5.',
        sp: 2000,
      },
    ],
  },
  {
    name: 'Micaiah',
    image: '/assets/emblems/emblem_micaiah.png',
    title: 'Dawn',
    stats: 'MAG, RES, LCK',
    maxStats: {
      hp: 0,
      str: 0,
      mag: 4,
      dex: 0,
      spd: 0,
      def: 0,
      res: 5,
      lck: 6,
      bld: 0,
      mov: 0,
    },
    skills: [
      {
        name: 'Resistance +2',
        bondRank: 1,
        description: 'Grants Res+2.',
        sp: 300,
      },
      {
        name: 'Cleric',
        bondRank: 1,
        description: 'Unit can equip staves up to level C.',
        sync: true,
        sp: null,
      },
      {
        name: 'Augment',
        bondRank: 1,
        description:
          'Grants staff range +5 and area of effect +1. [Dragon] Additional staff range +1. [Qi Adept] +20% to HP healed by staves.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Great Sacrifice',
        bondRank: 1,
        description:
          'Use to restore full HP to all allies, even those not under the player’s control. After use, unit’s HP=1. [Dragon] Unit’s HP=30% current. [Armored] Grants Def+1 to all healed during their next combat. [Qi Adept] Also cures status.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Shine',
        bondRank: 1,
        description:
          'Light tome wielded by Emblem Micaiah. Illuminates a 5-space radius (shrinks one space per turn).',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Staff Mastery 1',
        bondRank: 2,
        description:
          'Grants Hit+10 when using a staff. Staves also heal an additional 3 HP.',
        sp: 100,
      },
      {
        name: 'Healing Light',
        bondRank: 3,
        description:
          'When unit heals an ally with a staff, unit also recovers HP=50% of the amount healed.',
        sp: 200,
        sync: true,
      },
      {
        name: 'Staff Prof.',
        bondRank: 3,
        description:
          'Proficiency with staves. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Resistance +3',
        bondRank: 4,
        description: 'Grants Res+3.',
        sp: 500,
      },
      {
        name: 'Knife Prof.',
        bondRank: 6,
        description:
          'Proficiency with knives. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Silence Ward',
        bondRank: 7,
        description: 'Grants immunity to silence.',
        sync: true,

        sp: 200,
      },
      {
        name: 'Staff Mastery 2',
        bondRank: 8,
        description:
          'Grants Hit+15 when using a staff. Staves also heal an additional 5 HP.',
        sp: 300,
      },
      {
        name: 'Tome Prof.',
        bondRank: 9,
        description:
          'Proficiency with tomes. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Nosferatu',
        bondRank: 10,
        description:
          'Light tome wielded by Emblem Micaiah. User recovers HP equal to 50% of damage dealt.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Staff Mastery 3',
        bondRank: 12,
        description:
          'Grants Hit+20 when using a staff. Staves also heal an additional 7 HP.',
        sp: 500,
      },
      {
        name: 'Cleric+',
        bondRank: 13,
        description: 'Unit can equip staves up to level B.',
        sync: true,

        sp: null,
      },
      {
        name: 'Resistance +4',
        bondRank: 14,
        description: 'Grants Res+4.',
        sp: 1000,
      },
      {
        name: 'Thani',
        bondRank: 15,
        description:
          'Mighty light tome wielded by Emblem Micaiah. Effective: Cavalry, Armored.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Staff Mastery 4',
        bondRank: 16,
        description:
          'Grants Hit+25 when using a staff. Staves also heal an additional 10 HP.',
        sp: 700,
      },
      {
        name: 'Staff Mastery 5',
        bondRank: 17,
        description:
          'Grants Hit+30 when using a staff. Staves also heal an additional 15 HP.',
        sp: 1000,
      },
      {
        name: 'Cleric++',
        bondRank: 18,
        description: 'Unit can equip staves up to level A.',
        sync: true,

        sp: null,
      },
      {
        name: 'Resistance +5',
        bondRank: 19,
        description: 'Grants Res+5.',
        sp: 2000,
      },
    ],
  },
  {
    name: 'Lucina',
    image: '/assets/emblems/emblem_lucina.png',
    title: 'Awakening',
    stats: 'DEX, SPD, LCK',
    skills: [
      {
        name: 'Dexterity +1',
        bondRank: 1,
        description: 'Grants Dex+1.',
        sp: 100,
      },
      {
        name: 'Dual Strike',
        bondRank: 1,
        description:
          'Unit participates in chain attacks as if it were a backup unit.',
        sync: true,
        sp: null,
      },
      {
        name: 'Bonded Shield',
        bondRank: 1,
        description:
          'Use to prevent first attacks on adjacent allies until your next turn. Trigger %=80. [Dragon] +10% to trigger rate. [Cavalry] Trigger %=100 for cavalry allies. [Armored] Trigger %=100 for armored allies. [Flying] Trigger %=100 for flying allies. [Qi Adept] Trigger %=100.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'All For One',
        bondRank: 1,
        description:
          'Use to make a sword attack against an adjacent foe. All allies within 2 spaces chain attack. [Dragon] Ally chain attacks are guaranteed to hit. [Backup] Range +1.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Noble Rapier',
        bondRank: 1,
        description:
          'Sword wielded by Emblem Lucina. Effective: Cavalry, Armored.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Dexterity +2',
        bondRank: 2,
        description: 'Grants Dex+2.',
        sp: 300,
      },
      {
        name: 'Dual Assist',
        bondRank: 3,
        description:
          'If unit is able to chain attack, unit will do so when allies attack foes unit could reach by moving. Trigger %=35.',
        sync: true,
        sp: 1000,
      },
      {
        name: 'Bow Agility 1',
        bondRank: 4,
        description: 'Grants Avo+10 at a cost of Crit-10 when using a bow.',
        sp: 500,
      },
      {
        name: 'Sword Prof.',
        bondRank: 6,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Bow Agility 2',
        bondRank: 7,
        description: 'Grants Avo+15 at a cost of Crit-10 when using a bow.',
        sp: 1000,
      },
      {
        name: 'Bow Prof.',
        bondRank: 8,
        description:
          'Proficiency with bows. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Dexterity +3',
        bondRank: 9,
        description: 'Grants Dex+3.',
        sp: 500,
      },
      {
        name: 'Parthia',
        bondRank: 10,
        description:
          'Bow wielded by Emblem Lucina. Doubles user’s earned experience. Grants Res+5. Effective: Flying.',
        sp: null,
      },
      {
        name: 'Bow Agility 3',
        bondRank: 12,
        description: 'Grants Avo+20 at a cost of Crit-10 when using a bow.',
        sp: 2000,
      },
      {
        name: 'Dual Support',
        bondRank: 13,
        description:
          'Grants a bonus to Avo that increases with unit’s support level with adjacent allies. (Max +90) [+5 Avoid for each support level. None = 1, C = 2, B = 3, A = 4, S = 6.]',
        sync: true,
        sp: 2000,
      },
      {
        name: 'Bow Agility 4',
        bondRank: 14,
        description: 'Grants Avo+25 at a cost of Crit-10 when using a bow.',
        sp: 3000,
      },
      {
        name: 'Parallel Falchion',
        bondRank: 15,
        description:
          'Sacred sword wielded by Emblem Lucina. Effective: Dragon.',
        sp: null,
      },
      {
        name: 'Dexterity +4',
        bondRank: 16,
        description: 'Grants Dex+4.',
        sp: 1000,
      },
      {
        name: 'Bow Agility 5',
        bondRank: 17,
        description: 'Grants Avo+30 at a cost of Crit-10 when using a bow.',
        sp: 4000,
      },
      {
        name: 'Dual Assist+',
        bondRank: 18,
        description:
          'If unit is able to chain attack, unit will do so when allies attack foes unit could reach by moving. Trigger %=70.',
        sync: true,
        sp: 2000,
      },
      {
        name: 'Dexterity +5',
        bondRank: 19,
        description: 'Grants Dex+5.',
        sp: 2000,
      },
    ],
    maxStats: {
      hp: 0,
      str: 0,
      mag: 0,
      dex: 5,
      spd: 4,
      def: 0,
      res: 0,
      lck: 6,
      bld: 0,
      mov: 0,
    },
  },
  {
    name: 'Corrin',
    image: '/assets/emblems/emblem_corrin.png',
    title: 'Fates',
    stats: 'HP, MAG, RES',
    skills: [
      { name: 'HP +5', bondRank: 1, description: 'Grants max HP+5.', sp: 300 },
      {
        name: 'Dragon Vein',
        bondRank: 1,
        description:
          'Use to add a special effect to certain spaces. [Dragon] Choose any Vein effect. [Backup] Creates stone pillars that increase Def/Res. [Cavalry] Creates water that decreases Avo. [Covert] Creates fog that increases Avo. [Armored] Creates vines that grant immunity to break. [Flying] Creates healing glow that restores HP. [Mystical] Creates flames that inflict damage. [Qi Adept] Creates ice pillars that hinder movement.',
        sync: true,
        sp: null,
      },
      {
        name: 'Dreadful Aura',
        bondRank: 1,
        description:
          'If unit initiates combat, target foe and all foes within 1 space of it cannot move for 1 turn after combat. [Covert] Also Avo-20 on target.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Torrential Roar',
        bondRank: 1,
        description:
          'Use to attack 3 spaces in a line, turning those spaces into water terrain. [Dragon] Range +1.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Dual Katana',
        bondRank: 1,
        description:
          'Unusual sword wielded by Emblem Corrin. Grants advantage vs. lances but disadvantage vs. axes.',
        engage: 'weapon',
        sp: null,
      },
      { name: 'HP +7', bondRank: 2, description: 'Grants max HP+7.', sp: 500 },
      {
        name: 'Quality Time',
        bondRank: 3,
        description:
          'After unit acts or waits, restores 5 HP to adjacent allies and slightly increases support with them.',
        sync: true,
        sp: 250,
      },
      {
        name: 'Sword Focus 1',
        bondRank: 4,
        description: 'Grants Hit+10 at a cost of Ddg-10 when using a sword.',
        sp: 100,
      },
      {
        name: 'Sword Prof.',
        bondRank: 6,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Sword Focus 2',
        bondRank: 7,
        description: 'Grants Hit+15 at a cost of Ddg-10 when using a sword.',
        sp: 300,
      },
      {
        name: 'Draconic Hex',
        bondRank: 8,
        description:
          'If unit initiates combat, inflicts -4 to all of foe’s basic stats after combat. (Penalties shrink by 1 each turn.)',
        sync: true,
        sp: 2000,
      },
      {
        name: 'HP +10',
        bondRank: 9,
        description: 'Grants max HP+10.',
        sp: 1000,
      },
      {
        name: 'Wakizashi',
        bondRank: 10,
        description:
          'Throwing sword wielded by Emblem Corrin. Can only strike at range, not close up.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Sword Focus 3',
        bondRank: 12,
        description: 'Grants Hit+20 at a cost of Ddg-10 when using a sword.',
        sp: 500,
      },
      {
        name: 'Pair Up',
        bondRank: 13,
        description: 'Prevents damage from foes’ chain attacks against unit.',
        sync: true,
        sp: 2000,
      },
      {
        name: 'Sword Focus 4',
        bondRank: 14,
        description: 'Grants Hit+25 at a cost of Ddg-10 when using a sword.',
        sp: 700,
      },
      {
        name: 'Yato',
        bondRank: 15,
        description: 'Sacred sword wielded by Emblem Corrin.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'HP +12',
        bondRank: 16,
        description: 'Grants max HP+12.',
        sp: 2000,
      },
      {
        name: 'Sword Focus 5',
        bondRank: 17,
        description: 'Grants Hit+30 at a cost of Ddg-10 when using a sword.',
        sp: 1000,
      },
      {
        name: 'Quality Time+',
        bondRank: 18,
        description:
          'After unit acts or waits, restores 10 HP to adjacent allies and slightly increases support with them.',
        sync: true,
        sp: 500,
      },
      {
        name: 'HP +15',
        bondRank: 19,
        description: 'Grants max HP+15.',
        sp: 3000,
      },
    ],
    maxStats: {
      hp: 15,
      str: 0,
      mag: 4,
      dex: 0,
      spd: 0,
      def: 0,
      res: 3,
      lck: 0,
      bld: 0,
      mov: 0,
    },
  },
  {
    name: 'Byleth',
    image: '/assets/emblems/emblem_byleth.png',
    title: 'the Academy',
    stats: 'MAG, SPD, LCK',
    maxStats: {
      hp: 0,
      str: 0,
      mag: 3,
      dex: 0,
      spd: 3,
      def: 0,
      res: 0,
      lck: 12,
      bld: 0,
      mov: 0,
    },
    skills: [
      { name: 'Luck +2', bondRank: 1, description: 'Grants Lck+2.', sp: 100 },
      {
        name: 'Divine Pulse',
        bondRank: 1,
        description:
          'May turn a missed attack into a hit. Trigger %=30. Chance increases with high Lck. [+1% for every 1 Luck.]',
        sync: true,
        sp: 250,
      },
      {
        name: 'Instruct',
        bondRank: 1,
        description:
          'Use to grant allies within 2 spaces a stat bonus based on user’s type. Bonus lasts for 1 turn. [Dragon] All seven basic stats +3. [Backup] Str+4. [Cavalry] Dex+10. [Covert] Spd+5. [Armored] Def+5. [Flying] Res+5. [Mystical] Mag+4. [Qi Adept] Lck+10.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Goddess Dance',
        bondRank: 1,
        description:
          'Use to grant another action to all adjacent allies. [Dragon] Grants +3 to all targets’ basic stats for 1 turn. [Backup] Grants Str+4 to targets for 1 turn. [Cavalry] Grants Dex+10 to targets for 1 turn. [Covert] Grants Spd+5 to targets for 1 turn. [Armored] Grants Def+5 to targets for 1 turn. [Flying] Grants Res+5 to targets for 1 turn. [Mystical] Grants Mag+4 to targets for 1 turn. [Qi Adept] Grants Lck+10 to targets for 1 turn.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Blutgang (Backup)',
        bondRank: 1,
        description:
          'Magical sword wielded by Emblem Byleth. Effective: Dragon, Cavalry.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Areadbhar (Cavalry)',
        bondRank: 1,
        description:
          'Lance wielded by Emblem Byleth. If user initiates combat, grants Mt+50%.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Failnaught (Covert)',
        bondRank: 1,
        description:
          'Bow wielded by Emblem Byleth. If user initiates combat, grants Avo+20. Effective: Dragon, Flying.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Aegis Shield (Armor)',
        bondRank: 1,
        description:
          'Shield wielded by Emblem Byleth. Grants Def+6 and Res+3. May halve damage if carried. Trigger %=Dex.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Lúin (Flying)',
        bondRank: 1,
        description:
          'Lance wielded by Emblem Byleth. Raises damage based on user’s Spd. Effective: Dragon. [+1 damage for every 3 Spd.]',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Thyrsus (Mystical)',
        bondRank: 1,
        description:
          'Staff wielded by Emblem Byleth. Grants magic range +2. May halve damage if carried. [Trigger %=Dex.]',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Rafail Gem (Qi Adept)',
        bondRank: 1,
        description:
          'Relic gem of Emblem Byleth. User is immune to Effective and critical hits. May halve damage if carried. [Trigger %=Dex.]',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Aymr (Dragon)',
        bondRank: 1,
        description:
          'Axe of Emblem Byleth. Smashes foes. Cannot follow up, or strike first if initiating combat. Eff: Dragon.',
        engage: 'weapon',
        sp: null,
      },
      { name: 'Luck +4', bondRank: 2, description: 'Grants Lck+4.', sp: 300 },
      {
        name: 'Mentorship',
        bondRank: 3,
        description: 'Grants 1.2× EXP modifier to unit and adjacent allies.',
        sync: true,
        sp: 250,
      },
      {
        name: 'Art Focus 1',
        bondRank: 4,
        description: 'Grants Hit+10 at a cost of Ddg-10 when using an art.',
        sp: 100,
      },
      {
        name: 'Art Focus 2',
        bondRank: 6,
        description: 'Grants Hit+15 at a cost of Ddg-10 when using an art.',
        sp: 300,
      },
      {
        name: 'Arts Prof.',
        bondRank: 6,
        description:
          'Proficiency with arts. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Art Focus 3',
        bondRank: 7,
        description: 'Grants Hit+20 at a cost of Ddg-10 when using an art.',
        sp: 500,
      },
      { name: 'Luck +6', bondRank: 8, description: 'Grants Lck+6.', sp: 500 },
      {
        name: 'Sword Prof.',
        bondRank: 9,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Vajra-Mushti',
        bondRank: 10,
        description:
          'Gauntlets wielded by Emblem Byleth. If user initiates combat, attacks twice. Uses lowest of foe’s Def/Res.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Art Focus 4',
        bondRank: 12,
        description: 'Grants Hit+25 at a cost of Ddg-10 when using an art.',
        sp: 700,
      },
      {
        name: 'Lost & Found',
        bondRank: 13,
        description:
          'If unit finishes an action or waits next to an ally, may find an item and increase support with that ally. Trigger %=Lck.',
        sync: true,
        sp: 250,
      },
      {
        name: 'Art Focus 5',
        bondRank: 14,
        description: 'Grants Hit+30 at a cost of Ddg-10 when using an art.',
        sp: 1000,
      },
      {
        name: 'Sword of the Creator',
        bondRank: 15,
        description:
          'Sword of Emblem Byleth. Raises damage with user’s Mag. Can strike close or at range. Effective: Dragon [+1 damage for every 3 Mag.]',
        engage: 'weapon',
        sp: null,
      },
      { name: 'Luck +8', bondRank: 16, description: 'Grants Lck+8.', sp: 1000 },
      {
        name: 'Luck +10',
        bondRank: 17,
        description: 'Grants Lck+10.',
        sp: 2000,
      },
      {
        name: 'Divine Pulse+',
        bondRank: 18,
        description:
          'May turn a missed attack into a hit. Trigger %=50. Chance increases with high Lck. [+1% for every 1 Luck.]',
        sync: true,
        sp: 500,
      },
      {
        name: 'Luck +12',
        bondRank: 19,
        description: 'Grants Lck+12.',
        sp: 3000,
      },
    ],
  },
  {
    name: 'Fire Emblem',
    image: '/assets/emblems/alear-ring.png',
    title: 'Fire',
    stats: 'HP, SPD, DEF',
    maxStats: {
      hp: 15,
      str: 0,
      mag: 0,
      dex: 0,
      spd: 4,
      def: 4,
      res: 0,
      lck: 0,
      bld: 0,
    },
    skills: [
      {
        name: 'Holy Aura',
        bondRank: 1,
        description:
          'Unit is Effective: Fell Dragon. Allies within 2 spaces with Effective: Dragon gain Effective: Fell Dragon. (Might multiplier of 2.)',
      },
      {
        name: 'Attuned',
        bondRank: 1,
        description:
          '	If unit initiates combat and defeats foe, grants engage partner +4 to all seven basic stats while engaged. [Dragon] Extra +1 to all stats. [Backup] Extra +2 to Str. [Cavalry] Extra +2 to Dex. [Covert] Extra +2 to Spd. [Armored] Extra +2 to Def. [Flying] Extra +2 to Res. [Mystical] Extra +2 to Mag. [Qi Adept] Extra +2 to Lck.',
        engage: 'skill',
      },
      {
        name: 'Dragon Blast',
        bondRank: 1,
        description:
          'Use to make two attacks against an adjacent foe with a sword and powerful magic beam. [Dragon] +20% damage. [Backup] Adds 20% of Str to sword attack. [Mystical] Adds 20% of Mag to beam attack. [Qi Adept] Breaks foe.',
        engage: 'attack',
      },
      {
        name: 'Bond Blast',
        bondRank: 1,
        description:
          'Use to make a sword attack from the unit and engage partner followed by a magic beam attack against an adjacent foe. [Dragon] +20% damage. [Backup] +20% of Str to sword. [Mystical] +20% of Mag to beam. [Qi Adept] Breaks foe.',
        engage: 'attack',
      },
      {
        name: 'Lyrátion',
        bondRank: 1,
        description:
          'Sword of Emblem Alear. If user defeats foe in player phase, fills adjacent allies’ engage meters by 1.',
        engage: 'weapon',
      },
      {
        name: 'Bond Forger',
        bondRank: 5,
        description:
          'Grants Hit/Avo+20 to unit and allies within 2 spaces that are synced or engaged with an Emblem.',
      },
      {
        name: 'Dragon’s Fist',
        bondRank: 10,
        description:
          'Magical attack wielded by Emblem Alear. If user initiates combat, attacks twice. (Uses Mag.)',
        engage: 'weapon',
      },
      {
        name: 'Sword Prof.',
        bondRank: 10,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
      },
      {
        name: 'Arts Prof.',
        bondRank: 10,
        description:
          'Proficiency with arts. Required for promotion to certain classes.',
      },
      {
        name: 'Bond Forger+',
        bondRank: 20,
        description:
          '	Grants Hit/Avo+30 to unit and allies within 2 spaces that are synced or engaged with an Emblem.',
      },
      {
        name: 'Holy Shield',
        bondRank: 20,
        description: 'Neutralizes Effective against this unit.',
      },
      {
        name: 'Oligoludia',
        bondRank: 20,
        description: 'Sword wielded by Emblem Alear. Effective: Corrupted.',
        engage: 'weapon',
      },
      {
        name: 'Boon of Elyos',
        bondRank: 21,
        description:
          'If unit initiates combat, grants bonus to Crit and Ddg equal to 2× the number of allies who have acted this turn.',
      },
    ],
  },
  {
    name: 'Edelgard',
    image: '/assets/emblems/Edelgard.png',
    title: 'Rivals',
    stats: 'STR, DEX, DEF',
    maxStats: {
      hp: 0,
      str: 5,
      mag: 4,
      dex: 3,
      spd: 0,
      def: 0,
      res: 0,
      lck: 0,
      bld: 0,
    },
    skills: [
      {
        name: 'Gambit',
        bondRank: 1,
        description: 'Effects change based on synced Emblem.',
        sync: true,
        sp: null,
      },
      {
        name: 'Flame Gambit',
        bondRank: 1,
        description:
          'Use when synced with Edelgard to attack a foe, then set the target foe’s space and nearby spaces on fire.',
        sync: true,
        sp: null,
      },
      {
        name: 'Shield Gambit',
        bondRank: 1,
        description:
          'Use when synced with Dimitri to negate damage from first attacks of ranged foes targeting unit in next enemy phase.',
        sync: true,
        sp: null,
      },
      {
        name: 'Poison Gambit',
        bondRank: 1,
        description:
          'Use when synced with Claude to attack a foe, then poison target and all foes adjacent to it after combat.',
        sync: true,
        sp: null,
      },
      {
        name: 'Friendly Rivalry',
        bondRank: 1,
        description:
          'At start of player phase, the Emblem will randomly switch to Edelgard, Dimitri, or Claude.',
        sync: true,

        sp: null,
      },
      {
        name: 'Combat Arts',
        bondRank: 1,
        description:
          'Enables use of Edelgard, Dimitri, or Claude’s Combat Art. Spends some remaining engage turns. [Dragon] +10% damage. [Covert] Avo+20.',
        engage: 'skill',
        sp: 100,
      },
      {
        name: 'Raging Storm',
        bondRank: 1,
        description: 'After combat, take another action. (Spend 3 turns.)',
        engage: 'skill',
        sp: 100,
      },
      {
        name: 'Atrocity',
        bondRank: 1,
        description: 'Attack at double weapon’s Mt. (Spend 1 turn.)',
        engage: 'skill',
        sp: 100,
      },
      {
        name: 'Fallen Star',
        bondRank: 1,
        description: 'Avoid foe’s attacks during next combat. (Spend 1 turn.)',
        engage: 'skill',
        sp: 100,
      },
      {
        name: 'Houses Unite',
        bondRank: 1,
        description:
          'Use to attack with Aymr, Areadbhar, and Failnaught at 50% damage. [Dragon] +10% damage. [Cavalry] +10% damage with Areadbhar. [Covert] +10% damage with Failnaught. [Armored] +10% damage with Aymr. [Qi Adept] Breaks foe.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Houses Unite+',
        bondRank: 1,
        description:
          '(Requires Adjacent Byleth) Use to attack with Aymr, Areadbhar, and Failnaught at 50% damage. After combat, take another action. [Dragon] +10% damage. [Cavalry] +10% damage with Areadbhar. [Covert] +10% damage with Failnaught. [Armored] +10% damage with Aymr. [Qi Adept] Breaks foe.',

        engage: 'attack',
        sp: null,
      },
      {
        name: 'Aymr (Edelgard)',
        bondRank: 1,
        description:
          'Axe of Emblem Edelgard. Smashes foes. Cannot follow up, or strike first if initiating combat. Eff: Dragon.',
        engage: 'weapon',
        sp: 100,
      },
      {
        name: 'Assembly Gambit',
        bondRank: 2,
        description:
          'Use to attack an adjacent foe, then move 1 space away after combat. Target foe moves to unit’s previous space.',
        sp: 1500,
      },
      {
        name: 'Str/Dex +1',
        bondRank: 3,
        description: 'Grants Str+1 and Dex+1.',
        sp: 700,
      },
      {
        name: 'Lineage',
        bondRank: 3,
        description: 'Increases unit’s earned experience by 20%.',
        sync: true,
        sp: 150,
      },
      {
        name: 'Bow Guard 1',
        bondRank: 4,
        description:
          'If foe is equipped with a bow, unit takes 1 less damage during combat.',
        sp: 200,
      },
      {
        name: 'Axe Prof.',
        bondRank: 6,
        description:
          'Proficiency with axes. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Str/Dex +2',
        bondRank: 7,
        description: 'Grants Str+2 and Dex+2.',
        sp: 1600,
      },
      {
        name: 'Bow Guard 2',
        bondRank: 8,
        description:
          'If foe is equipped with a bow, unit takes 2 less damage during combat.',
        sp: 400,
      },
      {
        name: 'Lance Prof.',
        bondRank: 9,
        description:
          'Proficiency with lances. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Areadbhar (Dimitri)',
        bondRank: 10,
        description:
          'Lance wielded by Emblem Dimitri. If user initiates combat, grants Mt+50%.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Weapon Sync',
        bondRank: 12,
        description:
          'If unit initiates combat using same weapon type as the synced Emblem, grants Atk+5. If engaged, grants Atk+5 regardless of weapon type.',
        sync: true,
        sp: 3000,
      },
      {
        name: 'Str/Dex +3',
        bondRank: 12,
        description: 'Grants Str+3 and Dex+3.',
        sp: 4200,
      },
      {
        name: 'Bow Prof.',
        bondRank: 13,
        description:
          'Proficiency with bows. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Bow Guard 3',
        bondRank: 14,
        description:
          '	If foe is equipped with a bow, unit takes 3 less damage during combat.',
        sp: 600,
      },
      {
        name: 'Failnaught (Claude)',
        bondRank: 15,
        description:
          'Bow wielded by Emblem Claude. If user initiates combat, grants Avo+20. Effective: Dragon, Flying.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Str/Dex +4',
        bondRank: 16,
        description: 'Grants Str+4 and Dex+4.',
        sp: 6000,
      },
      {
        name: 'Weapon Sync+',
        bondRank: 17,
        description:
          'If unit initiates combat using same weapon type as the synced Emblem, grants Atk+7. If engaged, grants Atk+7 regardless of weapon type.',
        sync: true,
        sp: 5000,
      },
      {
        name: 'Bow Guard 4',
        bondRank: 17,
        description:
          'If foe is equipped with a bow, unit takes 4 less damage during combat.',
        sp: 800,
      },
      {
        name: 'Str/Dex +5',
        bondRank: 18,
        description: 'Grants Str+5 and Dex+5.',
        sp: 8400,
      },
      {
        name: 'Bow Guard 5',
        bondRank: 19,
        description:
          'If foe is equipped with a bow, unit takes 5 less damage during combat.',
        sp: 1000,
      },
    ],
    dlc: true,
  },
  {
    name: 'Tiki',
    image: '/assets/emblems/Tiki.png',
    title: 'Dragons',
    stats: 'HP, DEF, LCK',
    maxStats: {
      hp: 10,
      str: 0,
      mag: 0,
      dex: 0,
      spd: 0,
      def: 4,
      res: 0,
      lck: 10,
      bld: 0,
    },
    skills: [
      {
        name: 'Starsphere',
        bondRank: 1,
        description:
          'Grants unit enhanced stat growth when leveling up. [Adds +15% to final growth rates.]',
        sync: true,
        sp: 1500,
      },
      {
        name: 'Draconic Form',
        bondRank: 1,
        description:
          'Unit transforms into and fights as a dragon while engaged. Grants +10 to max HP and +5 to Bld and all basic stats. [Armored] Negates terrain damage. [Mystical] Grants an extra Res+5.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Divine Blessing',
        bondRank: 1,
        description:
          'Use to grant 1 ally a Revival Stone. [Dragon] Restore 20 HP to ally. [Qi Adept] Heal their status effects.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Divine Blessing+',
        bondRank: 1,
        description:
          '(Requires adjacent Marth) 	Use to grant 1 ally a Revival Stone. If ally is not synced, fully restore HP. If ally is synced, +3 to engage meter. If ally is engaged, restore engage turns. [Dragon] Restore 20 HP to ally. [Qi Adept] Heal their status effects.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Eternal Claw',
        bondRank: 1,
        description:
          'Claw attack used by Emblem Tiki. Easily inflicts fatal wounds.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Tail Smash',
        bondRank: 1,
        description:
          'Smash attack used by Emblem Tiki. Smashes foes. Cannot follow up, or strike first if initiating combat.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Fire Breath',
        bondRank: 1,
        description: 'A scorching breath attack. Ignores foe’s Def/Res.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Ice Breath',
        bondRank: 1,
        description:
          'Strikes foes in area at half Def. Freezes foes. Cannot follow up, or strike first if initiating combat.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Flame Breath',
        bondRank: 1,
        description:
          'Sets area on fire. Strikes foes at 70% damage and half Def. Cannot follow up, or strike first if initiating combat.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Dark Breath',
        bondRank: 1,
        description:
          'Magically strikes foes in area at half Res. Cannot follow up, or strike first if initiating combat.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Fog Breath',
        bondRank: 1,
        description:
          'Strikes foes in area at half Def. Eff: Dragon. Creates fog. Cannot follow up, or strike first if initiating combat.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'HP/Lck +2',
        bondRank: 2,
        description: 'Grants HP+2 and Lck+2.',
        sp: 200,
      },
      {
        name: 'Geosphere',
        bondRank: 3,
        description:
          'At start of player phase, if there are allies adjacent to unit, grants Def/Res+3 to unit and those allies for 1 turn.',
        sync: true,
        sp: 500,
      },
      {
        name: 'Special Guard 1',
        bondRank: 4,
        description:
          'If foe is equipped with a special attack, unit takes 1 less damage during combat.',
        sp: 200,
      },
      {
        name: 'Arts Prof.',
        bondRank: 6,
        description:
          'Proficiency with arts. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'HP/Lck +4',
        bondRank: 7,
        description: 'Grants HP+4 and Lck+4.',
        sp: 600,
      },
      {
        name: 'Lifesphere',
        bondRank: 8,
        description:
          'If unit uses Wait without attacking or using items, restores 20 HP and heals status effects.',
        sync: true,
        sp: 1000,
      },
      {
        name: 'Special Guard 2',
        bondRank: 9,
        description:
          'If foe is equipped with a special attack, unit takes 2 less damage during combat.',
        sp: 400,
      },
      {
        name: 'Lightsphere',
        bondRank: 10,
        description:
          'If unit initiates combat, halves chance of receiving critical hit from foe.',
        sync: true,
        sp: 900,
      },
      {
        name: 'HP/Lck +6',
        bondRank: 12,
        description: 'Grants HP+6 and Lck+6.',
        sp: 1100,
      },
      {
        name: 'Special Guard 3',
        bondRank: 13,
        description:
          'If foe is equipped with a special attack, unit takes 3 less damage during combat.',
        sp: 600,
      },
      {
        name: 'Lifesphere+',
        bondRank: 14,
        description:
          'If unit uses Wait without attacking or using items, restores 30 HP and heals status effects.',
        sync: true,
        sp: 2000,
      },
      {
        name: 'HP/Lck +8',
        bondRank: 15,
        description: 'Grants HP+8 and Lck+8.',
        sp: 1900,
      },
      {
        name: 'Geosphere+',
        bondRank: 16,
        description:
          'At start of player phase, if there are allies adjacent to unit, grants Def/Res+5 to unit and those allies for 1 turn.',
        sync: true,
        sp: 1000,
      },
      {
        name: 'Special Guard 4',
        bondRank: 17,
        description:
          'If foe is equipped with a special attack, unit takes 4 less damage during combat.',
        sp: 800,
      },
      {
        name: 'HP/Lck +10',
        bondRank: 18,
        description: 'Grants HP+10 and Lck+10.',
        sp: 3600,
      },
      {
        name: 'Lifesphere++',
        bondRank: 19,
        description:
          'If unit uses Wait without attacking or using items, restores 40 HP and heals status effects.',
        sync: true,
        sp: 3000,
      },
      {
        name: 'Special Guard 5',
        bondRank: 19,
        description:
          'If foe is equipped with a special attack, unit takes 5 less damage during combat.',
        sp: 1000,
      },
    ],
    dlc: true,
  },
  {
    name: 'Hector',
    image: '/assets/emblems/hector.png',
    title: 'Strength',
    stats: 'STR, DEF, BLD',
    maxStats: {
      hp: 0,
      str: 4,
      mag: 0,
      dex: 0,
      spd: 0,
      def: 5,
      res: 0,
      lck: 0,
      bld: 3,
    },
    skills: [
      {
        name: 'Quick Riposte',
        bondRank: 1,
        description:
          'If unit’s HP is 80% or more and foe initiates combat, unit will always follow up (if weapon allows).',
        sync: true,
        sp: 2000,
      },
      {
        name: 'Impenetrable',
        bondRank: 1,
        description:
          'If foe initiates combat, grants Def/Res+30% during combat. [Dragon] Ddg+50%. [Cavalry] Grants immunity to freeze. [Armored] Grants Def+50% instead of +30%. [Flying] Grants Res+50% instead of +30%.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Storm’s Eye',
        bondRank: 1,
        description:
          'Grants immunity to break. Foe cannot follow up. Unit follows up. Lasts 1 turn. Sword/axe only. [Dragon] Prevent one critical hit. [Backup] Crit+20. [Covert] Avo+30.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Storm’s Eye+',
        bondRank: 1,
        description:
          '(Requires adjacent Lyn) Grants immunity to break. Foe cannot follow up. Unit counters before foe’s first attack and follows up. Lasts 1 turn. Sword/axe only. [Dragon] Prevent one critical hit. [Backup] Crit+20. [Covert] Avo+30.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Wolf Beil',
        bondRank: 1,
        description:
          'Axe wielded by Emblem Hector. Effective: Cavalry, Armored.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Str/Def +1',
        bondRank: 2,
        description: 'Grants Str+1 and Def+1.',
        sp: 700,
      },
      {
        name: 'Adaptability',
        bondRank: 3,
        description:
          'When hit by a foe’s attack, grants Def+2 for a physical attack or Res+2 for a magical attack after combat. Lasts until end of battle, or until activated again.',
        sync: true,
        sp: 350,
      },
      {
        name: 'Axe Guard 1',
        bondRank: 4,
        description:
          'If foe is equipped with an axe, unit takes 1 less damage during combat.',
        sp: 200,
      },
      {
        name: 'Axe Prof.',
        bondRank: 6,
        description:
          'Proficiency with axes. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Str/Def +2',
        bondRank: 7,
        description: 'Grants Str+2 and Def+2.',
        sp: 1600,
      },
      {
        name: 'Heavy Attack',
        bondRank: 8,
        description:
          'When making a physical attack, if an equipped weapon’s Wt exceeds unit’s Bld, adds excess as damage. (Max +5)',
        sync: true,
        sp: 3000,
      },
      {
        name: 'Axe Guard 2',
        bondRank: 9,
        description:
          'If foe is equipped with an axe, unit takes 2 less damage during combat.',
        sp: 400,
      },
      {
        name: 'Runesword',
        bondRank: 10,
        description:
          'Magic sword of Emblem Hector. Can strike close or at range. Restore HP equal to 50% of damage dealt.',
        sp: null,
      },
      {
        name: 'Str/Def +3',
        bondRank: 12,
        description: 'Grants Str+3 and Def+3.',
        sp: 4200,
      },
      {
        name: 'Piercing Glare',
        bondRank: 12,
        description:
          'Use when HP is full to consume 20% of max HP and prevent foes from entering the 4 spaces diagonally adjacent to unit for 1 turn.',
        sync: true,
        sp: null,
      },
      {
        name: 'Axe Guard 3',
        bondRank: 13,
        description:
          'If foe is equipped with an axe, unit takes 3 less damage during combat.',
        sp: 600,
      },
      {
        name: 'Str/Def +4',
        bondRank: 14,
        description: 'Grants Str+4 and Def+4.',
        sp: 6000,
      },
      {
        name: 'Armads',
        bondRank: 15,
        description:
          'Lightning-charged axe wielded by Emblem Hector. Grants Def+5. Effective: Dragon.',
        sp: null,
      },
      {
        name: 'Quick Riposte+',
        bondRank: 16,
        description:
          'If unit’s HP is 60% or more and foe initiates combat, unit will always follow up (if weapon allows).',
        sync: true,
        sp: 3000,
      },
      {
        name: 'Axe Guard 4',
        bondRank: 17,
        description:
          'If foe is equipped with an axe, unit takes 4 less damage during combat.',
        sp: 800,
      },
      {
        name: 'Str/Def +5',
        bondRank: 18,
        description: 'Grants Str+5 and Def+5.',
        sp: 8400,
      },
      {
        name: 'Adaptability+',
        bondRank: 19,
        description:
          'When hit by a foe’s attack, grants Def+3 for a physical attack or Res+3 for a magical attack after combat. Lasts until end of battle, or until activated again.',
        sync: true,
        sp: 700,
      },
      {
        name: 'Axe Guard 5',
        bondRank: 19,
        description:
          'If foe is equipped with an axe, unit takes 5 less damage during combat.',
        sp: 1000,
      },
    ],
    dlc: true,
  },
  {
    name: 'Camilla',
    image: '/assets/emblems/camilla.png',
    title: 'Revelation',
    stats: 'HP, SPD, RES',
    maxStats: {
      hp: 7,
      str: 0,
      mag: 0,
      dex: 0,
      spd: 5,
      def: 0,
      res: 4,
      lck: 0,
      bld: 0,
    },
    skills: [
      {
        name: 'Spd/Res +1',
        bondRank: 1,
        description: 'Grants Spd+1 and Res+1.',
        sp: 250,
      },
      {
        name: 'Dragon Vein',
        bondRank: 1,
        description:
          'Use to add a special effect to certain spaces. [Dragon] Choose any Vein effect. [Backup] Creates stone pillars that increase Def/Res. [Cavalry] Creates water that decreases Avo. [Covert] Creates smoke that decreases Def/Avo. [Armored] Creates vines that grant immunity to break. [Flying] Creates healing glow that restores HP. [Mystical] Creates flames that inflict damage. [Qi Adept] Creates ice floor that increases movement.',
        sync: true,
        sp: null,
      },

      {
        name: 'Soar',
        bondRank: 1,
        description:
          'Grants Mov+2. Unit can cross terrain as if flying. [Dragon] If unit initiates combat, deals damage to foes within 2 spaces equal to 10% of their max HP after combat. [Cavalry] Grants an extra Mov+2. [Flying] Grants an extra Mov+1.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Dark Inferno',
        bondRank: 1,
        description:
          'Use to deal damage to foes on certain spaces near unit and set those spaces on fire. [Dragon] Increases area of effect. [Mystical] +20% damage. [Qi Adept] Adds Glow to adjacent spaces.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Dark Inferno+',
        bondRank: 1,
        description:
          '(Requires adjacent Corrin) Use to deal damage to foes on certain spaces near unit and set those spaces on fire. [Dragon] Increases area of effect. [Mystical] +20% damage. [Qi Adept] Adds Glow to adjacent spaces.',

        engage: 'attack',
        sp: null,
      },
      {
        name: 'Bolt Axe',
        bondRank: 1,
        description:
          'Magic axe wielded by Emblem Camilla. Can strike close or at range.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Lance Guard 1',
        bondRank: 2,
        description:
          'If foe is equipped with a lance, unit takes 1 less damage during combat.',
        sp: 200,
      },
      {
        name: 'Spd/Res +2',
        bondRank: 3,
        description: 'Grants Spd+2 and Res+2.',
        sp: 700,
      },
      {
        name: 'Decisive Strike',
        bondRank: 4,
        description:
          'If unit initiates combat and lands a critical, deals 5 damage to foe after combat.',
        sync: true,
        sp: 500,
      },
      {
        name: 'Axe Prof.',
        bondRank: 6,
        description:
          'Proficiency with axes. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Lance Guard 2',
        bondRank: 7,
        description:
          'If foe is equipped with a lance, unit takes 2 less damage during combat.',
        sp: 400,
      },
      {
        name: 'Detoxify',
        bondRank: 8,
        description: 'Cures poison at start of turn.',
        sync: true,
        sp: 250,
      },
      {
        name: 'Spd/Res +3',
        bondRank: 9,
        description: 'Grants Spd+3 and Res+3.',
        sp: 1200,
      },
      {
        name: 'Lightning',
        bondRank: 10,
        description:
          'Magic wielded by Emblem Camilla. If user initiates combat, attacks twice.',
        sp: null,
      },
      {
        name: 'Groundswell',
        bondRank: 12,
        description:
          'After unit acts or waits in flames, miasma, or similar terrain effect, unit clears effect and recovers 10 HP.',
        sync: true,
        sp: 500,
      },
      {
        name: 'Lance Guard 3',
        bondRank: 13,
        description:
          'If foe is equipped with a lance, unit takes 3 less damage during combat.',
        sp: 600,
      },
      {
        name: 'Spd/Res +4',
        bondRank: 14,
        description: 'Grants Spd+4 and Res+4.',
        sp: 2400,
      },
      {
        name: 'Camilla’s Axe',
        bondRank: 15,
        description:
          'Axe wielded by Emblem Camilla. Grants Res+10 and deals extra damage = foe’s Res-Def.',
        sp: null,
      },
      {
        name: 'Lance Guard 4',
        bondRank: 16,
        description:
          'If foe is equipped with a lance, unit takes 4 less damage during combat.',
        sp: 800,
      },
      {
        name: 'Tome Prof.',
        bondRank: 17,
        description:
          'Proficiency with tomes. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Decisive Strike+',
        bondRank: 18,
        description:
          'If unit initiates combat and lands a critical, deals 10 damage to foe after combat.',
        sync: true,
        sp: 1000,
      },
      {
        name: 'Spd/Res +5',
        bondRank: 18,
        description: 'Grants Spd+5 and Res+5.',
        sp: 4800,
      },
      {
        name: 'Lance Guard 5',
        bondRank: 19,
        description:
          'If foe is equipped with a lance, unit takes 5 less damage during combat.',
        sp: 1000,
      },
    ],
    dlc: true,
  },
  {
    name: 'Soren',
    image: '/assets/emblems/soren.png',
    title: 'Acumen',
    stats: 'MAG, DEX, RES',
    maxStats: {
      hp: 0,
      str: 0,
      mag: 4,
      dex: 3,
      spd: 0,
      def: 0,
      res: 5,
      lck: 0,
      bld: 0,
    },
    skills: [
      {
        name: 'Assign Decoy',
        bondRank: 1,
        description:
          'Use to make one chosen ally more likely to be targeted by enemies for 1 turn. Effect is removed after ally is targeted by or otherwise damaged by foes 3 times.',
        sync: true,
        sp: 1500,
      },
      {
        name: 'Flare',
        bondRank: 1,
        description:
          'When attacking with tomes, inflicts Res-20% on foe, and unit recovers 50% of damage dealt. [Dragon] Critical rate is doubled. [Mystical] Extra -10% to foe’s Res. [Qi Adept] Unit recovers 100% of damage dealt instead.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Cataclysm',
        bondRank: 1,
        description:
          'Use to attack foes in an area with fire, thunder and wind magic at 40% damage. Wind is effective: Flying. [Dragon] Sets terrain on fire. [Mystical] +10% damage. [Qi Adept] 20% chance of breaking target.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Cataclysm+',
        bondRank: 1,
        description:
          '(Requires adjacent Ike) Use to attack foes in an area with fire, thunder and wind magic at 40% damage. Wind is effective: Flying. [Dragon] Sets terrain on fire. [Mystical] +10% damage. [Qi Adept] 20% chance of breaking target.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Bolting',
        bondRank: 1,
        description:
          'Long-range thunder magic wielded by Emblem Soren. Cannot follow up.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Mag/Res +1',
        bondRank: 2,
        description: 'Grants Mag+1 and Res+1.',
        sp: 700,
      },
      {
        name: 'Magic Guard 1',
        bondRank: 3,
        description:
          'If foe is equipped with a tome, unit takes 1 less damage during combat.',
        sp: 200,
      },
      {
        name: 'Anima Focus',
        bondRank: 4,
        description:
          'When using tomes, unit inflicts Def-3 with fire, Hit-20 with thunder, or Mov-2 with wind magic for 1 turn.',
        sync: true,
        sp: 800,
      },
      {
        name: 'Knife Prof.',
        bondRank: 6,
        description:
          'Proficiency with knives. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Mag/Res +2',
        bondRank: 7,
        description: 'Grants Mag+2 and Res+2.',
        sp: 1600,
      },
      {
        name: 'Magic Guard 2',
        bondRank: 8,
        description:
          'If foe is equipped with a tome, unit takes 2 less damage during combat.',
        sp: 400,
      },
      {
        name: 'Keen Insight',
        bondRank: 9,
        description: 'When unit deals Effective damage, deal +5 damage.',
        sync: true,
        sp: 1500,
      },
      {
        name: 'Reflect',
        bondRank: 10,
        description:
          'Staff of Emblem Soren. Allies within 2 spaces gain “deals 50% of magic damage taken back to foe” for 1 turn.',
        sp: null,
      },
      {
        name: 'Mag/Res +3',
        bondRank: 12,
        description: 'Grants Mag+3 and Res+3.',
        sp: 4200,
      },
      {
        name: 'Staff Prof.',
        bondRank: 12,
        description:
          'Proficiency with staves. Required for promotion to certain classes.',
        sync: true,
        sp: null,
      },
      {
        name: 'Block Recovery',
        bondRank: 13,
        description:
          'When attacking a broken foe with a tome, grants a chance the foe will remain broken. Chance increases with high Spd. [Trigger% = (Spd - foe’s Spd) x 5, max 50]',
        sp: 1500,
      },
      {
        name: 'Magic Guard 3',
        bondRank: 13,
        description:
          '	If foe is equipped with a tome, unit takes 3 less damage during combat.',
        sp: 600,
      },
      {
        name: 'Mag/Res +4',
        bondRank: 14,
        description: 'Grants Mag+4 and Res+4.',
        sp: 6000,
      },
      {
        name: 'Rexcalibur',
        bondRank: 15,
        description:
          'Powerful wind magic wielded by Emblem Soren. Effective: Flying.',
        sp: null,
      },
      {
        name: 'Tome Prof.',
        bondRank: 16,
        description:
          'Proficiency with tomes. Required for promotion to certain classes.',
        sp: null,
      },

      {
        name: 'Magic Guard 4',
        bondRank: 17,
        description:
          'If foe is equipped with a tome, unit takes 4 less damage during combat.',
        sp: 800,
      },
      {
        name: 'Keen Insight+',
        bondRank: 18,
        description: 'When unit deals Effective damage, deal +7 damage.',
        sync: true,
        sp: 3000,
      },
      {
        name: 'Mag/Res +5',
        bondRank: 18,
        description: 'Grants Mag+5 and Res+5.',
        sp: 8400,
      },
      {
        name: 'Magic Guard 5',
        bondRank: 19,
        description:
          'If foe is equipped with a tome, unit takes 5 less damage during combat.',
        sp: 1000,
      },
    ],
    dlc: true,
  },
  {
    name: 'Chrom',
    image: '/assets/emblems/chrom.png',
    title: 'Bonds',
    stats: 'STR, DEX, SPD',
    maxStats: {
      hp: 0,
      str: 3,
      mag: 0,
      dex: 5,
      spd: 4,
      def: 0,
      res: 0,
      lck: 0,
      bld: 0,
    },
    skills: [
      {
        name: 'Surprise Attack',
        bondRank: 1,
        description:
          'If unit initiates combat from terrain that provides an Avo bonus, foe cannot counterattack.',
        sync: true,
        sp: 3000,
      },
      {
        name: 'Other Half',
        bondRank: 1,
        description:
          'If unit initiates combat, Robin chain attacks. Grants Mag+10 while engaged. [Dragon] Robin chain attacks 2 times. [Backup] Guaranteed hit with chain attack. [Covert] Grants Mov+1 while engaged.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Giga Levin Sword',
        bondRank: 1,
        description:
          'Use to attack with a magic sword. Magic attack that uses physical attack power. Swords only. [Dragon] Deals extra damage = half of Str. [Flying] Deals extra damage = Bld. [Mystical] Deals extra damage = half of Mag.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Giga Levin Sword+',
        bondRank: 1,
        description:
          '(Requires adjacent Lucina) Use to attack with a magic sword. Magic attack that uses physical attack power. Swords only. Adjacent allies chain attack. [Dragon] Deals extra damage = half of Str. [Flying] Deals extra damage = Bld. [Mystical] Deals extra damage = half of Mag.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Levin Sword',
        bondRank: 1,
        description:
          'Magic sword wielded by Emblem Robin. Can hit foes with magic lightning from a distance.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Spd/Dex +1',
        bondRank: 2,
        description: 'Grants Spd+1 and Dex+1.',
        sp: 250,
      },
      {
        name: 'Sword Guard 1',
        bondRank: 3,
        description:
          'If foe is equipped with a sword, unit takes 1 less damage during combat.',
        sp: 200,
      },
      {
        name: 'Rally Spectrum',
        bondRank: 4,
        description:
          'Use to grant adjacent allies +3 to all seven basic stats for 1 turn.',
        sync: true,
        sp: 1500,
      },
      {
        name: 'Sword Prof.',
        bondRank: 6,
        description:
          'Proficiency with swords. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Spd/Dex +2',
        bondRank: 7,
        description: 'Grants Spd+2 and Dex+2.',
        sp: 700,
      },
      {
        name: 'Brute Force',
        bondRank: 8,
        description:
          'While making a physical attack, critical hits deal increased damage. (Damage increased by one third.)',
        sync: true,
        sp: 1500,
      },
      {
        name: 'Sword Guard 2',
        bondRank: 9,
        description:
          'If foe is equipped with a sword, unit takes 2 less damage during combat.',
        sp: 400,
      },
      {
        name: 'Thoron',
        bondRank: 10,
        description: 'Powerful lightning magic wielded by Emblem Robin.',
        sp: null,
      },
      {
        name: 'Spd/Dex +3',
        bondRank: 12,
        description: 'Grants Spd+3 and Dex+3.',
        sp: 1200,
      },
      {
        name: 'Charm',
        bondRank: 13,
        description:
          'If unit’s attack triggers a chain attack, increases chain attack accuracy to 90%.',
        sync: true,
        sp: 800,
      },
      {
        name: 'Sword Guard 3',
        bondRank: 13,
        description:
          'If foe is equipped with a sword, unit takes 3 less damage during combat.',
        sp: 600,
      },
      {
        name: 'Spd/Dex +4',
        bondRank: 14,
        description: 'Grants Spd+4 and Dex+4.',
        sp: 2400,
      },
      {
        name: 'Falchion',
        bondRank: 15,
        description:
          'A legendary sword wielded by Emblem Chrom. Effective: Dragon.',
        sp: null,
      },
      {
        name: 'Tome Prof.',
        bondRank: 16,
        description:
          'Proficiency with tomes. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Sword Guard 4',
        bondRank: 17,
        description:
          'If foe is equipped with a sword, unit takes 4 less damage during combat.',
        sp: 800,
      },
      {
        name: 'Rally Spectrum+',
        bondRank: 18,
        description:
          'Use to grant allies within 2 spaces +3 to all seven basic stats for 1 turn.',
        sync: true,
        sp: 2000,
      },
      {
        name: 'Spd/Dex +5',
        bondRank: 18,
        description: 'Grants Spd+5 and Dex+5.',
        sp: 4800,
      },
      {
        name: 'Sword Guard 5',
        bondRank: 19,
        description:
          'If foe is equipped with a sword, unit takes 5 less damage during combat.',
        sp: 1000,
      },
    ],
    dlc: true,
  },
  {
    name: 'Veronica',
    image: '/assets/emblems/veronica.png',
    title: 'Heroes',
    stats: 'MAG, RES, LCK',
    maxStats: {
      hp: 0,
      str: 0,
      mag: 5,
      dex: 0,
      spd: 0,
      def: 0,
      res: 4,
      lck: 6,
      bld: 0,
    },
    skills: [
      {
        name: 'Reprisal',
        bondRank: 1,
        description: 'If unit’s HP is not full, adds 30% of lost HP to Atk.',
        sync: true,
        sp: 5000,
      },
      {
        name: 'Contract',
        bondRank: 1,
        description:
          'Use to grant another action to an adjacent ally who has already acted. (Ally cannot move.) [Dragon] Grants Str/Mag/Def/Res+2 to ally during action. [Backup] Unit participates in chain attack during ally action. [Covert] Grants Hit/Avo+30 to ally during action.',
        engage: 'skill',
        sp: null,
      },
      {
        name: 'Summon Hero',
        bondRank: 1,
        description:
          'Use to summon a random unit. [Dragon] Summons a powerful unit.[Backup] Summoned unit has the “Dual Strike” skill. [Cavalry] Summoned unit gets Mov+1.',
        engage: 'attack',
        sp: null,
      },
      {
        name: 'Hliðskjálf',
        bondRank: 1,
        description:
          'A staff wielded by Emblem Veronica. If user initiates combat, foe cannot counterattack.',
        engage: 'weapon',
        sp: null,
      },
      {
        name: 'Mag/Dex +1',
        bondRank: 2,
        description: 'Grants Mag+1 and Dex+1.',
        sp: 700,
      },
      {
        name: 'Book of Worlds',
        bondRank: 3,
        description:
          'Book of Worlds advances 1 stage (to max 5) for each consecutive round that unit uses Wait. Reverts to base stage if unit triggers the effect. [Book I: Seal] If unit initiates combat, freezes foe after combat. [Book II: Flame] If unit initiates combat, freezes foe and sets foe’s space on fire after combat. [Book III: Death] If unit initiates combat, deals 10 damage, freezes foe, and sets foe’s space on fire after combat. [Book IV: Dream] If unit initiates combat, restores HP equal to damage dealt during combat, then deals 10 damage, freezes foe, and sets foe’s space on fire after combat. [Book V: Science] If unit initiates combat, restores HP to self and adjacent allies equal to damage dealt during combat, then deals 10 damage, freezes foe, and sets foe’s space on fire after combat.',
        sync: true,
        sp: 300,
      },
      {
        name: 'Knife Guard 1',
        bondRank: 4,
        description:
          'If foe is equipped with a knife, unit takes 1 less damage during combat.',
        sp: 200,
      },
      {
        name: 'Staff Prof.',
        bondRank: 6,
        description:
          'Proficiency with staves. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Mag/Dex +2',
        bondRank: 7,
        description: 'Grants Mag+2 and Dex+2.',
        sp: 1600,
      },
      {
        name: 'Level Boost',
        bondRank: 8,
        description:
          'When unit defeats a foe of a higher level, grants Lvl+1 until the end of battle. (Max +3)',
        sync: true,
        sp: 300,
      },
      {
        name: 'Knife Guard 2',
        bondRank: 9,
        description:
          'If foe is equipped with a knife, unit takes 2 less damage during combat.',
        sp: 400,
      },
      {
        name: 'Fortify+',
        bondRank: 10,
        description:
          'A staff wielded by Emblem Veronica. Heals HP and status effects for all allies within a 7-space radius.',
        sp: null,
      },
      {
        name: 'Mag/Dex +3',
        bondRank: 12,
        description: 'Grants Mag+3 and Dex+3.',
        sp: 4200,
      },
      {
        name: 'SP Conversion',
        bondRank: 13,
        description:
          'Grants +20 SP for each defeated foe. Triggers even without a ring or bracelet equipped.',
        sync: true,
        sp: 300,
      },
      {
        name: 'Knife Guard 3',
        bondRank: 13,
        description:
          'If foe is equipped with a knife, unit takes 3 less damage during combat.',
        sp: 600,
      },
      {
        name: 'Mag/Dex +4',
        bondRank: 14,
        description: 'Grants Mag+4 and Dex+4.',
        sp: 6000,
      },
      {
        name: 'Élivágar',
        bondRank: 15,
        description:
          'Powerful magic wielded by Emblem Veronica. Nullifies basic stat bonuses on target for 1 turn after combat.',
        sp: null,
      },
      {
        name: 'Tome Prof.',
        bondRank: 16,
        description:
          'Proficiency with tomes. Required for promotion to certain classes.',
        sp: null,
      },
      {
        name: 'Knife Guard 4',
        bondRank: 17,
        description:
          'If foe is equipped with a knife, unit takes 4 less damage during combat.',
        sp: 800,
      },
      {
        name: 'Reprisal+',
        bondRank: 18,
        description: 'If unit’s HP is not full, adds 50% of lost HP to Atk.',
        sync: true,
        sp: 6000,
      },
      {
        name: 'Mag/Dex +5',
        bondRank: 18,
        description: 'Grants Mag+5 and Dex+5.',
        sp: 8400,
      },
      {
        name: 'Knife Guard 5',
        bondRank: 19,
        description:
          'If foe is equipped with a knife, unit takes 5 less damage during combat.',
        sp: 1000,
      },
    ],
    dlc: true,
  },
  {
    name: 'No Emblem',
    image: '/assets/misc/liberation.png',
    title: '',
    stats: '',
    maxStats: {
      hp: 0,
      str: 0,
      mag: 0,
      dex: 0,
      spd: 0,
      def: 0,
      res: 0,
      lck: 0,
      bld: 0,
    },
    skills: [{ name: '', bondRank: '', description: '', sp: '' }],
  },
];

export default emblemData;
