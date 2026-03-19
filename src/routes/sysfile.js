const express = require("express");
const { readFiles } = require('../controller/folders.controller')
const router = express.Router();

// About page route.
router.get("/folders", async (req, res) => {
    console.log("==============", req.query)
    const params = req.query.path
    console.log(params)
    const data = await readFiles(params)
    res.status(200).json(data)
});

module.exports = router;