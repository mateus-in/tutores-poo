import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';

const server = fastify();

server.register(fastifyCors, {
  origin: '*',
});

// Primeira rota
server.get('/', (_req, reply) => {
  return reply.send({
    mensagem: 'Batatinha',
  });
});

server.get('/segunda-rota', (_req, reply) => {
  return reply.send({
    mensagem: 'Segunda rota',
  });
});

server
  .listen({
    port: 3333,
  })
  .then(() => console.log('Minha api tá rodando!'));
