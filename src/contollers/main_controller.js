const path = require('path')
const db = require('../models/queries')

module.exports.get_index = (req, res) => {
    res.render("index");
}