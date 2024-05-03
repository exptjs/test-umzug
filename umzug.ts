import {Sequelize} from '@sequelize/core';
import {Umzug, SequelizeStorage} from 'umzug';

const _sequelize = new Sequelize({
  dialect: 'postgres',
  logging: console.log
});

export const migrator = new Umzug({
  migrations: {
    glob: ['migrations/*.{ts,sql}', {cwd: __dirname}],
  },
  context: _sequelize.getQueryInterface(),
  storage: new SequelizeStorage({
    sequelize: _sequelize
  }),
  logger: console,
});

export type Migration = typeof migrator._types.migration
