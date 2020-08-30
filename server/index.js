const express = require('express')
const appEn = express()
const http = require('http').createServer(appEn)
const io = require('socket.io')(http)
const enChalk = require('./../utils/chalk')
const env = require('dotenv').config()
const port = process.env.PORT || 1234
const portSocket = process.env.PORT_SOCKET || 7890
const db = require('./../config/database')
const router = require('./../router/index')
const pkg = require('./../package.json')
const projectName = pkg.name.split('-').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')

const initApp = () => {
  console.clear()
  console.info(enChalk.success(`######## ${projectName} ########`))
  console.info('')
  console.info('Works !')
  console.info('')

  // Database connection
  db.connect().then((resolve) => {
    // Connection
    var connection = resolve

    // Router
    router.init(appEn, connection, io)

    // Listener
    appEn.listen(port, () => {
      console.log(enChalk.success('App listening on port ' + port + '!'))
    })

    // Socket
    http.listen(portSocket, () => {
      console.log(enChalk.success('Socket listening on port ' + portSocket + '!'))
    })
  }, (error) => {
    console.log(enChalk.error('Error Connecting Database :('))
  })
}

module.exports = {
  init: initApp
}
