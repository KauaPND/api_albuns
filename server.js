
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabaseAlbuns } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabaseAlbuns;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/albuns', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createAlbum(body);
    return reply.status(201).send();
})


// REATE
server.get('/albuns', async () => {
    const albuns = await databasePostgres.listAlbuns();
    return albuns;
});

// UPDATE
server.put('/albuns/:id', async (request, reply) => {
    const albumID = request.params.id;
    const body = request.body;
    await databasePostgres.updateAlbum(albumID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/albuns/:id', async (request, reply) => {
    const albumID = request.params.id;
    await databasePostgres.deleteAlbum(albumID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
