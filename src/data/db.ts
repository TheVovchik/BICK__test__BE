import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

/* for local tests
export const sequelize = new Sequelize({
  host: 'localhost',
  username: 'postgres',
  password: 'test1234',
  dialect: 'postgres' ,
});
 */

export const sequelize = new Sequelize(process.env.DATABASE_URL!, {
	dialect: 'mysql',
  dialectModule: require('mysql2'),
	dialectOptions: {
		ssl: { "rejectUnauthorized": false }
	}
});
