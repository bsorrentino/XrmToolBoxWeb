//
// ZX script
// @ref https://www.npmjs.com/package/zx
//

const { fs, path } = require("zx");

const destDir = path.join( '..', 'xrmtoolboxweb-app', '/dist')
await fs.ensureDir( destDir) 
await fs.copy( 'lib', destDir )