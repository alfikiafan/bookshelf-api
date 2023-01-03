// File untuk mengonfigurasikan server untuk Bookshelf API
// Alfiki Diastama Afan Firdaus

import { server as _server } from '@hapi/hapi'
import routes from './routes.js'

const init = async () => {
  const server = _server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(routes)

  await server.start()

  console.log(`Server sedang berjalan pada ${server.info.uri}. Server ini digunakan untuk mengelola rak buku virtual.`)
}

init()
