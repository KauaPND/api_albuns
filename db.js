import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGALBUNS, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGALBUNS,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };