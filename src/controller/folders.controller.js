const { join } = require('path')
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const { readdir, stat } = require('fs-promise') 

async function readFiles(dirname) {
    console.log("=================", dirname)
    const data = {};
    const files = await fsp.readdir(dirname);
    return files;
}

module.exports = { readFiles }
