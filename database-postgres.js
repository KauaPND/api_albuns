import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabaseAlbuns {
  async listAlbuns() {
    const albuns = await sql`select * from albuns`;
    return albuns;
  }

  async createAlbum(album) {
    const id = randomUUID();
    console.log('id', id);
    const nome = album.nome;
    const banda = album.banda;
    const faixas = album.faixas;

    await sql`insert into albuns (id, nome, banda, faixas)
    values (${id}, ${nome}, ${banda}, ${faixas})`
  }

  async updateAlbum(id, album) {
    const nome = album.nome;
    const banda = album.banda;
    const faixas = album.faixas;

    await sql`update albuns set 
        nome = ${nome},
        banda = ${banda},
        faixas = ${faixas}
        where id = ${id}
    `;
  }

  async deleteAlbum(id) {
    await sql`delete from albuns where id = ${id}`
  }
}
