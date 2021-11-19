//
// ZX script
// @ref https://www.npmjs.com/package/zx
//

const { fs } = require("zx");

await fs.remove( 'lib' )
await fs.remove( 'dist' )
await fs.remove( '.parcel-cache' )