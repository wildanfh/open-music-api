require('dotenv').config();

const Hapi = require('@hapi/hapi');
const musics = require('./api/notes');
const { MusicsService } = require('./services/postgres/MusicService');
const musicsValidator = require('./validator/notes');

const init = async () => {
  const musicsService = new MusicsService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: musics,
    options: {
      service: musicsService,
      validator: musicsValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();