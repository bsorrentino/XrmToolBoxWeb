//
// ZX script
// @ref https://www.npmjs.com/package/zx
//

import 'zx/globals'

await fs.remove( 'node_modules' )
await fs.remove( '.parcel-cache' )