/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var gammaFactory = require( '@stdlib/stats-base-dists-gamma-quantile' ).factory;
var sqrt = require( '@stdlib/math-base-special-sqrt' );


// MAIN //

/**
* Returns a function for evaluating the quantile function for a chi distribution with degrees of freedom `k`.
*
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {Function} quantile function
*
* @example
* var quantile = factory( 0.4 );
*
* var y = quantile( 0.9 );
* // returns ~1.1
*
* y = quantile( 1.0 );
* // returns Infinity
*/
function factory( k ) {
	var gamma = gammaFactory( k/2.0, 0.5 );
	return quantile;

	/**
	* Evaluates the quantile function for a chi distribution.
	*
	* @private
	* @param {Probability} p - input value
	* @returns {number} evaluated quantile function
	*
	* @example
	* var y = quantile( 0.3 );
	* // returns <number>
	*/
	function quantile( p ) {
		return sqrt( gamma( p ) );
	}
}


// EXPORTS //

module.exports = factory;
