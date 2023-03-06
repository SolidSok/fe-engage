const unitData = [
  {
    name: 'Alear',
    image: 'src/assets/units/alearF.png',
    class: 'Dragon Child',
    innate: 'Sword',
    sp: 300,
    personal: {
      name: 'Divinely Inspiring',
      image: '',
      description: 'Adjacent allies deal +3 damage and take 1 less damage.',
    },
    origin: 'Lythos',
  },
  {
    name: 'Vander',
    image: 'src/assets/units/vander.png',
    class: 'Paladin',
    innate: 'Axe',
    sp: 300,
    personal: {
      name: 'Alabaster Duty',
      image: '',
      description:
        'If unit is adjacent to the Divine Dragon, grants crit+5 during combat to both of them.',
    },
    origin: 'Lythos',
  },
  {
    name: 'Clanne',
    image: 'src/assets/units/clanne.png',
    class: 'Mage',
    innate: 'Tome',
    sp: 300,
    personal: {
      name: 'Verdant Faith',
      image: '',
      description:
        'If unit is adjacent to the Divine Dragon, grants Hit+10 during combat to both of thme.',
    },
    origin: 'Lythos',
  },
  {
    name: 'Framme',
    image: 'src/assets/units/framme.png',
    class: 'Martial Monk',
    innate: 'Arts',
    sp: 300,
    personal: {
      name: 'Crimson Cheer',
      image: '',
      description:
        'If unit is adjacent to the Divine Dragon, grants Avo+10 during combat to both of them.',
    },
    origin: 'Lythos',
  },
  {
    name: 'Alfred',
    image: 'src/assets/units/alfred.png',
    class: 'Noble',
    innate: 'Lance',
    sp: 300,
    personal: {
      name: 'Self-Improver',
      image: '',
      description:
        'If unit uses Wait without attacking or using items, grants Str+2 for 1 turn.',
    },
    origin: 'Firene',
  },
  {
    name: 'Etie',
    image: 'src/assets/units/etie.png',
    class: 'Archer',
    innate: 'Bow',
    sp: 300,
    personal: {
      name: 'Energized',
      image: '',
      description:
        'When unit recovers HP using an item, grants Str+2 for 1 turn.',
    },
    origin: 'Firene',
  },
  {
    name: 'Boucheron',
    image: 'src/assets/units/boucheron.png',
    class: 'Axe Fighter',
    innate: 'Axe',
    sp: 300,
    personal: {
      name: 'Moved to Tears',
      image: '',
      description:
        "When an ally joins a chain attack in this unit's combat, unit deals +2 damage.",
    },
    origin: 'Firene',
  },
  {
    name: 'Céline',
    image: 'src/assets/units/celine.png',
    class: 'Noble',
    innate: 'Tome',
    sp: 300,
    personal: {
      name: 'Gentle Flower',
      image: '',
      description:
        'Recovery items used by allies within 2 spaces heal +50% HP.',
    },
    origin: 'Firene',
  },
  {
    name: 'Chloé',
    image: 'src/assets/units/chloe.png',
    class: 'Lance Flier',
    innate: 'Lance',
    sp: 300,
    personal: {
      name: 'Fairy-Tale Folk',
      image: '',
      description:
        'If a male and a female ally are adjacent within 2 spaces, unit deals +2 damage during combat.',
    },
    origin: 'Firene',
  },
  {
    name: 'Louis',
    image: 'src/assets/units/louis.png',
    class: 'Lance Armor',
    innate: 'Lance',
    sp: 300,
    personal: {
      name: 'Admiration',
      image: '',
      description:
        'If two female allies are adjacent within 2 spaces, this unit takes 2 less damage during combat.',
    },
    origin: 'Firene',
  },
  {
    name: 'Yunaka',
    image: 'src/assets/units/yunaka.png',
    class: 'Thief',
    innate: 'Knife',
    sp: 500,
    personal: {
      name: 'Trained to Kill',
      image: '',
      description:
        'While unit occupies terrain that provides an Avo bonus, grants Crit+15.',
    },
    origin: '',
  },
  {
    name: 'Alcryst',
    image: 'src/assets/units/alcryst.png',
    class: 'Lord',
    innate: 'Bow',
    sp: 500,
    personal: {
      name: 'Get Behind Me!',
      image: '',
      description:
        'When an ally within 2 spaces is attacked, grants Str+3 to unit for 1 turn.',
    },
    origin: '',
  },
  {
    name: 'Citrinne',
    image: 'src/assets/units/citrinne.png',
    class: 'Mage',
    innate: 'Tome',
    sp: 500,
    personal: {
      name: 'Generosity',
      image: '',
      description:
        'When this unit uses a healing item, adjacent allies also recover the same amount of HP.',
    },
    origin: '',
  },
  {
    name: 'Lapis',
    image: 'src/assets/units/lapis.png',
    class: 'Sword Fighter',
    innate: 'Sword',
    sp: 500,
    personal: {
      name: 'Share Spoils',
      image: '',
      description:
        'If there is an ally within 1 space, grants Hit/Avo+10 at a cost of Crit-10 to unit.',
    },
    origin: '',
  },
  {
    name: 'Diamant',
    image: 'src/assets/units/diamant.png',
    class: 'Lord',
    innate: 'Sword',
    sp: 800,
    personal: {
      name: 'Fair Fight',
      image: '',
      description:
        'If unit initiates combat, grants Hit+15 to unit and for if foe is able to counterattack.',
    },
    origin: '',
  },
  {
    name: 'Amber',
    image: 'src/assets/units/amber.png',
    class: 'Lance Cavalier',
    innate: 'Lance',
    sp: 800,
    personal: {
      name: 'Aspiring Hero',
      image: '',
      description:
        'If no other units are within 1 space of unit or foe, grants Hit+20 at a cost of Avo-10 during combat.',
    },
    origin: '',
  },
  {
    name: 'Jade',
    image: 'src/assets/units/jade.png',
    class: 'Axe Armor',
    innate: 'Axe',
    sp: 800,
    personal: {
      name: 'Meditation',
      image: '',
      description:
        'If unit uses Wait without attacking or using items, grants Res+2 for 1 turn.',
    },
    origin: '',
  },
  {
    name: 'Ivy',
    image: 'src/assets/units/ivy.png',
    class: 'Wing Tamer',
    innate: 'Tome',
    sp: 1000,
    personal: {
      name: 'Single-Minded',
      image: '',
      description:
        "During Combat with a foe who was also unit's most recent opponent, grants Hit+20.",
    },
    origin: '',
  },
  {
    name: 'Kagetsu',
    image: 'src/assets/units/kagetsu.png',
    class: 'Swordmaster',
    innate: 'Sword',
    sp: 1000,
    personal: {
      name: 'Blinding Flash',
      image: '',
      description:
        'If unit initiates combat, inflicts Avo-10 on foe during combat.',
    },
    origin: '',
  },
  {
    name: 'Zelkov',
    image: 'src/assets/units/zelkov.png',
    class: 'Thief',
    innate: 'Knife',
    sp: 1000,
    personal: {
      name: 'Not *Quite*',
      image: '',
      description:
        'If for initiates combat, inflicts Hit-10 on that foe during combat.',
    },
    origin: '',
  },
  {
    name: 'Fogado',
    image: 'src/assets/units/fogado.png',
    class: 'Sentinel',
    innate: 'Bow',
    sp: 1200,
    personal: {
      name: 'Charmer',
      image: '',
      description:
        "During combat with a foe who was also unit's most recent opponent, inflicts Crit-10 on that foe.",
    },
    origin: '',
  },
  {
    name: 'Pandreo',
    image: 'src/assets/units/pandreo.png',
    class: 'High Priest',
    innate: 'Staff',
    sp: 1200,
    personal: {
      name: 'Party Animal',
      image: '',
      description:
        'Grants a bonus to Hit and Avo equal to 3x the number of allies and foes within 2 spaces.',
    },
    origin: '',
  },
  {
    name: 'Bunet',
    image: 'src/assets/units/bunet.png',
    class: 'Great Knight',
    innate: 'Sword',
    sp: 1200,
    personal: {
      name: 'Seconds?',
      image: '',
      description:
        'On eating a packed lunch, unit may obtain another of the same item. Trigger%=Lck',
    },
    origin: '',
  },
  {
    name: 'Timerra',
    image: 'src/assets/units/timerra.png',
    class: 'Sentinel',
    innate: 'Lance',
    sp: 1500,
    personal: {
      name: 'Racket of Solm',
      image: '',
      description: 'Inflicts Crit-5 on foes within 3 spaces.',
    },
    origin: '',
  },
  {
    name: 'Panette',
    image: 'src/assets/units/panette.png',
    class: 'Berserker',
    innate: 'Knife',
    sp: 1500,
    personal: {
      name: 'Blood Fury',
      image: '',
      description:
        "If unit's HP is not at max after combat, grants Crit+10 as long a s unit's HP stays below max",
    },
    origin: '',
  },
  {
    name: 'Merrin',
    image: 'src/assets/units/merrin.png',
    class: 'Wolf Knight',
    innate: 'Knife',
    sp: 1500,
    personal: {
      name: 'Knightly Escort',
      image: '',
      description:
        'When 2 or more female allies are within 2 spaces, grants Hit/Avo+5 to unit and those allies.',
    },
    origin: '',
  },
  {
    name: 'Hortensia',
    image: 'src/assets/units/hortensia.png',
    class: 'Wing Tamer',
    innate: 'Staff',
    sp: 1500,
    personal: {
      name: 'Big Personality',
      image: '',
      description: 'When unit uses a healing staff, grants range +1.',
    },
    origin: '',
  },
  {
    name: 'Seadall',
    image: 'src/assets/units/seadall.png',
    class: 'Dancer',
    innate: 'Arts',
    sp: 1500,
    personal: {
      name: 'Curious Dance',
      image: '',
      description:
        'At start of turn, allies within 2 spaces of unit recover 10% of their max HP.',
    },
    origin: '',
  },
  {
    name: 'Rosado',
    image: 'src/assets/units/rosado.png',
    class: 'Wyvern Knight',
    innate: 'Axe',
    sp: 1800,
    personal: {
      name: 'Stunning Smile',
      image: '',
      description: 'If foe is male, inflicts Avo-20 on that foe during combat.',
    },
    origin: '',
  },
  {
    name: 'Goldmary',
    image: 'src/assets/units/goldmary.png',
    class: 'Hero',
    innate: 'Lance',
    sp: 1800,
    personal: {
      name: 'Disarming Sigh',
      image: '',
      description: 'If foe is male, inflicts Hit-20 on that foe during combat.',
    },
    origin: '',
  },
  {
    name: 'Lindon',
    image: 'src/assets/units/lindon.png',
    class: 'Sage',
    innate: 'Staff',
    sp: 2000,
    personal: {
      name: 'Weapon Insight',
      image: '',
      description:
        "If unit is equipped with a weapon of lower level than foe's, grants Crit+20 during combat.",
    },
    origin: '',
  },
  {
    name: 'Saphir',
    image: 'src/assets/units/saphir.png',
    class: 'Warrior',
    innate: 'Axe',
    sp: 2000,
    personal: {
      name: 'Will to Win',
      image: '',
      description:
        "If unit's HP is 50% or less at start of combat, grants Hit/Avo+20 during combat.",
    },
    origin: '',
  },
  {
    name: 'Veyle',
    image: 'src/assets/units/veyle.png',
    class: 'Fell Dragon',
    innate: 'Tome',
    sp: 2500,
    personal: {
      name: 'Fell Protection',
      image: '',
      description: 'Adjacent Allies deal +1 damage and take 3 less damage.',
    },
    origin: '',
  },
  {
    name: 'Mauvier',
    image: 'src/assets/units/mauvier.png',
    class: 'Royal Knight',
    innate: 'Staff',
    sp: 2500,
    personal: {
      name: 'Contemplative',
      image: '',
      description:
        'If unit uses Wait without attacking or using items, grants Def+2 for 1 turn.',
    },
    origin: '',
  },
  {
    name: 'Jean',
    image: 'src/assets/units/jean.png',
    class: 'Martial Monk',
    innate: 'Bow',
    sp: 300,
    personal: {
      name: 'Make a Killing',
      image: '',
      description: 'May obtain 500G when unit defeats a foe. trigger%=Lck.',
    },
    origin: 'Gronder',
  },
  {
    name: 'Anna',
    image: 'src/assets/units/anna.png',
    class: 'Axe Fighter',
    innate: 'Arts',
    sp: 300,
    personal: {
      name: 'Expertise',
      image: '',
      description:
        'Grants Unit enhanced stat growth when leveling up. (Doubles class Growths)',
    },
    origin: 'Gronder',
  },
];

export default unitData;
