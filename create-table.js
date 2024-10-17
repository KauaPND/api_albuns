import { sql } from './db.js'

sql`
  CREATE TABLE albuns (
      id text PRIMARY KEY,
      nome character varying(255),
      banda character varying(255),
      faixas character varying(255)
  );
`.then(() => {
  console.log('Tabela criada com sucesso!');
})