var serveStatic = require("serve-static")
var path = require('path')
// Serve up public/ftp folders

var libpath = path.join(__dirname, "dist", "lib")
var serveLib = serveStatic( libpath );
// {
//   "index": false,
//   "setHeaders": setHeaders
// });

// Set header to force download
function setHeaders (res, path) {
    // res.setHeader('Content-Disposition', contentDisposition(path))
}

module.exports = function (app) {
    console.log( "install serve static middleware", libpath )
    app.use( serveLib );
}