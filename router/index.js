const HomeController = require('./../controllers/home')

const router = (app, connection) => {
  app.get('/example', (req, res) => {
    // Database and Query Example
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))"
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("Table created");
    })

    let dataRes = {
      code: 11,
      status: 'ok',
      messages: 'Ok Bro Example Router'
    }
    res.json(dataRes)
  })

  new HomeController(app, connection)
}

module.exports = {
  init: router
}
