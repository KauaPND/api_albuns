import { sql } from './db.js';

export class DatabaseAlbuns {
    async createAlbum(album) {
        const id = album.id();
        const nome = album.nome;
        const banda = album.banda;
        const faixas = album.faixas;

        await sql`insert into albuns (id, nome, banda, faixas)
        values (${id}, ${nome}, ${banda}, ${faixas}`
    }

    async listAlbum() {

    }
  
    async updateAlbum(id, album) {
       
    }
  
    async deleteAlbum(id) {
       
    }
}