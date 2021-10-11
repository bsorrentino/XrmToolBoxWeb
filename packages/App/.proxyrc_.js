var serveStatic = require("serve-static")
var path = require('path')
// Serve up public/ftp folders

var libpath = path.join(__dirname, "lib")
var serveLib = serveStatic( libpath,
{
    index: false,
    //fallthrough: false
});

// Set header to force download
function setHeaders (res, path) {
    // res.setHeader('Content-Disposition', contentDisposition(path))
}

module.exports = function (app) {
    console.log( "install serve static middleware", libpath )
    app.use( "/lib", serveLib );
}