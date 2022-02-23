//
// ZX script
// @ref https://www.npmjs.com/package/zx
//

import 'zx/globals'

await fs.remove( 'lib' )
await fs.remove( 'dist' )
await fs.remove( '.parcel-cache' )