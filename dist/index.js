/** @license Apache-2.0 */

'use strict';

/**
* Pareto (Type I) distribution median.
*
* @module @stdlib/stats-base-dists-pareto-type1-median
*
* @example
* var median = require( '@stdlib/stats-base-dists-pareto-type1-median' );
*
* var v = median( 0.8, 1.0 );
* // returns ~2.378
*
* v = median( 4.0, 12.0 );
* // returns ~14.27
*
* v = median( 8.0, 2.0 );
* // returns ~2.181
*/

// MODULES //

var median = require( './main.js' );


// EXPORTS //

module.exports = median;
