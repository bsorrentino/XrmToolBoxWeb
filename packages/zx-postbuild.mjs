//
// ZX script
// @ref https://www.npmjs.com/package/zx
//

import 'zx/globals'

const destDir = path.join( '..', 'App', 'lib')
await fs.ensureDir( destDir) 
await fs.copy( 'lib', destDir )