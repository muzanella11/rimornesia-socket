const path = require('path')

class HomeController {
  constructor (app, connection) {
    this.app = app
    this.connection = connection

    this.run()
  }

  run () {
    this.app.get('/', (req, res) => {
      res.sendFile(path.resolve(process.cwd() + '/views/home/index.html'))
    })
  }
}

module.exports = HomeController
