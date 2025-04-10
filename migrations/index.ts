import * as migration_20250410_111713 from './20250410_111713';

export const migrations = [
  {
    up: migration_20250410_111713.up,
    down: migration_20250410_111713.down,
    name: '20250410_111713'
  },
];
