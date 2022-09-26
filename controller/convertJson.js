const convertJson = require('express').Router()
const csvToJson = require('convert-csv-to-json')
convertJson.post('/csvjson', async (req, res, next) => {
  try {
    const cvsFile = req.files.file
    if (!cvsFile) {
      throw ' no file found'
    }
    const json = csvToJson.csvStringToJson(cvsFile.data.toString())
    res.json(json)
  } catch (error) {
    next(error)
  }
})
module.exports = convertJson
