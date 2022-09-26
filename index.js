const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const convertJson = require('./controller/convertJson')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/api/convert', convertJson)

app.use((error, req, res, next) => {
  console.log(error)
  console.error(error.name)
  res
    .status(400)
    .json({
      message: {
        error: error.name || error,
      },
    })
    .end()
})
const PORT = process.env.PORT || 3001
app.listen(PORT, function () {
  console.log(`Servidor web escuchando en el puerto ${PORT}`)
})
