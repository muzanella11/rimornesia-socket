const path = require('path')

class TestController {
  constructor (app, connection, io) {
    this.app = app
    this.connection = connection
    this.io = io

    this.run()
    this.service()
  }

  run () {
    this.io.on('connect', socket => {
      let counter = 0

      setInterval(() => {
        socket.emit('hello', ++counter)
      }, 1000)
    })

    this.app.get('/test', (req, res) => {
      res.sendFile(path.resolve(process.cwd() + '/views/test/index.html'))
    })
  }

  service () {
    this.app.get('/test/service', (req, res) => {
      res.send(':)')
    })
  }
}

module.exports = TestController
